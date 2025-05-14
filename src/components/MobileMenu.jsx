const MobileMenu = ({ onClose }) => {
  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex flex-col space-y-4 md:hidden">
      <a href="#" onClick={onClose} className="text-gray-700 font-medium">Shop</a>
      <a href="#" onClick={onClose} className="text-gray-700 font-medium">On Sale</a>
      <a href="#" onClick={onClose} className="text-gray-700 font-medium">New Arrivals</a>
      <a href="#" onClick={onClose} className="text-gray-700 font-medium">Brands</a>
    </div>
  );
};

export default MobileMenu;

















// import { motion } from "framer-motion";


// const MobileMenu = ({ isOpen, onClose }) => {
//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={{ x: isOpen ? "0%" : "100%" }}
//       transition={{ duration: 0.3 }}
//       className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6"
//     >
//       <button className="text-2xl mb-6" onClick={onClose}>✖</button>
//       <nav className="flex flex-col space-y-4">
//         <a href="#" className="text-lg text-gray-800 hover:text-black">Shop</a>
//         <a href="#" className="text-lg text-gray-800 hover:text-black">On Sale</a>
//         <a href="#" className="text-lg text-gray-800 hover:text-black">New Arrivals</a>
//         <a href="#" className="text-lg text-gray-800 hover:text-black">Brands</a>
//       </nav>
//     </motion.div>
//   );
// };

// export default MobileMenu;
