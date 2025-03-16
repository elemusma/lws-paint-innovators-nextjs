"use client";
import { Star, StarHalf } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: { text: string; languageCode: string };
  profile_photo_url?: string; // ✅ This now comes from `review.authorAttribution.photoUri`
}

interface GoogleReviewsProps {
  placeId: string;
  apiKey: string;
  maxReviews?: number;
}

function GoogleReviews({ placeId, apiKey, maxReviews }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<any>(null);

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
          // Show all reviews unless `maxReviews` is set
          const formattedReviews = maxReviews
            ? data.reviews.slice(0, maxReviews).map((review: any) => ({
                author_name:
                  review.authorAttribution?.displayName || "Anonymous",
                rating: review.rating,
                relative_time_description:
                  review.relativePublishTimeDescription,
                text: review.text,
                profile_photo_url:
                  review.authorAttribution?.photoUri || "/default-avatar.png",
              }))
            : data.reviews.map((review: any) => ({
                author_name:
                  review.authorAttribution?.displayName || "Anonymous",
                rating: review.rating,
                relative_time_description:
                  review.relativePublishTimeDescription,
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

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

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
    <div className="w-full">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={false}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full overflow-hidden"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.profile_photo_url || "/default-avatar.png"} // ✅ Correct field
                  alt={`${review.author_name}'s profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{review.author_name}</h3>
                  <p className="text-sm text-gray-600">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">{renderStars(review.rating)}</div>
              <p className="text-sm text-gray-600">
                {review.text?.text || "No review text available"}{" "}
                {/* ✅ Fixed text reference */}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GoogleReviews;
