import { useState } from "react";
import { FiShoppingCart, FiSearch, FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    console.log("Search for:", searchTerm);
  };

  return (
    <header className="w-full bg-white shadow-sm z-40 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden"
            onClick={() => {
              setIsMobileSearchOpen(false);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <FiMenu size={22} />
          </button>
          <img src="/shopco.svg" alt="logo"/>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            {isMobileSearchOpen ? (
              <div className="relative flex items-center space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    autoFocus
                    className="w-40 rounded-full pl-8 pr-4 py-1.5 text-sm bg-gray-100 text-gray-700 focus:outline-none transition duration-300 ease-in-out"
                  />
                  <FiSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileSearchOpen(true);
                }}
              >
                <FiSearch size={20} />
              </button>
            )}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          ></button>
          <div className="relative w-full max-w-xl hidden md:block">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-96 border rounded-full pl-10 pr-4 py-2 text-sm bg-gray-100 text-gray-700 focus:outline-none"
            />
            <FiSearch className="absolute top-0.5 left-4 translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <FiShoppingCart size={20} />
          <FaRegUserCircle size={20} />
        </div>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
