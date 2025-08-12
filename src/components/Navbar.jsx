import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/swingTrixLogo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full z-50 px-4 md:px-8 py-4 sticky top-0">
      <div className="relative"> {/* <-- Important for absolute positioning */}
        <nav className="w-full bg-white/10 max-w-6xl mx-auto px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-lg rounded-xl shadow-md">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img src={logo} alt="" className="h-10"/>
            </Link>
            {/* <div className="w-8 h-8 bg-green-500 rounded grid place-items-center text-white font-bold text-xl">
              <span className="text-white">
                🟢
              </span>
            </div>
            <span className="text-white text-lg font-semibold">Forecaster</span> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" href="#features" className="text-gray-500 hover:text-[#2A9D8F] transition">Home</Link>
            <Link to="/about-us" className="text-gray-500 hover:text-[#2A9D8F] transition">About</Link>
            <Link to="/how-it-works" className="text-gray-500 hover:text-[#2A9D8F] transition">How it works</Link>
            <Link to="/features" className="text-gray-500 hover:text-[#2A9D8F] transition">Features</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none" aria-label="Toggle menu">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Overlay */}
        {menuOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-black/80 backdrop-blur-md rounded-xl shadow-md px-6 py-4 space-y-4 text-white md:hidden z-40">
            <a href="#features" className="block hover:text-green-400 transition">Home</a>
            <a href="#modes" className="block hover:text-green-400 transition">About</a>
            <a href="#membership" className="block hover:text-green-400 transition">How it works</a>
            <a href="#faq" className="block hover:text-green-400 transition">Features</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
