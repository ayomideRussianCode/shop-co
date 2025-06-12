import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../data/Testimonials";
import TestimonialCard from "./TestimonialCard";

export default function CustomersTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const cardWidth = 320;
  const cardGap = 16;
  const scrollStep = cardWidth + cardGap;

  const totalCards = testimonials.length;

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1);       
      else if (width < 1024) setVisibleCards(2); 
      else setVisibleCards(3);                 
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(totalCards - visibleCards, 0);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full space-y-5 lg:px-24 md:px-16 sm:px-7 px-4 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between">
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

      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * scrollStep}px)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[320px] flex-shrink-0"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
