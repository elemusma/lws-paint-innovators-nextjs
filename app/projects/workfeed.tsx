"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import ContentBlock from "../components/content-block";
import Link from "next/link";
import Image from "next/image";
import CTA from "../components/reusable/cta";
// import { Website } from "@/app/components/globals";


// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  location: string;
  locationSlug: string;
  projectType: string;
  projectTypeSlug: string;
  tags: string[];
  href: string;
  image: string;
  featured?: boolean;
}

// interface SpecialFeature {
//   label: string;
//   href?: string;
//   image: string;
// }

// ─── Sample Data ──────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Ava June",
    location: "Tulsa",
    locationSlug: "tulsa",
    projectType: "Hospitality",
    projectTypeSlug: "hospitality",
    tags: ["restaurant"],
    href: "/projects/tulsa-ava-june",
    image: "/projects/Paint-Innovators-Projects-Ava-June-Tulsa-1.jpg",
  },
  {
    id: "2",
    title: "The Gents Place",
    location: "Arkansas",
    locationSlug: "arkansas",
    projectType: "Commercial",
    projectTypeSlug: "commercial",
    tags: ["spa", "grooming"],
    href: "/projects/the-gents-place",
    image: "/projects/the-gents-place/Paint-Innovators-Projects-The-Gents-Place-1.jpg",
  },
  {
    id: "3",
    title: "University of Arkansas Fitness Center Renovation",
    location: "Arkansas",
    locationSlug: "arkansas",
    projectType: "Education",
    projectTypeSlug: "education",
    tags: ["fitness-center", "campus"],
    href: "/projects/hyper",
    image: "/projects/hyper/Paint-Innovators-Projects-Hyper-1.jpg",
  },
  {
    id: "4",
    title: "Olive Grove Nature School",
    location: "Arkansas",
    locationSlug: "arkansas",
    projectType: "Education",
    projectTypeSlug: "education",
    tags: ["campus", "early-education"],
    href: "/projects/olive-grove-nature-school",
    image: "/projects/olive-grove-nature-school/Paint-Innovators-Projects-Olive-Grove-Natural-School-1.jpg",
  },
  {
    id: "5",
    title: "Port of Catoosa",
    location: "Tulsa",
    locationSlug: "tulsa",
    projectType: "Industrial",
    projectTypeSlug: "industrial",
    tags: ["logistics", "shipping"],
    href: "/projects/port-catoosa-tulsa",
    image: "/projects/port-catoosa-tulsa/Paint-Innovators-Projects-Port-Catoosa-Tulsa-1.jpg",
  },
  {
    id: "6",
    title: "REI Retail Store",
    location: "Tulsa",
    locationSlug: "tulsa",
    projectType: "Commercial",
    projectTypeSlug: "commercial",
    tags: ["retail", "store"],
    href: "/projects/rei-tulsa",
    image: "/projects/rei-tulsa/Paint-Innovators-Projects-REI-Tulsa-1.jpg",
  },
  {
    id: "7",
    title: "Springdale Senior Center",
    location: "Arkansas",
    locationSlug: "arkansas",
    projectType: "Hospitality",
    projectTypeSlug: "hospitality",
    tags: ["community", "senior-center"],
    href: "/projects/senior-center",
    image: "/projects/senior-center/Paint-Innovators-Projects-Senior-Center-1.jpg",
  },
  {
    id: "8",
    title: "SCHEELS - Tulsa",
    location: "Tulsa",
    locationSlug: "tulsa",
    projectType: "Commercial",
    projectTypeSlug: "commercial",
    tags: ["retail", "sporting-goods"],
    href: "/projects/scheels-tulsa",
    image: "/projects/scheels-tulsa/Paint-Innovators-Projects-Scheels-Tulsa-1.jpg",
  },
  // {
  //   id: "2",
  //   title: "Confidential Capital Investment Firm",
  //   location: "Northern California",
  //   locationSlug: "northern-california",
  //   projectType: "Commercial Office",
  //   projectTypeSlug: "commercial-office",
  //   tags: ["financial"],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  // },
  // {
  //   id: "3",
  //   title: "Confidential Manufacturing Building",
  //   location: "Illinois",
  //   locationSlug: "illinois",
  //   projectType: "Industrial",
  //   projectTypeSlug: "industrial",
  //   tags: [],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  // },
  // {
  //   id: "4",
  //   title: "Kovitz",
  //   location: "Illinois",
  //   locationSlug: "illinois",
  //   projectType: "Commercial Office",
  //   projectTypeSlug: "commercial-office",
  //   tags: ["financial", "headquarters"],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
  // },
  // {
  //   id: "5",
  //   title: "Reverb",
  //   location: "Illinois",
  //   locationSlug: "illinois",
  //   projectType: "Hospitality",
  //   projectTypeSlug: "hospitality",
  //   tags: [],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  // },
  // {
  //   id: "6",
  //   title: "We Care Daily Clinics",
  //   location: "Washington",
  //   locationSlug: "washington",
  //   projectType: "Healthcare",
  //   projectTypeSlug: "healthcare",
  //   tags: [],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  // },
  // {
  //   id: "7",
  //   title: "Tower 1201 Amenities Center",
  //   location: "Washington",
  //   locationSlug: "washington",
  //   projectType: "Structures",
  //   projectTypeSlug: "structures",
  //   tags: ["fitness-center"],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  // },
  // {
  //   id: "8",
  //   title: "Global Private Investment Firm",
  //   location: "Northern California",
  //   locationSlug: "northern-california",
  //   projectType: "Commercial Office",
  //   projectTypeSlug: "commercial-office",
  //   tags: ["financial", "headquarters"],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  // },
  // {
  //   id: "9",
  //   title: "Paul Hastings",
  //   location: "Northern California",
  //   locationSlug: "northern-california",
  //   projectType: "Commercial Office",
  //   projectTypeSlug: "commercial-office",
  //   tags: ["law"],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  // },
  // {
  //   id: "10",
  //   title: "Global Tech Client Office & Lab Buildout",
  //   location: "Southern California",
  //   locationSlug: "southern-california",
  //   projectType: "Life Science",
  //   projectTypeSlug: "life-science",
  //   tags: ["technology", "labs"],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  // },
  // {
  //   id: "11",
  //   title: "MATTER Chicago",
  //   location: "Illinois",
  //   locationSlug: "illinois",
  //   projectType: "Healthcare",
  //   projectTypeSlug: "healthcare",
  //   tags: [],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  // },
  // {
  //   id: "12",
  //   title: "8X8",
  //   location: "Northern California",
  //   locationSlug: "northern-california",
  //   projectType: "Commercial Office",
  //   projectTypeSlug: "commercial-office",
  //   tags: ["technology", "headquarters"],
  //   href: "#",
  //   image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  // },
];

