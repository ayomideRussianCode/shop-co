import { useState } from "react";
import {FaCheck} from "react-icons/fa";

function SelectColors({ colors }) {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
     <div className="grid grid-cols-5 gap-4 w-fit">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full shadow-sm border-transparent flex items-center justify-center `}
              style={{ background: color }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && (
                <FaCheck className="w-2 h-2 text-white" />
              )}
            </button>
          ))}
        </div>
      
    </>
  );
}

export default SelectColors;
