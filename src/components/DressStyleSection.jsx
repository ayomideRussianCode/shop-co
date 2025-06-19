import DressStyleCard from "../components/DressStyleCard";
import { GoArrowLeft , GoArrowRight} from "react-icons/go";
// import { FiChevronDown } from "react-icons/fi";

export default function DressStyleSection({ products, onBackToFilters }) {
  return (
    <div className="p-4 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-center sm:text-left">
          Casual
        </h2>
        <p className="text-sm text-gray-400 flex gap-x-2 ">
          Showing 1-10 of 100 Products
          <span className="hidden sm:block space-x-2"> Sort by: </span>
          <span className="text-black font-semibold text-sm hidden sm:block">
            Most Popular
          </span>
        </p>

        <img
          src="/filter.svg"
          alt="Filter"
          className="w-8 h-8 block lg:hidden bg-gray-100 rounded-full p-2 mb-2 cursor-pointer"
          onClick={onBackToFilters}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4  lg:gap-14 overflow-hidden">
        {products.slice(0, 9).map((product) => (
          <DressStyleCard key={product.id} product={product} />
        ))}
      </div>
      <hr className="my-4" />
      <div className="w-full">
        <div className=" flex justify-between ">
          <button className="rounded-md flex gap-2 border-gray-200 border px-6 ">
            {" "}
            <GoArrowLeft size={15} className="flex " />
            Prev
          </button>
          <p className="text-gray-400 text-lg ">1 2 3 ... 8 9 10</p>
          <button className="rounded-md flex gap-2 border-gray-200 border px-6 ">
            {" "}
          
            Next   <GoArrowRight size={15} className="flex  " />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
