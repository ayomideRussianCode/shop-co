import ProductCard from '../components/ProductCard';

export default function ProductSection({ title, products }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      
      <div className="flex space-x-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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