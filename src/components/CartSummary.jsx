import { GoArrowRight } from "react-icons/go";

function CartSummary({ orderDetails }) {
  return (
    <div className="w-full lg:w-2/5 px-4">
      <div className="bg-white border rounded-xl shadow-md p-6 mt-6">
        <h2 className="text-lg text-black font-semibold mb-4">Order Summary</h2>

        {orderDetails.map((detail, index) => (
          <div key={index} className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-bold text-black text-md">${detail.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-20%):</span>
              <span className="font-bold text-red-500 text-md">-${detail.discount}</span>
            </div>
            <div className="flex justify-between ">
              <span>Delivery:</span>
              <span className="font-bold text-black text-md">${detail.delivery}</span>
            </div>
            <div className="flex justify-between border-t pt-3 font-bold">
              <span>Total:</span>
              <span className="font-bold text-black text-md">${detail.total}</span>
            </div>
          </div>
        ))}

        <div className="relative mt-6 gap-2 flex items-center">
          <img
            src="/promo-code-tag.svg"
            alt="tag"
            className="w-4 h-4 absolute left-3 text-gray-500"
          />
          <input
            className="bg-[#f0f0f0] text-xs text-gray-600 rounded-full pl-10 pr-24 py-2 w-full"
            type="text"
            placeholder="Add promo code"
          />
          <button className=" bg-black text-white px-4 py-1.5 text-xs rounded-full">
            Apply
          </button>
        </div>

        <div className="  flex justify-center mt-6">
          <button className=" flex  w-full justify-center text-md text-white bg-black py-2 px-4 rounded-full">
           Go to Checkout  <GoArrowRight className="  w-5 h-6 " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
