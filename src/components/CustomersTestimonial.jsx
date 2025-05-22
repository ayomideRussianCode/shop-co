import React, { useState, useEffect } from 'react';

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      verified: true,
      text: "I'm really impressed with the quality of these clothes. I received from ShopCo. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      id: 2,
      name: 'Alex K.',
      rating: 5,
      verified: true,
      text: 'Finding clothes that fit my body type used to be a challenge until I discovered ShopCo. The range of options they offer is truly remarkable, catering to a variety of tastes and preferences.',
    },
    {
      id: 3,
      name: 'James L.',
      rating: 5,
      verified: true,
      text: "As someone who values both style and ethical fashion pieces, I'm thrilled to have stumbled upon ShopCo. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      id: 4,
      name: 'Megan S.',
      rating: 5,
      verified: true,
      text: 'The customer service at ShopCo is exceptional. They were incredibly helpful when I needed to exchange an item, making the process smooth and hassle-free.',
    },
  ];

  const getVisibleCount = () => {
    return 3;
  };

  const visibleCount = getVisibleCount();
  
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">OUR HAPPY CUSTOMERS</h2>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={handlePrev} 
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext} 
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, isMobile }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 transition-shadow">
      {isMobile ? (
        <div className="flex flex-col">
          <div className="flex text-yellow-400 mb-2">
            {Array(5).fill(0).map((_, i) => (
              <StarIcon key={i} filled={i < testimonial.rating} />
            ))}
          </div>
          
          <div className="flex items-center mb-3">
            <span className="font-semibold text-sm">{testimonial.name}</span>
            {testimonial.verified && (
              <span className="ml-2 flex items-center">
                <span className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </span>
            )}
          </div>
          
          <p className="text-gray-700 text-xs leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>
      ) : (
        <div>
          <div className="flex text-yellow-400 mb-2">
            {Array(5).fill(0).map((_, i) => (
              <StarIcon key={i} filled={i < testimonial.rating} />
            ))}
          </div>
          
          <div className="flex items-center mb-3">
            <span className="font-semibold text-sm">{testimonial.name}</span>
            {testimonial.verified && (
              <span className="ml-2 flex items-center">
                <span className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </span>
            )}
          </div>
          
          <p className="text-gray-700 text-sm leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>
      )}
    </div>
  );
}

function StarIcon({ filled }) {
  return (
    <svg 
      className="w-4 h-4 mr-0.5" 
      fill={filled ? "currentColor" : "none"} 
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}