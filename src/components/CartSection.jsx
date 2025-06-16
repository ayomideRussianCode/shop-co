import CartCards from "./CartCards";
import CartSummary from "./CartSummary";

function CartSection({ products }) {
  const orderDetails = [{ subtotal: 565, discount: 113, delivery: 15, total: 467 }];

  return (
    <>
      <div className="w-full">
        <h2 className="flex font-IntegralBold text-3xl mx-6 mb-4">YOUR CART</h2>
        <div className="flex flex-col lg:flex-row mx-6">
          <div className="w-full lg:w-3/5">
            <div className="border rounded-lg shadow-md p-4 lg:ml-36">
              {products.map((product) => (
                <CartCards key={product.id} product={product} />
              ))}
            </div>
          </div>
          <CartSummary orderDetails={orderDetails} />
        </div>
      </div>
    </>
  );
}

export default CartSection;
