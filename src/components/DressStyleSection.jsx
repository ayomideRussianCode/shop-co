import DressStyleCard from "../components/DressStyleCard";

export default function DressStyleSection({ products }) {
  return (
    <div className="mb-16">
      <div className="flex justify-between">
        <h2 className=" font-medium text-xl mx-12">Casual</h2>
        <p className="text-xs text-gray-500 ">
          Showing 1-10 of 100 Products Sort by{" "}
        </p>
      </div>
      <div className="flex space-x-4 overflow-x-auto justify-center items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 mx-12">
        {products.map((product) => (
          <DressStyleCard key={product.id} product={product} />
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
