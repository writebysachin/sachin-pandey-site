import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt =
  "Sachin Pandey — B2B Marketing Systems Consultant. Websites, SEO, and content systems that compound.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const photo = readFileSync(
    join(process.cwd(), "public/images/sachin-pandey.png")
  );
  const photoUri = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "#0A0A12",
          padding: "72px 80px",
          gap: 64,
          position: "relative",
        }}
      >
        {/* Ambient colour wash */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "linear-gradient(135deg, #630ED4 0%, #A855F7 45%, #EC4899 100%)",
            filter: "blur(130px)",
            opacity: 0.55,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -280,
            left: -180,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
            filter: "blur(140px)",
            opacity: 0.35,
            display: "flex",
          }}
        />

        {/* Profile photo with gradient ring */}
        <div
          style={{
            display: "flex",
            width: 360,
            height: 360,
            borderRadius: 9999,
            background:
              "linear-gradient(135deg, #630ED4 0%, #A855F7 50%, #EC4899 100%)",
            padding: 7,
            flexShrink: 0,
            position: "relative",
          }}
        >
          <img
            src={photoUri}
            alt="Sachin Pandey"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 9999,
              objectFit: "cover",
              display: "flex",
            }}
          />
        </div>

        {/* Copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
            flex: 1,
          }}
        >
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
              letterSpacing: 3,
              alignSelf: "flex-start",
            }}
          >
            ABOUT
          </div>

          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Sachin Pandey
          </div>

          <div
            style={{
              display: "flex",
              color: "#C4B5FD",
              fontSize: 34,
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            B2B Marketing Systems Consultant
          </div>

          <div
            style={{
              display: "flex",
              color: "#A1A1AA",
              fontSize: 26,
              lineHeight: 1.45,
              maxWidth: 560,
            }}
          >
            Websites, SEO, and content systems that compound over time — plus
            Yoga Write Code.
          </div>

          {/* Footer row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.14)",
              paddingTop: 24,
              marginTop: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#FFFFFF",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              sachinpandey.com.np
            </div>
            <div style={{ display: "flex", color: "#A1A1AA", fontSize: 22 }}>
              AI SEO &nbsp;·&nbsp; GEO &nbsp;·&nbsp; AEO &nbsp;·&nbsp; Content
              Systems
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
