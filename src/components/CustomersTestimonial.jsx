import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { testimonials } from "../data/Testimonials";

export default function CustomersTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(testimonials.length - visibleCards, 0)
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full space-y-5 lg:px-24 md:px-16 sm:px-7 px-4 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between ">
        <h2 className="text-3xl font-IntegralBold">OUR HAPPY CUSTOMERS</h2>
        <div className="flex items-center gap-6">
          <button onClick={handlePrev}>
            <FaArrowLeft size={15} />
          </button>
          <button onClick={handleNext}>
            <FaArrowRight size={15} />
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 min-w-full">
          {testimonials
            .slice(currentIndex, currentIndex + visibleCards)
            .map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[300px] flex-shrink-0"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
