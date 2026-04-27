import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

const SAND = "#ebe1d0";
const IRON = "#2f2c28";
const HARVEY = "#b08539";
const CLAY = "#a3443e";

const HEX_RE = /^#[0-9A-Fa-f]{6}$/;
const clamp = (s: string | null, max: number, fallback: string) =>
  (s ?? fallback).slice(0, max);

export async function GET(req: Request) {
  const url = new URL(req.url);
  const title = clamp(url.searchParams.get("title"), 120, "Global Fork");
  const eyebrow = clamp(url.searchParams.get("eyebrow"), 60, "San Diego, CA");
  const tagline = clamp(
    url.searchParams.get("tagline"),
    200,
    "A world of flavors. One place to gather.",
  );
  const toneParam = url.searchParams.get("tone");
  const tone = toneParam && HEX_RE.test(toneParam) ? toneParam : IRON;
  const footer = siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

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
          <span>{footer}</span>
          <span style={{ color: CLAY, fontWeight: 700 }}>· GF ·</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
