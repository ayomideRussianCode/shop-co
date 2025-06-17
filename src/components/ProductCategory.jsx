import { useState } from "react";
import CategoryList from "../components/CategoryList";
import { FiChevronUp } from "react-icons/fi";
import SelectColors from "../components/SelectColors";
import SelectSize from "../components/SelectSize";
import Button from "../components/Button";
import DressStyleSection from "../components/DressStyleSection";
import PriceSlider from "./PriceSlider";
import { Casual } from "../data/Style";

function ProductCategory() {
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const styles = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const [showDressStyle, setShowDressStyle] = useState(false);

  const colors = [
    "#00FF00",
    "#FF0000",
    "#ffff00",
    "#ffa500",
    "#ADD8E6",
    "#0000ff",
    "#800080",
    "#FF1493",
    "#ffffff",
    "#000000",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 px-4 mt-6">
  {/* Filters */}
  <div className="sm:w-2/5">
    {showDressStyle && (
      <div className="block sm:hidden">
        <DressStyleSection
          products={Casual}
          onBackToFilters={() => setShowDressStyle(false)}
        />
      </div>
    )}

    {!showDressStyle && (
      <div className="p-2 border-b border-t mb-8 mt-4 border-gray-100 w-full h-full bg-white shadow-md rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-black">Filters</h1>
          <button
            onClick={() => setShowDressStyle(true)}
            className="sm:hidden"
          >
            <img src="/close-icon.svg" alt="close" className="w-6 h-6" />
          </button>
        </div>

        {/* Price */}
        <hr className="my-4" />
        <CategoryList categories={categories} />
        <hr className="my-4" />
        <PriceSlider />

        {/* Colors */}
        <div className="mb-4">
          <div className="flex justify-between">
            <h4 className="font-medium text-black my-4 mb-2">Colors</h4>
            <button>
              <FiChevronUp />
            </button>
          </div>
          <SelectColors colors={colors} />
        </div>

        {/* Size */}
        <hr className="my-2" />
        <div className="flex justify-between mb-2">
          <h4 className="font-medium text-black my-4">Size</h4>
          <button>
            <FiChevronUp />
          </button>
        </div>
        <SelectSize sizes={sizes} />

        {/* Dress style */}
        <hr className="my-4" />
        <div className="flex justify-between mb-2">
          <h1 className="text-black font-medium">Dress style</h1>
          <button>
            <FiChevronUp />
          </button>
        </div>
        <CategoryList categories={styles} />

        <Button
          className="flex justify-center w-48 h-10 items-center my-2 mx-auto"
          text="Apply Filter"
        />
      </div>
    )}
  </div>

  {/* Product Display */}
  <div className="hidden sm:block sm:w-3/5">
    <DressStyleSection products={Casual} />
  </div>
</div>


    </>
  );
}

export default ProductCategory;
