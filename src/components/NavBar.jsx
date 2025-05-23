import { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm z-40  ">
     <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
     <img src="/shopco.svg" alt="logo"/>
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#">Shop</a>
        <a href="#">On Sale</a>
        <a href="#">New Arrivals</a>
        <a href="#">Brands</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FiMenu size={22} />
        </button>
        <div className="relative w-full max-w-xl hidden md:block">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-96 border rounded-full pl-10 pr-4 py-2 text-sm bg-gray-100 text-gray-700 focus:outline-none"
          />
          <FiSearch className="absolute top-0.5 left-4 translate-y-1/2 text-gray-400 text-lg" />
        </div>
        <FiShoppingCart size={20} />
        <FiUser size={20} />
      </div>
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
     </div>
    </header>
  );
};

export default Navbar;


























// import { useState } from "react";
// import MobileMenu from "./MobileMenu";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="w-full bg-white shadow-sm z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
//           <div className="text-2xl font-bold">SHOP.CO</div>
//           <nav className="hidden md:flex space-x-6">
//             <a href="#" className="text-gray-700 hover:text-black">Shop</a>
//             <a href="#" className="text-gray-700 hover:text-black">On Sale</a>
//             <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
//             <a href="#" className="text-gray-700 hover:text-black">Brands</a>
//           </nav>

//           <div className="hidden md:flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="bg-gray-100 px-4 py-2 rounded-full outline-none w-64"
//             />
//             <button className="text-xl">🛒</button>
//             <button className="text-xl">👤</button>
//           </div>

//           <div className="md:hidden flex items-center space-x-4">
//             <button onClick={() => setMenuOpen(true)} className="text-2xl">☰</button>
//             <button className="text-xl">🔍</button>
//             <button className="text-xl">🛒</button>
//             <button className="text-xl">👤</button>
//           </div>
//         </div>
//       </header>

//       <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
//     </>
//   );
// };

// export default Navbar;

// //lu LuShoppingCart
// //pi PiUserCircleBold
