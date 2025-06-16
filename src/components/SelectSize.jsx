import { useState } from "react";
function SelectSize({ sizes }) {
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <>
      <div className="mb-4">
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full border text-sm font-medium text-gray-400 ${
                selectedSize === size
                  ? "bg-black text-white "
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectSize;
