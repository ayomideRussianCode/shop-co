import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaMinus, FaPlus, FaCheck } from "react-icons/fa";

function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const colors = ["olive", "teal", "navy"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className=" mx-auto p-4 grid grid-cols-1 ">
       <div className=" flex-col items-center justify-center lg:flex-row gap-4 ">
          <div className="">
            <img src="/sample4.svg" alt="main" />
          </div>

      <div className=" w-full flex flex-row lg:flex-col justify-around gap-4 my-4">
        <img
          src="/sample3.svg"
          alt="thumb"
          className="w-40  rounded-lg object-cover "
        />
        <img
          src="/sample3.svg"
          alt="thumb"
          className="w-40 rounded-lg object-cover "
        />
        <img
          src="/sample3.svg"
          alt="thumb"
          className="w-40 rounded-lg object-cover "
        />
        </div>

         
        <div >
          <h1 className="text-2xl flex flex-col md:text-4xl font-bold mb-2">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="flex items-center gap-1 text-yellow-500">
            {[1, 2, 3, 4].map((_, i) => (
              <AiFillStar key={i} />
            ))}
            <AiOutlineStar />
            <span className="ml-2 text-black text-sm">4.5/5</span>
          </div>
        </div>

        <div className="flex items-center gap-4 my-4">
          <span className="text-2xl font-bold">$260</span>
          <span className="line-through text-gray-400">$300</span>
          <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-sm">
            -40%
          </span>
        </div>

        <p className="text-gray-600 mb-4">
          {" "}
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <hr />

        <div className="mb-4">
          <h4 className="font-medium text-gray-400 mb-2">Select Colors</h4>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center `}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && (
                  <FaCheck className="w-2 h-2 text-white" />
                )}
              </button>
            ))}
          </div>
        </div>
        <hr />

        <div className="mb-4">
          <h4 className="font-medium text-gray-400 mb-2">Choose Size</h4>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full border text-sm font-medium text-gray-300 ${
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
        <hr />

        <div className="flex sm:flex-row gap-4 items-center mt-6">
          <div className="flex items-center border rounded-full px-4 py-2">
            <button
              onClick={() =>
                setQuantity((q) => Math.max(1, q - 1))
              }
            >
              <FaMinus size={12} />
            </button>
            <span className="mx-4">{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>
              <FaPlus size={12} />
            </button>
          </div>
          <button className="bg-black text-white px-8 py-3 rounded-full lg:w-96 w-full sm:w-24 ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
