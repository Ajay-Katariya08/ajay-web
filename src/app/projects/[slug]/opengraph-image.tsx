import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/data/projects";

export const alt = "Project by Ajay Katariya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          color: "#ffffff",
          fontSize: "48px",
        }}
      >
        Project Not Found
      </div>,
      { ...size }
    );
  }

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
        {project.category}
      </div>
      <h1
        style={{
          fontSize: "64px",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: "0 0 16px 0",
          color: "#ffffff",
        }}
      >
        {project.title}
      </h1>
      <p
        style={{
          fontSize: "32px",
          color: "#a1a1aa",
          margin: "0 0 32px 0",
          maxWidth: "900px",
          lineHeight: 1.4,
        }}
      >
        A frontend project by Ajay Katariya ({siteConfig.alias})
      </p>
      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "22px",
          color: "#818cf8",
        }}
      >
        <span>{siteConfig.url}</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
