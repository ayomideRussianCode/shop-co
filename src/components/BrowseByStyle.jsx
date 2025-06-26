import { Link } from "react-router-dom";

function BrowseByStyle() {
  return (
    <div >
      <div className="p-10 bg-[#f0f0f0] rounded-xl mx-10 my-10">
        <div>
          <h2 className="flex justify-center font-IntegralBold text-4xl sm:text-2xl lg:py-8">
            BROWSE BY DRESS STYLE
          </h2>

          <Link to="/product-category">
          <div>
              <div className="flex flex-col md:flex-row  gap-4 py-4">
              <div>
                <img src="/casual.png" alt="casual-style" />
              </div>
              <div>
                <img src="/formal.png" alt="formal-style" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div>
                <img src="/party.png" alt="party-style" />
              </div>
              <div>
                <img src="/gym.png" alt="gym-style" />
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BrowseByStyle;
