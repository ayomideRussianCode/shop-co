import React from "react";

function Reviews() {
  return (
    <div>
      <div className="flex flex-col">
        <ul className="flex  justify-between px-10 mx-64 gap-6 font-medium text-black">
          <li>Product Details</li>
          <li>Ratings & Reviews</li>
          <li>FAQs</li>
        </ul>
      </div>
      <hr className="mt-4" />

      <div className="flex mx-56 my-8">
        <div className="w-1/2">
          <h2>All Reviews</h2>
        </div>
        <div className="w-1/2">
          <div className="">
            <button className="p-2 bg-gray-300 rounded-full">Latest</button>
            <button className="bg-black  text-white rounded-full p-2">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
