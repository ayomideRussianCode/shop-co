// import { useState } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const StarRating = ({ totalStars = 5 }) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null);

//   const handleClick = (index) => {
//     setRating(index);
//   };

//   const handleMouseEnter = (index) => {
//     setHover(index);
//   };

//   const handleMouseLeave = () => {
//     setHover(null);
//   };

//   const displayRating = hover || rating;
//   return (
//     <div className="flex items-center space-x-1">
//       {[...Array(totalStars)].map((_, index) => {
//         const starValue = index + 1;

//         return (
//           <span
//             key={index}
//             className="cursor-pointer text-yellow-500"
//             onClick={handleClick(starValue)}
//             onMouseEnter={() => handleMouseEnter(starValue)}
//             onMouseLeave={handleMouseLeave}
//           >
//             {displayRating >= starValue ? (
//               <FaStar />
//             ) : displayRating >= starValue - 0.5 ? (
//               <FaStarHalfAlt />
//             ) : (
//               <FaRegStar />
//             )}
//           </span>
//         );
//       })}
//     </div>
//   );
// };
// export default StarRating;


export default function StarIcon({ filled, halfFilled }) {
  return (
    <svg className="w-4 h-4" fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
      {halfFilled ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#half-star)" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      )}
      <defs>
        <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}


