"use client";
import { useEffect, useRef } from "react";

interface OwlCarouselProps {
  children: React.ReactNode;
  options?: any;
}

export default function OwlCarousel({
  children,
  options = {},
}: OwlCarouselProps) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const initCarousel = () => {
      const defaultOptions = {
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        loop: true,
        ...options,
      };

      // Check if jQuery and Owl Carousel are loaded
      if (
        typeof window !== "undefined" &&
        window.jQuery &&
        window.jQuery.fn.owlCarousel
      ) {
        jQuery(carouselRef.current).owlCarousel(defaultOptions);
      }
    };

    // Wait for scripts to load
    if (document.readyState === "complete") {
      initCarousel();
    } else {
      window.addEventListener("load", initCarousel);
    }

    return () => {
      if (typeof window !== "undefined" && window.jQuery) {
        jQuery(carouselRef.current).trigger("destroy.owl.carousel");
      }
      window.removeEventListener("load", initCarousel);
    };
  }, [options]);

  return (
    <div ref={carouselRef} className="owl-carousel owl-theme">
      {children}
    </div>
  );
}
