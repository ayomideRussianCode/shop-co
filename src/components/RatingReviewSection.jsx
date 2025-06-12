import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { reviews } from "../data/Reviews";
import Reviews from "../components/Reviews";
import ProductDetails from "../components/ProductDetail";  
import FAQs from "../components/FAQs";  

function RatingReviewSection() {
  const [selectedTab, setSelectedTab] = useState("rating");
  const [sortBy, setSortBy] = useState("latest");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const renderContent = () => {
    if (selectedTab === "product") return <ProductDetails />;
    if (selectedTab === "faqs") return <FAQs />;
    if (selectedTab === "rating") {
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-medium text-gray-900">All Reviews</h2>
              <span className="text-sm text-gray-500">({reviews.length})</span>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-50">
                <FaFilter className="w-4 h-4 text-black" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span>{sortBy === "latest" ? "Latest" : "Oldest"}</span>
                  <MdKeyboardArrowDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setSortBy("latest");
                          setIsDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                          sortBy === "latest"
                            ? "text-gray-900 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        Latest
                      </button>
                      <button
                        onClick={() => {
                          setSortBy("oldest");
                          setIsDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                          sortBy === "oldest"
                            ? "text-gray-900 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        Oldest
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800">
                Write a Review
              </button>
            </div>
          </div>

          <Reviews sortBy={sortBy} />
        </>
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="border-b border-gray-200">
        <nav className="flex justify-evenly space-x-8">
          <button
            onClick={() => setSelectedTab("product")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === "product"
                ? "border-black text-gray-900"
                : "border-transparent text-gray-500 hover:text-black hover:border-black"
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setSelectedTab("rating")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === "rating"
                ? "border-black text-gray-900"
                : "border-transparent text-gray-500 hover:text-black hover:border-black"
            }`}
          >
            Rating & Reviews
          </button>
          <button
            onClick={() => setSelectedTab("faqs")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === "faqs"
                ? "border-black text-gray-900"
                : "border-transparent text-gray-500 hover:text-black hover:border-black"
            }`}
          >
            FAQs
          </button>
        </nav>
      </div>

      <div className="py-6">{renderContent()}</div>
    </div>
  );
}

export default RatingReviewSection;
