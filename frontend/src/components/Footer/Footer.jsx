import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* SHOP */}
        <div>
          <h3 className="font-bold mb-2">SHOP</h3>
          <ul className="space-y-2">
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Gift Card</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="font-bold mb-2">ABOUT</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Stores</li>
            <li>Sustainability Efforts</li>
            <li>Promotions</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-bold mb-2">SUPPORT</h3>
          <ul className="space-y-2">
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>

          <div className="mt-4">
            <h4 className="font-bold text-xs mb-1">GOT A QUESTION?</h4>
            <p className="flex items-center text-sm">
              📞 (+65) 6361 0058
            </p>
            <p className="flex items-center text-sm">
              📧 hello@trtconcept.com
            </p>
          </div>
        </div>

        {/* SIGN UP */}
        <div className="md:col-span-2">
          <h3 className="font-bold mb-2">Get $5 off when you sign up.</h3>
          <p className="text-sm mb-4">Receive the latest updates on our new releases and more.</p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-gray-300 text-white py-2 font-semibold rounded"
            >
              SUBMIT
            </button>
          </form>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaPaperPlane />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-xs text-gray-500 py-4 px-4 flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        <p>All rights reserved. Made By Harsh Sharma</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
