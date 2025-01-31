"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const OwlCarouselComponent = () => {
  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-4">Owl Carousel Example</h2>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        autoplay
        autoplayTimeout={3000}
        responsive={{
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        }}
      >
        {[...Array(12)].map((_, index) => (
          <div key={index} className="item bg-gray-300 p-6 text-center rounded-lg">
            <h4>{index + 1}</h4>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default OwlCarouselComponent;
