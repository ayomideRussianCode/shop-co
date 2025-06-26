import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
function QtyButton() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex items-center border bg-[#f0f0f0] rounded-full px-4 py-2">
        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
          <FaMinus size={12} />
        </button>
        <span className="mx-4">{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)}>
          <FaPlus size={12} />
        </button>
      </div>
    </>
  );
}

export default QtyButton;
