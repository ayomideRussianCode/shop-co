import { Link } from "react-router-dom";
import StarIcon from "../components/StarIcon";
export default function DressStyleCard({ product }) {
  return (
    <Link to={`/product-category/${product.id}`}>
        <div
          className={`relative  lg:w-72 lg:h-80  rounded-2xl overflow-hidden`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="font-medium text-sm mb-1">{product.name}</h3>
        <div className="flex items-center mb-1">
        <StarIcon rating={product.rating}/>
          <span className="text-xs text-gray-500 ml-1">
            {product.ratingCount}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-sm mr-2">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.discount > 0 && (
            <div className="bottom-2 right-2 bg-red-100 text-red-400 text-xs font-bold px-2 py-1 ml-2 rounded-xl">
              -{product.discount}%
            </div>
          )}
        </div>
    </Link>
  );
}
