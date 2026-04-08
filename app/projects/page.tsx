import type { Metadata } from "next";
import { Website } from "@/app/components/globals";
import WorkFeed from "./workfeed";

export const metadata: Metadata = {
  title: "Projects - Commercial, Industrial & Specialty Painting Work - Paint Innovators",
  description: "Explore painting projects completed by Paint Innovators...",
  openGraph: {
    title: "Projects - Commercial, Industrial & Specialty Painting Work - Paint Innovators",
    description: "Explore painting projects completed by Paint Innovators...",
    url: `${Website}/projects`,
    type: "website",
    images: [{ url: `${Website}/photos/Arkansas.jpg`, width: 1200, height: 630, alt: "..." }],
  },
  alternates: { canonical: `${Website}/projects` },
};

export default function ProjectsPage() {
  return <WorkFeed />;
}