"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  text: { text: string; languageCode: string };
  profile_photo_url?: string;
}

interface RawGoogleReview {
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
  rating: number;
  relativePublishTimeDescription: string;
  text: { text: string; languageCode: string };
}

interface GoogleReviewsProps {
  placeId: string;
  apiKey: string;
  maxReviews?: number;
}

function GoogleReviews({ placeId, apiKey, maxReviews }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log("Fetching Google Reviews...");
        const response = await fetch(
          `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&key=${apiKey}`,
          {
            headers: {
              "Content-Type": "application/json",
              "X-Goog-Api-Key": apiKey,
              "X-Goog-FieldMask": "reviews",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", JSON.stringify(data, null, 2));

        if (data.reviews) {
          const formattedReviews = (
            maxReviews ? data.reviews.slice(0, maxReviews) : data.reviews
          ).map((review: RawGoogleReview) => ({
            author_name: review.authorAttribution?.displayName || "Anonymous",
            rating: review.rating,
            relative_time_description: review.relativePublishTimeDescription,
            text: review.text,
            profile_photo_url:
              review.authorAttribution?.photoUri || "/default-avatar.png",
          }));

          setReviews(formattedReviews);
        } else {
          throw new Error("No reviews found.");
        }
      } catch (err) {
        setError("Failed to load reviews. Please try again later.");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, apiKey, maxReviews]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="flex flex-col flex-row md:flex-row gap-2 px-4">
      <div className="md:w-1/5 w-full text-center">
        <Logo />
        <div className="flex justify-center my-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Star
              key={`full-${i}`}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <a
          href="https://www.google.com/search?q=PAINT+innovators+arkansas&oq=paint+inno&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgYIAhBFGDkyBggDEEUYQDIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyOTg2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x87c96e1a825d032b:0xbe511a9dff1f526b,3,,,,"
          target="_blank"
          className="btn-main mb-4 md:mb-0"
        >
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
          {reviews.map((review, index) => {
            const text = review.text?.text || "No review text available";
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
                      <p className="text-sm text-gray-600">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600">
                    {isExpanded ? text : `${text.slice(0, 200)}...`}
                    {isLongText && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="ml-2"
                      >
                        <strong>
                          {isExpanded ? "Read Less" : "Read More"}
                        </strong>
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
