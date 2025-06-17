import DressStyleCard from "../components/DressStyleCard";

export default function DressStyleSection({ products, onBackToFilters }) {
  return (
    <div className="p-4 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-center sm:text-left">
          Casual
        </h2>
        <img
          src="/filter.svg"
          alt="Filter"
          className="w-6 h-6 sm:hidden cursor-pointer"
          onClick={onBackToFilters}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4  overflow-hidden">
        {products.slice(0, 6).map((product) => (
          <DressStyleCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-4">
      </div>
    </div>
  );
}
