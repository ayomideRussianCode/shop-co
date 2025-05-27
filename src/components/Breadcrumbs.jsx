import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
function Breadcrumbs({ items = [] }) {
  return (
    <nav className="text-sm max-w-7xl flex mx-auto text-gray-600 p-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <HiChevronRight className="mx-1 text-gray-400" />}
            {item.href ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <span className="text-gray-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
