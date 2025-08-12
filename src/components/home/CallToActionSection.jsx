// src/components/CallToActionSection.jsx

import React from 'react';
import { FaDownload, FaEnvelope, FaPlayCircle } from 'react-icons/fa';

const CallToActionSection = () => {
  return (
    <div className="bg-teal-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to take your golf game to the next level?
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#2A9D8F] px-6 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-600 hover:scale-105"
          >
            <FaDownload className="mr-2 h-5 w-5" />
            Download App
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-teal-900 hover:scale-105"
          >
            <FaEnvelope className="mr-2 h-5 w-5" />
            Join Beta
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-teal-900 hover:scale-105"
          >
            <FaPlayCircle className="mr-2 h-5 w-5" />
            See It In Action
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;