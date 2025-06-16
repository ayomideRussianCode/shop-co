import Button from "../components/Button";

function CartSummary({ orderDetails }) {
  return (
    <>
      <div className="w-full lg:w-2/5">
        <div className="flex mt-6 border flex-row justify-between rounded-md shadow-md mx-2 mb-10 lg:mx-6">
          <div className="p-4">
            <h2 className="text-lg text-black font-semibold pb-4 ">
              Order Summary
            </h2>
            {orderDetails.map((orderDetail, index) => (
              <div className="flex justify-between" key={index}>
                <div className="flex-col text-gray-600">
                  <p className="pb-3">SubTotal: </p>
                  <p className="pb-3">Discount(-20%): </p>
                  <p className="pb-3">Delivery: </p>
                  <p className="pb-3">Total</p>
                </div>
                <div className="flex flex-col pl-44 lg:pl-72 font-bold">
                  <p className="pb-3">${orderDetail.subtotal}</p>
                  <p className="text-red-500 pb-3">-${orderDetail.discount}</p>
                  <p className="pb-3">${orderDetail.delivery}</p>
                  <p className="pb-3">${orderDetail.total}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-2">
              {/* <img src="/promo-code-tag.svg" alt="tag" className="w-4 h-4text-gray-500 mr-2"/> */}
              <input
                className="bg-[#f0f0f0] rounded-full px-8 py-2 text-xs text-gray-600"
                type="number"
                placeholder="Add promo code"
              />
              <button className="bg-black rounded-full px-6 py-2 text-white">
                Apply
              </button>
            </div>
            <div className="flex justify-center py-4">
              <Button
                className="text-white w-full"
                text="Go to Checkout"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSummary;
