import { useState } from "react";
import CategoryList from "../components/CategoryList";
import { FiChevronUp } from "react-icons/fi";
import SelectColors from "../components/SelectColors";
import SelectSize from "../components/SelectSize";
import Button from "../components/Button";
import DressStyleSection from "../components/DressStyleSection";
import { Casual } from "../data/Style";

function ProductCategory() {
  const [showFilters, setShowFilters] = useState(false); // For mobile toggle

  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const styles = ["Casual", "Formal", "Party", "Gym"];
  const colors = [
    "#00FF00", "#FF0000", "#ffff00", "#ffa500", "#ADD8E6",
    "#0000ff", "#800080", "#FF1493", "#ffffff", "#000000",
  ];
  const sizes = [
    "XX-Small", "X-Small", "Small", "Medium", "Large",
    "X-Large", "XX-Large", "3X-Large", "4X-Large",
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Filter Toggle Button for Mobile */}
      <div className="lg:hidden flex justify-end items-center p-4">
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Sidebar - Show on desktop, toggle on mobile */}
      <div
        className={`
          ${showFilters ? "block" : "hidden"} 
          lg:block w-full lg:w-64 bg-white shadow-md p-4 rounded-md
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-black">Filters</h1>
          <img src="/filter.svg" alt="filter" className="w-5 h-5" />
        </div>

        <CategoryList categories={categories} />

        {/* Colors */}
        <hr className="my-4" />
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-black">Colors</h4>
            <FiChevronUp />
          </div>
          <SelectColors colors={colors} />
        </div>

        {/* Sizes */}
        <hr className="my-4" />
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-black">Size</h4>
            <FiChevronUp />
          </div>
          <SelectSize sizes={sizes} />
        </div>

        {/* Dress Style */}
        <hr className="my-4" />
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-black">Dress Style</h4>
            <FiChevronUp />
          </div>
          <CategoryList categories={styles} />
        </div>

        <Button
          className="w-full mt-4"
          text="Apply Filter"
        />
      </div>

      {/* Products Section */}
      <div className="w-full lg:ml-4 p-4">
        <DressStyleSection products={Casual} />
      </div>
    </div>
  );
}

export default ProductCategory;
