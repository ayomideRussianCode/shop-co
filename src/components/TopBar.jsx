import { X } from "lucide-react";
import { useState } from "react";

const TopBar = () => {
  const [showTopBar, setShowTopBar] = useState(true);

  if (!showTopBar) return null;

  return (
    <div className="bg-black text-white text-center py-2 text-sm px-4 relative flex items-center justify-center">
      Sign up and get 20% off your first order.
      <a href="#" className="underline font-medium ml-1 ">
        {" "}
        Sign Up Now{" "}
      </a>
      <button
        className="absolute right-20 top-1/2 transform -translate-y-1/2 hidden sm:block"
        onClick={() => setShowTopBar(false)}
        aria-label="Close"
      >
        <X className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default TopBar;
