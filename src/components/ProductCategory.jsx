import React from "react";
import { FaFilter } from "react-icons/fa";

function ProductCategory() {
  return (
    <>
      <div className="flex">
        <div className="px-2 py-4 border-b border-gray-100 w-1/4 mx-14 bg-red-900">
        <div className="flex justify-between">
            <h1>Filters</h1>
            <FaFilter/>
        </div>
        <div>
            <hr className="my-4" />
        </div>
        <div>
            
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductCategory;
