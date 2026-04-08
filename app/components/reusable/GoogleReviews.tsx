"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../logo";

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: { text: string; languageCode: string } | string;
  profile_photo_url?: string;
}

const REVIEWS: Review[] = [
  {
    author_name: "Emily Hollenbeck",
    text: "Jeff and his team were awesome and professional. They always arrived on time and we’re very professional. We had a big interior painting project done and did an excellent job. Would recommend and will use Paint Innovators again.",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocJLXqB8zpuoCuheI1B3QrsAO2v7s9zHQ2ygATpCJjW9oJmH8Q=s64-c-rp-mo-br100",
    rating: 5,
    relative_time_description: "8 years ago",
  },
  {
    author_name: "Brian Evans",
    text: "Jeff and his crew are very professional and skilled craftsmen. They painted the interior of my restaurant and stained my cherry wood bar at a reasonable cost. I definitely recommend Paint Innovators Inc services.",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocKYUJ1ZZE_9oQxs920aRkOeqw3dB7Py4vJ_83XY9_P_qFBvpA=s64-c-rp-mo-br100",
    rating: 5,
    relative_time_description: "8 years ago",
  },
  {
    author_name: "eduardo beltran",
    text: "It's an excellent company",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUOQW__3_dt0eOrRLgmB2Jk1ObfHue667QJpqYkV2fp9mLoVq_s9A=s64-c-rp-mo-br100",
    rating: 5,
    relative_time_description: "6 years ago",
  },
  {
    author_name: "Brian Novack",
    text: "Awesome",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVZuLJn64ZGIBXP7Uj8BnDo5S_JjZCOTqgQLyOcZEqM2FG003dS=s64-c-rp-mo-br100",
    rating: 5,
    relative_time_description: "5 years ago",
  },
  {
    author_name: "Brock Holland",
    text: "Remove Popcorn Ceilings: Done fast. Add Orange Peel Texture: Looks great. Paint Ceiling: Suburb. Clean-up After: Above and Beyond. Hired through Jeff at Paint Innovators. He provided excellent communication through the whole process. Came and did an in person walk through and made sure all initial imperfections were touched up and cleaned up. Sent in a cleaning crew after it was all over that not only cleaned the floors, but also the bathrooms and kitchen. And it was all done in less than 10 days from quote to completion. I&apos;m not saying to not get more that one quote, but definitely give these guys a shot. They know what they are doing and how to take care of the customer.",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWmKe2qBAI2apyslSoGJqDFeUMV7TELl76nc_wa6sdXDRug6X_K=s64-c-rp-mo-ba3-br100",
    rating: 5,
    relative_time_description: "4 years ago",
  },
  {
    author_name: "Henry Nunez",
    text: "Very good",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocKbZpX0Ug9hZt_2vF-Qk4VitvUjHRIULuhgiY8pbEZbnB_vtA=s64-c-rp-mo-br100",
    rating: 5,
    relative_time_description: "a year ago",
  },
  {
    author_name: "Lori Cline",
    text: "Carlos from Paint Innovators is a very skilled painter. Ask for him. He completed a painting job at our home in Springdale and did an excellent job. The work entailed correcting a botched job and his attention to detail made the positive results possible. He not only corrected the areas damaged by a previous worker around our crown molding, he painted the entire wall so that the damaged areas were unnoticeable. He will need to continue to work on his english speaking skills but his painting work is excellent!",
    profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIqFMYtvvSbB0KcIT28FmYVHsV-TfIySlnuxaUoAAqFSMWVgA=s64-c-rp-mo-br100",
    rating: 5,
    relative_time_description: "a year ago",
  },
  {
    author_name: "Sarah Nail",
    text: "",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVdukcGCaRoKqh7sVnbQ8OEaawIu__Czhl-FL6mLaUbOt3WyAs7=s64-c-rp-mo-br100",
    rating: 5,
    relative_time_description: "5 months ago",
  },
  // ... rest of your reviews
];

const GOOGLE_REVIEW_LINK = "https://g.page/r/CbF4CHrc1dblEBM/review";

function GoogleReviews() {
  const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col flex-row md:flex-row gap-2 px-4">
      <div className="md:w-1/5 w-full text-center">
        <Logo />
        <div className="flex justify-center my-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <a href={GOOGLE_REVIEW_LINK} target="_blank" className="btn-main mb-4 md:mb-0">
          Leave a Review
        </a>
      </div>

      <div className="md:w-4/5 w-full">
        <Swiper
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          autoplay={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {REVIEWS.map((review, index) => {
            const text = typeof review.text === "string"
              ? review.text
              : review.text?.text || "No review text available";
            const isLongText = text.length > 200;
            const isExpanded = expandedStates[index] || false;

            return (
              <SwiperSlide key={index} className="w-full">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={review.profile_photo_url || "/default-avatar.png"}
                      alt={`${review.author_name}'s profile`}
                      className="w-12 h-12 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h3 className="font-semibold">{review.author_name}</h3>
                      <p className="text-sm text-gray-600 m-0">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    {isExpanded ? text : `${text.slice(0, 200)}...`}
                    {isLongText && (
                      <button onClick={() => toggleExpand(index)} className="ml-2">
                        <strong>{isExpanded ? "Read Less" : "Read More"}</strong>
                      </button>
                    )}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default GoogleReviews;