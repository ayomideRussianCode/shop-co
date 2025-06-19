import { useState } from "react";
import StarIcon from "../components/StarIcon";
import SelectSize from "../components/SelectSize";
import SelectColors from "../components/SelectColors";
import QtyButton from "./QtyButton";
import Button from "../components/Button";

function ProductDetail() {
  const colors = ["#4F4631", "#314F4A", "#31344F"];
  const [mainImage, setMainImage] = useState("/main.png");
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col-reverse lg:flex-row gap-4 overflow-x-auto">
          <div className="flex flex-row lg:flex-col overflow-auto px-14 py-4 gap-4 lg:overflow-visible">
            {["/thumb1.png", "/thumb2.png", "/thumb3.png"].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setMainImage(img)}
                className={`w-36 h-36 flex-shrink-0 rounded-lg object-cover cursor-pointer border-2 ${
                  mainImage === img ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>

          <div className="flex-1 flex mt-4 lg:mr-6 justify-center">
            <img
              className="rounded-lg w-[300px] h-[345px] flex-shrink-0   "
              src={mainImage}
              alt="main-img"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white">
        <div className="px-4">
          <h1 className="lg:text-2xl font-IntegralBold mb-2 ">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
          <div className="flex items-center gap-1 text-yellow-500">
            {/* {Array(5)
              .fill(0)
              .map((i) => (
                <StarIcon key={i} filled={i < rating} />
              ))} */}
               <StarIcon rating={4.5}/>
            <span className="ml-2 text-black text-sm">4.5/5</span>
          </div>
          <div className="flex items-center gap-4 my-2">
            <span className="text-2xl font-bold">$260</span>
            <span className="line-through text-gray-400">$300</span>
            <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-sm">
              -40%
            </span>
          </div>
          <p className=" text-gray-600 lg:text-xl text-sm mb-4">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div className="mb-4">
            <h4 className="font-medium text-gray-400 my-4 mb-2">
              Select Colors
            </h4>
            <SelectColors colors={colors} />
          </div>
          <hr />
          <h4 className="font-medium text-gray-400 my-4 mb-2">Choose Size</h4>  
          <SelectSize sizes={sizes} />
          <hr />
          <div className="flex sm:flex-row gap-4 items-center mt-6">
           <QtyButton/>
          <Button text="Add to Cart"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