const LOCATIONS = [
  { label: "Arkansas", value: "arkansas" },
  { label: "Tulsa", value: "tulsa" },
  // { label: "Multiple Locations", value: "multiple-locations" },
  // { label: "Northern California", value: "northern-california" },
  // { label: "Southern California", value: "southern-california" },
  // { label: "Washington", value: "washington" },
];

const PROJECT_TYPES = [
  { label: "Commercial", value: "commercial" },
  { label: "Education", value: "education" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Industrial", value: "industrial" },
  // { label: "Life Science", value: "life-science" },
  // { label: "Healthcare", value: "healthcare" },
  // { label: "Hospitality", value: "hospitality" },
  // { label: "Structures", value: "structures" },
];

// const TAGS = [
//   { label: "Financial", value: "financial" },
//   { label: "Headquarters", value: "headquarters" },
//   { label: "Law", value: "law" },
//   { label: "Technology", value: "technology" },
// ];

// const SPECIAL_FEATURES: SpecialFeature[] = [
//   { label: "Custom Lighting", href: "#", image: "https://images.unsplash.com/photo-1529310399831-ed472b81d589?w=400&q=80" },
//   { label: "Custom Millwork", href: "#", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
//   { label: "Fitness Center", href: "#", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
//   { label: "Game Room", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80" },
//   { label: "Kitchen & Café", href: "#", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80" },
//   { label: "Labs", href: "#", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80" },
//   { label: "LEED", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80" },
//   { label: "Living Walls", href: "#", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" },
//   { label: "Outdoor Spaces", href: "#", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80" },
//   { label: "Staircases", href: "#", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
//   { label: "Training Rooms", href: "#", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" },
//   { label: "Wall Graphics", href: "#", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400&q=80" },
// ];

const ITEMS_PER_PAGE = 9;

// ─── Chevron SVG ──────────────────────────────────────────────────────────────
function ChevronDown({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg width="12" height="7" viewBox="0 0 13 7" fill="none" className={className} style={style}>
      <path d="M11.8545 1.23413L6.70742 6.2488L1.53037 1.26508" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2.75 7.5L7.25 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.59375 2.5H7.25V6.5625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
      <path d="M8.21875 0.884521L3.40352 5.59606L1 3.24029" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Dropdown Component ───────────────────────────────────────────────────────
function FilterDropdown({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: { label: string; value: string }[];
  selected: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 18px",
          background: open ? "var(--accent-primary)" : "transparent",
          border: "1px solid",
          borderColor: open ? "var(--accent-primary)" : "rgba(0,0,0,0.2)",
          borderRadius: "4px",
          color: open ? "#fff" : "#000",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          transition: "all 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        {label}
        {selected.length > 0 && (
          <span style={{
            background: open ? "rgba(0,0,0,0.3)" : "var(--accent-primary)",
            color: "#fff",
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            fontWeight: 700,
          }}>
            {selected.length}
          </span>
        )}
        <ChevronDown style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease", color: open ? "#fff" : "var(--accent-primary)" } as React.CSSProperties} />
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 6px)",
          left: 0,
          minWidth: "200px",
          background: "#111",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "6px",
          overflow: "hidden",
          zIndex: 100,
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          animation: "dropIn 0.15s ease",
        }}>
          {options.map((opt) => {
            const checked = selected.includes(opt.value);
            return (
              <label
                key={opt.value}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 16px",
                  cursor: "pointer",
                  background: checked ? "rgba(var(--accent-primary-rgb),0.1)" : "transparent",
                  transition: "background 0.15s",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => { if (!checked) (e.currentTarget as HTMLLabelElement).style.background = "rgba(0,0,0,0.05)"; }}
                onMouseLeave={(e) => { if (!checked) (e.currentTarget as HTMLLabelElement).style.background = "transparent"; }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onChange(opt.value)}
                  style={{ display: "none" }}
                />
                <span style={{
                  width: "16px",
                  height: "16px",
                  border: "1px solid",
                  borderColor: checked ? "var(--accent-primary)" : "rgba(0,0,0,0.3)",
                  borderRadius: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: checked ? "var(--accent-primary)" : "transparent",
                  color: "#fff",
                  flexShrink: 0,
                  transition: "all 0.15s",
                }}>
                  {checked && <CheckIcon />}
                </span>
                <span style={{ fontSize: "13px", color: checked ? "#fff" : "#aaa", fontWeight: checked ? 600 : 400 }}>
                  {opt.label}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
        aspectRatio: "4/3",
        textDecoration: "none",
        background: "#1a1a1a",
      }}
    >
      {/* Image */}
      <Image
  src={project.image}
  alt={project.title}
  fill
  style={{
    objectFit: "cover",
    transform: hovered ? "scale(1.06)" : "scale(1)",
    transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  }}
/>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: hovered
          ? "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)"
          : "linear-gradient(to top, rgba(0,0,0,0.7) 30%, transparent 70%)",
        transition: "background 0.3s ease",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "20px",
        transform: hovered ? "translateY(0)" : "translateY(4px)",
        transition: "transform 0.3s ease",
      }}>
        <div style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "var(--accent-primary)",
          textTransform: "uppercase",
          marginBottom: "4px",
        }}>
          {project.location}
        </div>
        <div style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#fff",
          lineHeight: 1.3,
          marginBottom: hovered ? "10px" : "0",
          transition: "margin 0.3s ease",
        }}>
          {project.title}
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase" }}>
            See Project
          </span>
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
}

