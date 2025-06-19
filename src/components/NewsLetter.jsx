import { FiMail } from "react-icons/fi";

function NewsLetter() {
  return (
    <div className="relative z-10 -mb-20 mt-20">
      <div className="bg-black rounded-lg p-6 mx-4 flex flex-col lg:flex-row justify-between lg:mx-20 shadow-lg">
        <h2 className="font-IntegralBold text-white text-3xl mb-6 lg:mb-0 lg:w-1/2">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-full">
            <FiMail className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent outline-none text-sm text-black placeholder-gray-400"
            />
          </div>
          <button className="bg-white text-black font-medium text-sm px-6 py-2 rounded-full w-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
