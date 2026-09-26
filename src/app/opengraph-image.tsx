import { ImageResponse } from "next/og";

export const alt =
  "Sachin Pandey — B2B marketing systems consultant. AI SEO, GEO, AEO, and content systems that compound.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A12",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Ambient colour wash */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #630ED4 0%, #A855F7 45%, #EC4899 100%)",
            filter: "blur(120px)",
            opacity: 0.55,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
            filter: "blur(130px)",
            opacity: 0.35,
            display: "flex",
          }}
        />

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#630ED4",
              color: "#FFFFFF",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid rgba(168,85,247,0.45)",
              background: "rgba(99,14,212,0.16)",
              color: "#C4B5FD",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 1.5,
            }}
          >
            B2B MARKETING SYSTEMS
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            Most B2B don&apos;t have a
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                color: "#FFFFFF",
                fontSize: 62,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -1.5,
              }}
            >
              marketing problem.
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: 6,
                height: 62,
                borderRadius: 9999,
                background: "#A855F7",
              }}
            />
            <div
              style={{
                display: "flex",
                color: "#C4B5FD",
                fontSize: 62,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -1.5,
              }}
            >
              They have a systems problem.
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", color: "#FFFFFF", fontSize: 28, fontWeight: 600 }}>
            Sachin Pandey
          </div>
          <div style={{ display: "flex", color: "#A1A1AA", fontSize: 24 }}>
            AI SEO &nbsp;·&nbsp; GEO &nbsp;·&nbsp; AEO &nbsp;·&nbsp; Content Systems
          </div>
        </div>
      </div>
    ),
    size
  );
}
