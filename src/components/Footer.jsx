import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import NewsLetter from "./NewsLetter";

function Footer() {
  return (
    <>
      <NewsLetter />
      <footer className="bg-gray-100 pt-[80px] px-6 py-12 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-4 max-w-xs ">
            <h1 className="text-xl font-IntegralBold text-black">SHOP.CO</h1>
            <p className="text-sm leading-5 text-gray-600">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
            </div>
          </div>

          <div className="flex flex-wrap justify-between flex-1 gap-8">
            {[
              {
                title: "Company",
                links: ["About", "Features", "Works", "Career"],
              },
              {
                title: "Help",
                links: [
                  "Customer Support",
                  "Delivery Details",
                  "Terms & Conditions",
                  "Privacy Policy",
                ],
              },
              {
                title: "FAQ",
                links: ["Account", "Manage Deliveries", "Orders", "Payments"],
              },
              {
                title: "Resources",
                links: [
                  "Free eBooks",
                  "Development Tutorial",
                  "How-to Blog",
                  "Youtube Playlist",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="min-w-[120px]">
                <h4 className="font-semibold mb-3 text-transform: uppercase text-black">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link} className="hover:text-black cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p>Shop.co © 2000–2023, All Rights Reserved</p>
          <div className="flex gap-2">
            <img className="w-10 h-10" src="/visa.svg" alt="Visa" />
            <img className="w-10 h-10" src="/mastercard.svg" alt="MasterCard" />
            <img className="w-10 h-10" src="/paypal.svg" alt="PayPal" />
            <img className="w-10 h-10" src="/applepay.svg" alt="Apple Pay" />
            <img className="w-10 h-10" src="/googlepay.svg" alt="Google Pay" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
