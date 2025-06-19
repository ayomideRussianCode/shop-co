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
            <div className="p-2 border mb-8 mt-4 lg:w-3/5 lg:ml-[70px] lg:pb-[20px] border-gray-100 w-full h-90 focus:outline-2 bg-white shadow-sm rounded-lg">
              <div className="flex justify-between">
                <h1 className="text-black">Filters</h1>
                <button>
                  {" "}
                  <img
                    className="hidden sm:block"
                    src="/filter.svg"
                    alt="filter"
                  />
                </button>{" "}
                <button
                  onClick={() => setShowDressStyle(true)}
                  className="sm:hidden"
                >
                  <img src="/close-icon.svg" alt="close" className="w-6 h-6" />
                </button>
              </div>

              <hr className="my-4" />
              <CategoryList categories={categories} />
              <hr className="my-4" />
              <PriceSlider />

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-black my-4 mb-2">Colors</h4>
                  <button>
                    <FiChevronUp />
                  </button>
                </div>
                <SelectColors colors={colors} />
              </div>

              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <h4 className="font-medium text-black my-4">Size</h4>
                <button>
                  <FiChevronUp />
                </button>
              </div>
              <SelectSize sizes={sizes} />

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

        <div className="hidden sm:block sm:w-4/5 lg:mr-[50px]">
          <DressStyleSection products={Casual} />
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
