import { FiChevronRight } from "react-icons/fi";


export default function CategoryList({categories}) {
  return (
    <div className="space-y-3">
      {categories.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between text-sm text-gray-600 cursor-pointer hover:text-black"
        >
          <span>{item}</span>
          <FiChevronRight />
        </div>
      ))}
    </div>
  );
}
