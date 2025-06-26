import { Link } from "react-router-dom";
import StarIcon from "../components/StarIcon";
export default function ProductCard({ product }) {
  return (
    <Link to={`/product-detail/${product.id}`}>
      <div className="min-w-[180px] snap-start shrink-0 ">
        <div className={`mb-2`}>
          <img
            src={product.image}
            alt={product.name}
            className=" w-56 h-56 lg:w-80 lg:h-80 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h3 className="font-medium text-sm mb-1">{product.name}</h3>
        <div className=" w-24 flex items-center mb-1">
          <StarIcon rating={product.rating} />
          {/* <span className="text-xs text-gray-500 ml-1">
            {product.ratingCount}
          </span> */}
        </div>

      <div className="w-24">
          <div className="flex gap-x-2 items-center">
          <span className="font-bold text-sm ">${product.price} </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.discount > 0 && (
            <div className="bg-red-100 text-red-400 text-xs font-bold px-2 py-1 rounded-xl">
              -{product.discount}%
            </div>
          )}
        </div>
      </div>
      </div>
    </Link>
  );
}
