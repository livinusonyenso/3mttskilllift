// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-40 ">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
        
        {/* Company Info & Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-lg font-semibold">SkillLift</h2>
          <p className="text-gray-400">Helping students excel through interactive learning.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">Email: support@skilllift.com</p>
          <p className="text-gray-400">Phone: +2348139422159</p>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold text-center md:text-left">Newsletter</h3>
          <p className="text-gray-400 mt-2 text-center md:text-left">
            Stay updated with our latest courses and offers.
          </p>
          <form className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SkillLift. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
