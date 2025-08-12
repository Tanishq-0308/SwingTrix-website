// src/components/about/HeroSection.jsx

import React from 'react';
// Replace with the actual path to your image in your project's public folder or an external URL
// import heroImage from '/path/to/your/image.jpg';

const HeroSection = () => {
  return (
    <div className="bg-[#E9F2F1] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Built for Golfers.
            <span className="text-[#2A9D8F] block">Powered by Technology.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            SwingTrix blends passion for golf with the power of AI — so every player can train smarter, without spending thousands on hardware.
          </p>
          {/* You can add more content or buttons here if needed */}
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Golfer using phone to analyze swing at sunset"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;