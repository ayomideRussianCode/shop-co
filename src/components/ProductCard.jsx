import StarIcon from "../components/StarIcon";
export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className={`relative bg-gray-100 rounded-2xl mb-3 aspect-[3/4] overflow-hidden`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="font-medium text-sm mb-1">{product.name}</h3>

      <div className="flex items-center mb-1">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              filled={i < Math.floor(product.rating)}
              halfFilled={
                i === Math.floor(product.rating) && product.rating % 1 >= 0.5
              }
            />
          ))}
        </div>
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
    </div>
  );
}
