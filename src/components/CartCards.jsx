import QtyButton from "./QtyButton";

export default function CartCards({ product }) {
  return (
    <div className="flex gap-4 items-start mb-4 border-b pb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-md"
      />

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h2 className="text-base font-semibold">{product.name}</h2>
          <button>
            <img src="/delete-icon.svg" alt="delete" className="w-4 h-4" />
          </button>
        </div>

        <div className="text-sm text-gray-600 mt-1">
          <p>
            Size: <span className="font-medium">{product.size}</span>
          </p>
          <p>
            Color: <span className="font-medium">{product.color}</span>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="mt-2 text-black font-semibold">${product.price}</p>
          <QtyButton />
        </div>
      </div>
    </div>
  );
}
