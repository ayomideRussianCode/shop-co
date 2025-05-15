
export default function ProductCollection() {
  return (
    <div className="max-w-6xl mt-10 mx-auto px-4">
      <ProductSection 
        title="NEW ARRIVALS" 
        products={newArrivalsData} 
      />
      <br />
      
      <ProductSection 
        title="TOP SELLING" 
        products={topSellingData} 
      />
    </div>
  );
}

function ProductSection({ title, products }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="text-center mt-6">
        <button className="px-6 py-2 w-52 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group">
      <div className={`relative bg-gray-100 mb-3 aspect-[3/4] overflow-hidden`}>
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
              halfFilled={i === Math.floor(product.rating) && product.rating % 1 >= 0.5}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500 ml-1">{product.ratingCount}</span>
      </div>
      
      <div className="flex items-center">
        <span className="font-bold text-sm mr-2">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
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

function StarIcon({ filled, halfFilled }) {
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

const newArrivalsData = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    ratingCount: "4.5/5",
    image: "/newarrival1.svg",
    isSelected: true
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    ratingCount: "3.5/5",
    image: "/newarrival2.svg",
    isSelected: false
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    ratingCount: "4.5/5",
    image: "/newarrival3.svg",
    isSelected: false
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    ratingCount: "4.5/5",
    image: "/newarrival4.svg",
    isSelected: false
  }
];

const topSellingData = [
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 4.5,
    ratingCount: "4.5/5",
    image: "/topselling1.svg",
    isSelected: false
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 145,
    originalPrice: null,
    discount: 0,
    rating: 4.0,
    ratingCount: "4.0/5",
    image: "/topselling2.svg",
    isSelected: false
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    discount: 0,
    rating: 3.0,
    ratingCount: "3.0/5",
    image: "/topselling3.svg",
    isSelected: false
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    ratingCount: "4.5/5",
    image: "/topselling4.svg",
    isSelected: false
  }
];