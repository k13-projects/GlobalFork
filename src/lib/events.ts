/**
 * Events data source.
 *
 * Mirrors the Miramar setup: the live event list is maintained in a Google
 * Sheet that is "published to web" as CSV, and fetched client-side on load so
 * edits to the sheet show up on the site without a rebuild/redeploy. If the
 * fetch fails, the UI falls back to a hardcoded list (see Events.tsx).
 *
 * Sheet: "GlobalFork Food Hall - Events List"
 * Columns (row 1 = header): Month | Day | Title | Description | URL
 */

export type EventItem = {
  month: string;
  day: string;
  title: string;
  description?: string;
  url?: string;
};

export const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQoUPCbLMmlE2mBWLAIGj__jeHVJwntR8Y28e-bwelaLJxdds25hKdLdrcTUYN2fjb1s0iFl-kd3b4V/pub?gid=0&single=true&output=csv";

/** Split one CSV line into trimmed fields, honoring quoted commas. */
function parseCSVLine(line: string): string[] {
  const cols: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      cols.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  cols.push(current.trim());
  return cols;
}

/** Parse the published-sheet CSV into events. Skips the header row and any row
 *  missing Month/Day/Title. */
export function parseEventsCSV(csv: string): EventItem[] {
  const lines = csv.split(/\r?\n/).slice(1); // drop header row
  return lines
    .map((line): EventItem | null => {
      const cols = parseCSVLine(line);
      if (cols.length >= 3 && cols[0] && cols[1] && cols[2]) {
        return {
          month: cols[0],
          day: cols[1],
          title: cols[2],
          description: cols[3] || "",
          url: cols[4] || "",
        };
      }
      return null;
    })
    .filter((e): e is EventItem => e !== null);
}

/** Ensure a sheet-provided URL has a protocol so the link works. */
export function normalizeUrl(url: string): string {
  const u = url.trim();
  if (!u) return "";
  return /^https?:\/\//i.test(u) ? u : `https://${u}`;
}

/** Fetch + parse the live events sheet. Throws on network/HTTP failure so the
 *  caller can fall back to the hardcoded list. */
export async function fetchEvents(): Promise<EventItem[]> {
  const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Events sheet fetch failed: ${res.status}`);
  return parseEventsCSV(await res.text());
}
