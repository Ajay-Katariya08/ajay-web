import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = "Ajay Katariya - Senior Frontend Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#09090b",
        padding: "80px",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "rgba(16, 185, 129, 0.15)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          padding: "8px 20px",
          borderRadius: "9999px",
          fontSize: "20px",
          color: "#34d399",
          marginBottom: "32px",
        }}
      >
        {siteConfig.availabilityText}
      </div>
      <h1
        style={{
          fontSize: "64px",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: "0 0 16px 0",
        }}
      >
        {siteConfig.name}{" "}
        <span style={{ color: "#818cf8" }}>({siteConfig.alias})</span>
      </h1>
      <p
        style={{
          fontSize: "32px",
          color: "#a1a1aa",
          margin: "0 0 32px 0",
          maxWidth: "900px",
        }}
      >
        {siteConfig.role} & React Developer
      </p>
      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "22px",
          color: "#818cf8",
        }}
      >
        <span>https://ajaykatariyadev.vercel.app</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
