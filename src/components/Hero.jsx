import homepageImg from "../../public/homepage-img.jpg";

const Hero = () => {
  const stats = [
    { count: "200+", label: "International Brands" },
    { count: "2,000+", label: "High-Quality Products" },
    { count: "30,000+", label: "Happy Customers" },
  ];

  const brands = [
    { image: "/versace.svg" },
    { image: "/zara.svg" },
    { image: "/gucci.svg" },
    { image: "/prada.svg" },
    { image: "/calvinklein.svg" },
  ];

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row bg-[#F2F0F1]">
        <div className="md:w-1/2 px-10 py-10 lg:px-20 lg:py-32  ">
          <div className="flex flex-wrap">
            <h1 className=" text-4xl lg:text-5xl font-Satoshi md:font-IntegralBold font-black mb-4">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-sm text-[#000000] mb-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black lg:w-56 w-full items-center text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Shop Now
            </button>
            <div>
              <div className="flex gap-8 mt-8">
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

        <div className="">
          <div className="h-[523px]">
            <img
              className="w-full h-full object-cover"
              src={homepageImg}
              alt="models"
            />
          </div>
        </div>
      </div>
      

      <div className="w-full">
        <div className="bg-black text-white py-6 px-4">
          <div className=" flex flex-wrap justify-center gap-x-2 gap-y-4  ">
            {brands.map((brand, index) => (
              <div key={index} className="px-4 lg:px-10">
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
    </div>
  );
};

export default Hero;
