import { MoreHorizontal } from "lucide-react";
import { reviews } from "../data/Reviews";
import StarIcon from "./StarIcon";
import { FaCheckCircle } from "react-icons/fa";
export default function RatingReviewSection({rating = 5}) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-4 bg-white"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex space-x-1">
                {Array(5)
                  .fill(0)
                  .map((i) => (
                    <StarIcon key={i} filled={i < rating} />
                  ))}
              </div>{" "}
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center mb-3">
              <span className="font-semibold text-gray-900">{review.name}</span>
              {review.verified && (
                <div className="flex">
                  <FaCheckCircle
                    className=" ml-1 mt-1  text-green-600"
                    title="Verified buyer"
                  />
                </div>
              )}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              "{review.review}"
            </p>

            <p className="text-gray-500 text-sm">{review.date}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
