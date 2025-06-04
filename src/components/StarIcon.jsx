import {FaStar, FaRegStar, FaStarHalfAlt} from "react-icons/fa";

export default function StarIcon({filled, halfFilled, size = 12 }) {
  const className = 'text-yellow-400';

  if (filled) return <FaStar className={className} size={size}/>;
  if (halfFilled) return <FaStarHalfAlt className={className} size={size}/>;
  return <FaRegStar className="text-gray-300" size={size}/>;
}

