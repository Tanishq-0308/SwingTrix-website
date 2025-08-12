import React from 'react';
import logo from '../assets/swingtrix2white.svg'

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          {/* <h2 className="text-white text-2xl font-bold mb-4">Forcaster</h2> */}
          <img src={logo} alt="" className='h-10 mb-5'/>
          <p className="text-sm text-gray-400">
            Premium feedback tools that don’t take themselves too seriously.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter or Socials */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Stay in the loop</h3>
          <p className="text-sm text-gray-400 mb-4">Subscribe to our occasional nonsense.</p>
          <form className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-sm text-white px-4 py-2 rounded-md w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-[#2A9D8F] hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-white text-sm text-gray-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
