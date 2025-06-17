import { Slider } from "@mui/material";
import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function PriceSlider() {
  const [value, setValue] = useState([50, 200]);
  const [isOpen, setIsOpen] = useState(true);

  return (
   <div className="my-4 w-full">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-black font-medium">Price</h2>
        <FiChevronUp
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      {isOpen && (
        <>
          <Slider
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={500}
            sx={{
              color: "black",
            }}
          />
          <div className="flex justify-between text-sm mt-2">
            <span>${value[0]}</span>
            <span>${value[1]}</span>
          </div>
        </>
      )}
      <hr className="my-4" />
    </div>
  );
}
