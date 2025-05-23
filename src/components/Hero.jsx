const Hero = ({ modelImage }) => {
  const defaultModelImage = "/desktopModel.svg";

  const stats = [
    { count: "200+", label: "International Brands" },
    { count: "2,000+", label: "High-Quality Products" },
    { count: "30,000+", label: "Happy Customers" },
  ];

  const brands = [
    { image: "/versace.svg" },
    { image: "/zara.svg" },
    { image: "/prada.svg" },
    { image: "/gucci.svg" },
    { image: "/calvinklein.svg" },
  ];

  return (
    <div className="w-full font-sans">
      <div
        className="relative w-full bg-cover bg-center text-black"
        style={{
          backgroundImage: `url(${modelImage || defaultModelImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="/small-star.svg"
          alt="star"
          className="absolute left-80 top-40 w-10 h-10"
        />
        <img
          src="/big-star.svg"
          alt="star"
          className="absolute right-10 w-12 h-12"
        />
       
        <div className="bg-white/80 md:bg-white/70 w-full h-full">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                FIND CLOTHES
                <br />
                THAT MATCHES
                <br />
                YOUR STYLE
              </h1>
              <p className="text-sm text-gray-700 mb-6">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>

              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
              

              <div className="flex flex-wrap gap-8 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-2xl font-bold">{stat.count}</span>
                    <span className="text-xs text-gray-600">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white py-4 px-6">
        <div className="flex justify-between items-center overflow-x-auto ">
          {brands.map((brand, index) => (
            <div key={index} className="px-4 whitespace-nowrap">
              <img
                src={brand.image}
                alt="Brand logo"
                className="h-6 md:h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
