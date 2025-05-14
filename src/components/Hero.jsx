const Hero = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-6 mt-10 md:mt-20 text-center md:text-left">
        {/* Text Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
          </h2>
          <p className="text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Shop Now
            </button>
          </div>
  
          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-6 mt-10 text-center md:text-left">
            <div>
              <p className="text-xl font-bold">200+</p>
              <p className="text-sm text-gray-600">International Brands</p>
            </div>
            <div>
              <p className="text-xl font-bold">2,000+</p>
              <p className="text-sm text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <p className="text-xl font-bold">30,000+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
  
        {/* Image */}
        <div className="mt-10 md:mt-0">
          <img src="/models.png" alt="Fashion Models" className="w-full max-w-md mx-auto" />
        </div>
      </section>
    );
  };
  
  export default Hero;
  