import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/siteConfig";

export const alt = `${siteConfig.name} — Software Product Agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0d12",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #232838 2px, transparent 0)",
          backgroundSize: "50px 50px",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#edf0f5",
          }}
        >
          {siteConfig.name}
          <span style={{ color: "#3ddc97" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#9aa3b8",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
