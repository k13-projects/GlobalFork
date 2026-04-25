import { ImageResponse } from "next/og";

export const runtime = "edge";

const SAND = "#ebe1d0";
const IRON = "#2f2c28";
const HARVEY = "#b08539";
const CLAY = "#a3443e";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const title = url.searchParams.get("title") ?? "Global Fork";
  const eyebrow = url.searchParams.get("eyebrow") ?? "San Diego, CA";
  const tagline = url.searchParams.get("tagline") ?? "A world of flavors. One place to gather.";
  const tone = url.searchParams.get("tone") ?? IRON;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: tone,
          color: SAND,
          padding: "80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top bar with eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: HARVEY,
            fontWeight: 600,
          }}
        >
          <span style={{ width: 48, height: 1, background: HARVEY }} />
          {eyebrow}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 110,
            lineHeight: 0.96,
            letterSpacing: -2,
            textTransform: "uppercase",
            fontWeight: 800,
            color: SAND,
          }}
        >
          {title}
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            lineHeight: 1.2,
            color: SAND,
            opacity: 0.78,
            maxWidth: 980,
          }}
        >
          {tagline}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 48,
            color: SAND,
            opacity: 0.7,
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>globalfork.example</span>
          <span style={{ color: CLAY, fontWeight: 700 }}>· GF ·</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