// ─── Special Feature Popup ────────────────────────────────────────────────────
function SpecialFeaturePopup({ }: { onClose: () => void }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 200,
      display: "flex",
      flexDirection: "column",
      animation: "fadeIn 0.2s ease",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        padding: "40px 24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Header */}
        {/* special feature button - hidden for now */}
        {/* <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              padding: "8px 0",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.25 12H3.75" /><path d="M10.5 5.25L3.75 12L10.5 18.75" />
            </svg>
            Back
          </button>
          <div>
            <h3 style={{ color: "#fff", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>
              Special Feature
            </h3>
            <div style={{ height: "2px", background: "var(--accent-primary)", marginTop: "4px", borderRadius: "1px" }} />
          </div>
        </div> */}

        {/* Grid */}
        {/* <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          overflowY: "auto",
          flex: 1,
        }}>
          {SPECIAL_FEATURES.map((feat) => (
            <FeatureCard key={feat.label} feature={feat} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

// function FeatureCard({ feature }: { feature: SpecialFeature }) {
//   const [hovered, setHovered] = useState(false);
//   const Tag = feature.href ? "a" : "div";

//   return (
//     <Tag
//       href={feature.href}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: "block",
//         position: "relative",
//         overflow: "hidden",
//         borderRadius: "6px",
//         aspectRatio: "4/3",
//         textDecoration: "none",
//         cursor: feature.href ? "pointer" : "default",
//         background: "#1a1a1a",
//       }}
//     >
//       <img
//         src={feature.image}
//         alt={feature.label}
//         style={{
//           width: "100%", height: "100%", objectFit: "cover", display: "block",
//           transform: hovered ? "scale(1.06)" : "scale(1)",
//           transition: "transform 0.5s ease",
//           filter: !feature.href ? "grayscale(50%)" : "none",
//         }}
//       />
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 30%, transparent 70%)" }} />
//       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
//         <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: feature.href ? "6px" : 0 }}>
//           {feature.label}
//         </div>
//         {feature.href && (
//           <div style={{ display: "flex", alignItems: "center", gap: "5px", opacity: hovered ? 1 : 0, transition: "opacity 0.2s" }}>
//             <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase" }}>See More</span>
//             <ArrowIcon />
//           </div>
//         )}
//         {!feature.href && (
//           <span style={{ fontSize: "10px", color: "rgba(0,0,0,0.4)", letterSpacing: "0.08em" }}>COMING SOON</span>
//         )}
//       </div>
//     </Tag>
//   );
// }

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WorkFeed() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showSpecial, setShowSpecial] = useState(false);
  const [page, setPage] = useState(1);

  const toggleLocation = useCallback((val: string) => {
    setSelectedLocations((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
    setPage(1);
  }, []);

  const toggleType = useCallback((val: string) => {
    setSelectedTypes((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
    setPage(1);
  }, []);

  // const toggleTag = useCallback((val: string) => {
  //   setSelectedTags((prev) =>
  //     prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
  //   );
  //   setPage(1);
  // }, []);

  const reset = () => {
    setSelectedLocations([]);
    setSelectedTypes([]);
    setSelectedTags([]);
    setPage(1);
  };

  const hasFilters = selectedLocations.length > 0 || selectedTypes.length > 0 || selectedTags.length > 0;

  const filtered = PROJECTS.filter((p) => {
    if (selectedLocations.length > 0 && !selectedLocations.includes(p.locationSlug)) return false;
    if (selectedTypes.length > 0 && !selectedTypes.includes(p.projectTypeSlug)) return false;
    if (selectedTags.length > 0 && !selectedTags.some((t) => p.tags.includes(t))) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <>

<ContentBlock
        sectionClassName="bg-[var(--neutral-dark)] text-white relative py-[150px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
        background={
          // Optional background element; can be omitted if not needed.
          <>
            <Image
              src={"/home/Paint-Innovators-2025-12.jpg"}
              alt="Wall paper removal"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ objectFit: "cover", objectPosition: "right" }}
              fill
            />
            <div
              className="absolute bg-black opacity-[0.5] top-0 left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",
              }}
            ></div>
          </>
        }
      >
        <div className="relative">
          <h1 className="md:text-6xl text-4xl uppercase font-proxima-bold text-shadow">
            Real Work. Real Environments. Proven Results.
          </h1>
          {/* <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2> */}
          <p className="text-shadow text-lg">
            Our projects span industrial facilities, commercial spaces, and specialized environments across multiple states. Each project is approached with the same standard: durability, precision, and minimal disruption to operations.
          </p>
          <Link href="/get-estimate" className="btn-main mt-[20px]">
            Get Free Estimate
          </Link>
        </div>
      </ContentBlock>
<ContentBlock
        sectionClassName="relative pt-[50px]"
        containerClassName="max-w-screen-lg mx-auto"
        rowClassName="flex flex-col items-center"
        columnClassName="w-full text-center"
      >
        <div className="relative">
          <h2 className="md:text-3xl text-2xl uppercase font-proxima-bold">
            Make Your Vision Come True
          </h2>
          {/* <h2 className="font-aspira-bold text-2xl">
            People <span className="text-accent">&bull;</span> Family{" "}
            <span className="text-accent">&bull;</span> Community
          </h2> */}
          <p className="">
            From large-scale industrial coatings to detailed commercial finishes, this page gives you a clear look at the type of work we perform and the environments we operate in.
          </p>
        </div>
      </ContentBlock>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes gridIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .wf-tag-btn {
          padding: 7px 14px;
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.15);
          background: transparent;
          color: black;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .wf-tag-btn:hover {
          border-color: rgba(var(--accent-primary-rgb),0.5);
        }
        .wf-tag-btn.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #fff;
        }
        
        .wf-page-btn {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.15);
          background: transparent;
          color: #999;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .wf-page-btn:hover { border-color: var(--accent-primary); }
        .wf-page-btn.active { background: var(--accent-primary); border-color: var(--accent-primary); color: #fff; }
        
        .wf-special-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: transparent;
          border: 1px solid rgba(var(--accent-primary-rgb),0.4);
          border-radius: 4px;
          color: var(--accent-primary);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .wf-special-btn:hover {
          background: var(--accent-primary);
          color: #fff;
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        padding: "60px 24px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header */}
          {/* <div style={{ marginBottom: "48px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "var(--accent-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
              Industrial, Commercial Projects
            </p>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.1 }}>
              Projects
            </h1>
          </div> */}

          {/* Filter Bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "24px",
            paddingBottom: "24px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", color: "#555", textTransform: "uppercase", marginRight: "4px" }}>
              Filter by:
            </span>

            <FilterDropdown
              label="Locations"
              options={LOCATIONS}
              selected={selectedLocations}
              onChange={toggleLocation}
            />

            <FilterDropdown
              label="Project Type"
              options={PROJECT_TYPES}
              selected={selectedTypes}
              onChange={toggleType}
            />

{/* special feature button - hidden for now */}
            {/* <button className="wf-special-btn" onClick={() => setShowSpecial(true)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Special Feature
            </button> */}

            {hasFilters && (
              <button
                onClick={reset}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: "none",
                  color: "#666",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  transition: "color 0.2s",
                  padding: "4px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Tag Pills */}
          {/* <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
            {TAGS.map((tag) => (
              <button
                key={tag.value}
                className={`wf-tag-btn${selectedTags.includes(tag.value) ? " active" : ""}`}
                onClick={() => toggleTag(tag.value)}
              >
                {tag.label}
              </button>
            ))}
          </div> */}

          {/* Results count */}
          <div style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "12px", color: "#555", letterSpacing: "0.05em" }}>
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
            {hasFilters && (
              <span style={{ fontSize: "12px", color: "var(--accent-primary)" }}>— filtered</span>
            )}
          </div>

          {/* Grid */}
          {paginated.length > 0 ? (
            <div
              key={`${selectedLocations.join()}-${selectedTypes.join()}-${selectedTags.join()}-${page}`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "20px",
                marginBottom: "48px",
                animation: "gridIn 0.3s ease",
              }}
            >
              {paginated.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: "center",
              padding: "80px 20px",
              color: "#444",
              animation: "gridIn 0.3s ease",
            }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>◉</div>
              <p style={{ fontSize: "14px", letterSpacing: "0.05em" }}>No projects match your filters.</p>
              <button onClick={reset} style={{ marginTop: "16px", background: "none", border: "none", color: "var(--accent-primary)", cursor: "pointer", fontSize: "13px", fontFamily: "inherit", textDecoration: "underline" }}>
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <button
                className="wf-page-btn"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{ opacity: page === 1 ? 0.3 : 1 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) {
                  return (
                    <button
                      key={p}
                      className={`wf-page-btn${page === p ? " active" : ""}`}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </button>
                  );
                }
                if (Math.abs(p - page) === 2) {
                  return <span key={p} style={{ color: "#444", fontSize: "13px" }}>…</span>;
                }
                return null;
              })}

              <button
                className="wf-page-btn"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{ opacity: page === totalPages ? 0.3 : 1 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <CTA />

      {/* Special Feature Popup */}
      {showSpecial && <SpecialFeaturePopup onClose={() => setShowSpecial(false)} />}
    </>
  );
}
