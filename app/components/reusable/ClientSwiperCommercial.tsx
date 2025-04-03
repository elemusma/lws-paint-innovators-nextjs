"use client";

import dynamic from "next/dynamic";

// Dynamically import SwiperCarouselCommercial with no SSR
const SwiperCarouselCommercial = dynamic(
  () => import("../swiperCarouselCommercial"),
  {
    ssr: false,
    loading: () => (
      <div className="lg:min-h-[530px] md:min-h-[629px] min-h-[611px] bg-gray-100" />
    ),
  }
);

const ClientSwiperWrapper = () => {
  return <SwiperCarouselCommercial />;
};

export default ClientSwiperWrapper;
