"use client";
import React, { useEffect, useRef, useState } from "react";
import "../styles/tabs.scss";

interface Tab {
  title: string;
  content: React.ReactNode;
  // Optionally, you can add more fields (e.g. code_block, img, alt, etc.)
}

interface TabsProps {
  tabs: Tab[];
  containerClassName?: string;
  headerClassName?: string;
  tabButtonClassName?: string;
  activeTabButtonClassName?: string;
  contentClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  containerClassName = "",
  headerClassName = "flex justify-center flex-wrap",
  tabButtonClassName = "btn tab-title",
  activeTabButtonClassName = "active",
  contentClassName = "content-area transition-opacity duration-300",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Adjust content height so that all panels match the height of the tallest one.
  useEffect(() => {
    let maxHeight = 0;
    contentRefs.current.forEach((ref) => {
      if (ref && ref.offsetHeight > maxHeight) {
        maxHeight = ref.offsetHeight;
      }
    });
    contentRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.height = `${maxHeight}px`;
      }
    });
  }, [tabs, activeIndex]);

  return (
    <div className={`tabs-container ${containerClassName}`}>
      {/* Tab Header */}
      <div className={headerClassName}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={`tab-${index}`}
            className={`${tabButtonClassName} ${
              activeIndex === index ? activeTabButtonClassName : ""
            }`}
            style={{ cursor: "pointer", padding: "0.5rem 1rem" }}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content Panels */}
      <div className="tabs-content relative">
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className={`${contentClassName} ${
              activeIndex === index
                ? "content-area activate position-relative opacity-100"
                : "content-area position-absolute opacity-0"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
