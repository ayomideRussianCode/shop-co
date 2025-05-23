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

















