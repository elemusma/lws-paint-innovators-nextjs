"use client";
import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url?: string;
}

interface GoogleBusinessReviewsProps {
  accountId: string;
  locationId: string;
  accessToken: string;
}

function GoogleBusinessReviews({
  accountId,
  locationId,
  accessToken,
}: GoogleBusinessReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log("Fetching Google Business Reviews...");

        const response = await fetch(
          `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", JSON.stringify(data, null, 2));

        if (data.reviews) {
          const formattedReviews = data.reviews.map((review: any) => ({
            author_name: review.reviewer.displayName || "Anonymous",
            rating: review.starRating,
            relative_time_description: new Date(
              review.createTime
            ).toLocaleDateString(),
            text: review.comment || "No review text available",
            profile_photo_url:
              review.reviewer.profilePhotoUrl || "/default-avatar.png",
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
  }, [accountId, locationId, accessToken]);

  if (loading) {
    return <div className="text-center p-4">Loading reviews...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">
        Google Business Reviews
      </h2>
      {reviews.map((review, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={review.profile_photo_url || "/default-avatar.png"}
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
          <p className="text-sm text-gray-600">{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default GoogleBusinessReviews;
