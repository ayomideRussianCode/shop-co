import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" w-full">
      <div className="bg-[#f0f0f0] w-full p-10">
        <div className="p-10 rounded-xl bg-[#000000] flex">
          <div className="w-1/2 ">
            <h2 className="font-IntegralBold text-4xl text-white">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your email Address"
              className="rounded-full text-gray-200 p-2 w-72 "
            />
            <input
              type="text"
              placeholder="Subscribe to Newsletter"
              className="rounded-full text-black text-center p-2 w-72 "
            />
          </div>
        </div>
        <div className="flex flex-col px-8 py-6 lg:px-10 mx-4 ">
          <h2 className="font-IntegralBold text-3xl my-4">SHOP.CO</h2>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <ul className="flex gap-4 my-4">
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaGithub />
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 space-y-3 mx-6 lg:px-10 ">
         
          <hr />
        </div>
        <div className="flex flex-col items-center px-12 py-8 lg:flex-row justify-between">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <ul className="flex ">
            <li>
              <img src="/visa.svg" alt="visa-card" />
            </li>
            <li>
              <img src="/mastercard.svg" alt="mastercard" />
            </li>
            <li>
              <img src="/paypal.svg" alt="paypal" />
            </li>
            <li>
              <img src="/applepay.svg" alt="applepay" />
            </li>
            <li>
              <img src="/googlepay.svg" alt="googlepay" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;













// import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer>
//       <div className="bg-[#f0f0f0] overflow-auto">
//         {/* <div className="bg-[#000000] mx-8 rounded-xl -translate-y-1/2">
//           <div className="flex p-10 mx-8">
//             <h2 className="text-white font-IntegralBold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
//           </div>
//         </div> */}
//         <div className="flex flex-col px-8 py-6 lg:px-10 mx-4 ">
//           <h2 className="font-IntegralBold text-3xl my-4">SHOP.CO</h2>
//           <p>
//             We have clothes that suits your style and which you’re proud to
//             wear. From women to men.
//           </p>
//           <ul className="flex gap-4 my-4">
//             <li>
//               <FaTwitter />
//             </li>
//             <li>
//               <FaFacebook />
//             </li>
//             <li>
//               <FaInstagram />
//             </li>
//             <li>
//               <FaGithub />
//             </li>
//           </ul>
//         </div>
//         <div className="grid grid-cols-2 space-y-3 mx-6 lg:px-10 ">
//           <div>
//             <ul>
//               <h2 className=" text-black mb-4 mt-3 font-medium text-lg">
//                 COMPANY
//               </h2>
//               <li>About</li>
//               <li>Features</li>
//               <li>Works</li>
//               <li>Career</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <h2 className=" text-black mb-4 font-medium text-lg">HELP</h2>
//               <li>Customer Support</li>
//               <li>Delivery Details</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <h2 className=" text-black mb-4 font-medium text-lg">FAQ</h2>
//               <li>Account</li>
//               <li>Manage Deliveries</li>
//               <li>Orders</li>
//               <li>Payment</li>
//             </ul>
//           </div>
//           <div>
//             <ul>
//               <h2 className=" text-black mb-4 font-medium text-lg">
//                 RESOURCES
//               </h2>
//               <li>Free eBook</li>
//               <li>Development Tutorial</li>
//               <li>How to - Blog</li>
//               <li>Youtube Playlist</li>
//             </ul>
//           </div>
//           <hr />
//         </div>
//         <div className="flex flex-col items-center px-12 py-8 lg:flex-row justify-between">
//           <p>Shop.co © 2000-2023, All Rights Reserved</p>
//           <ul className="flex ">
//             <li>
//               <img  src="/visa.svg" alt="visa-card" />
//             </li>
//             <li>
//               <img src="/mastercard.svg" alt="mastercard" />
//             </li>
//             <li>
//               <img src="/paypal.svg" alt="paypal" />
//             </li>
//             <li>
//               <img src="/applepay.svg" alt="applepay" />
//             </li>
//             <li>
//               <img src="/googlepay.svg" alt="googlepay" />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
