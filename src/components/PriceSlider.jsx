import { useState } from "react";

const MIN = 0;
const MAX = 500;

export default function PriceSlider() {
  const [values, setValues] = useState([50, 200]);

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Price</p>
        <span className="cursor-pointer text-lg">⌃</span>
      </div>
      <div>
        <Range
          values={values}
          step={1}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-1 bg-gray-200 rounded-md"
              style={{ ...props.style, background: "transparent" }}
            >
              <div
                className="h-1 bg-black rounded-md"
                style={{
                  position: "absolute",
                  left: `${(values[0] / MAX) * 100}%`,
                  width: `${((values[1] - values[0]) / MAX) * 100}%`,
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-4 h-4 bg-black rounded-full"
              style={{ ...props.style }}
            >
              <div className="flex justify-between text-sm text-gray-700 mt-2">
                <span>${values[0]}</span>
                <span>${values[1]}</span>
              </div>
            </div>
          )}
        />
      </div>
    </>
  );
}
