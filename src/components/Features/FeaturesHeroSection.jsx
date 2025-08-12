import React from 'react';
import featureHero from "../../assets/featureHero.png"

const FeaturesHeroSection = () => {
  
  return (
    <div className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Column - Text and Buttons */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Pro-Level Golf Tracking. Zero Equipment.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              SwingTrix delivers powerful launch monitor features using only your smartphone — perfect for golfers of all levels.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#2A9D8F] px-6 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-600"
              >
                Try Now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border-2 border-teal-500 px-6 py-3 text-base font-medium text-[#2A9D8F] transition duration-300 ease-in-out hover:bg-teal-50 hover:text-teal-600"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Right Column - Smartphone Image */}
          <div className="flex justify-center lg:justify-end">
            <img src={featureHero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHeroSection;