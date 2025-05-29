import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-20 ">
      <div className="flex flex-col lg:flex-row bg-[#f0f0f0] ">
        <div className="flex flex-col lg:flex-row ">
          <div className="bg-black mx-4 text-white my-20 rounded-3xl lg:mx-20 -translate-y-1/2 p-6">
            <div className="text-4xl lg:text-4xl font-IntegralBold font-medium ">
              <h1> STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className="flex flex-col gap-x-2 gap-y-2 lg:flex-row my-4  ">
              <div className="">
                <input
                  type="text"
                  placeholder="Enter your Email Address"
                  className="rounded-full px-4 py-3 w-full text-[#ffffff] text-center "
                />
                {/* <img className="absolute top-1/2 left-2 -translate-y-1/2" src="/mail-icon.svg" alt="mail-icon" /> */}
              </div>
              <input type="text" placeholder="Subscribe to Newsletter" className="rounded-full p-x-4 py-3 w-full text-center text-black " />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#f0f0f0] mt-20">
//       <div className="bg-black text-white rounded-3xl mx-4 sm:mx-8  md:mx-20 lg:mx-40 -translate-y-1/2 p-6 sm:p-10 text-center flex flex-col gap-6 items-center">
//         <h2 className="text-2xl sm:text-3xl font-bold">
//           STAY UPTO DATE ABOUT OUR LATEST OFFERS
//         </h2>
//         <div className=" flex-row items-center gap-4 w-full max-w-xl">
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             className="px-4 py-3 mb-4 rounded-full w-full text-black outline-none"
//           />
//           <button className="bg-white w-full text-black px-6 py-3 rounded-full font-semibold">
//             Subscribe to Newsletter
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 pb-6 pt-8 grid gap-10 md:grid-cols-5 sm:grid-cols-2 text-sm">
//         <div className="md:col-span-1">
//           <h3 className="text-xl font-extrabold mb-3">SHOP.CO</h3>
//           <p className="mb-4 text-gray-600">
//             We have clothes that suits your style and which you’re proud to
//             wear. From women to men.
//           </p>
//           <div className="flex gap-3 text-black">
//             <FaTwitter className="w-6 h-6 hover:text-gray-500" />
//             <FaFacebook className="w-6 h-6 hover:text-gray-500" />
//             <FaInstagram className="w-6 h-6 hover:text-gray-500" />
//             <FaGithub className="w-6 h-6 hover:text-gray-500" />
//           </div>
//         </div>

//         <div className="grid grid-cols-2">
//           <div>
//             <h4 className="font-bold mb-3">COMPANY</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>About</li>
//               <li>Features</li>
//               <li>Works</li>
//               <li>Career</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-3">HELP</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>Customer Support</li>
//               <li>Delivery Details</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-3">FAQ</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>Account</li>
//               <li>Manage Deliveries</li>
//               <li>Orders</li>
//               <li>Payments</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-3">RESOURCES</h4>
//             <ul className="space-y-2 text-gray-600">
//               <li>Free eBooks</li>
//               <li>Development Tutorial</li>
//               <li>How to - Blog</li>
//               <li>YouTube Playlist</li>
//             </ul>
//           </div>
//         </div>

//         <hr />

//         <div className="max-w-7xl mx-auto px-6 py-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
//           <p>Shop.co © 2000-2023, All Rights Reserved</p>
//           <div className="flex gap-2">
//             <img src="/visa.svg" alt="Visa" className="h-6" />
//             <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
//             <img src="/paypal.svg" alt="PayPal" className="h-6" />
//             <img src="/applepay.svg" alt="Apple Pay" className="h-6" />
//             <img src="/googlepay.svg" alt="Google Pay" className="h-6" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
