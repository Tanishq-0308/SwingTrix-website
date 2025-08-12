// src/components/GolfFeatureSection.jsx

import React from 'react';
import {
  FaMobileAlt,
  FaBrain,
  FaBolt,
  FaUsers,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaMobileAlt />,
    title: 'No Hardware Needed',
    description: 'Just your smartphone camera.',
  },
  {
    icon: <FaBrain />,
    title: 'AI-Powered Accuracy',
    description: 'Built on computer vision and machine learning.',
  },
  {
    icon: <FaBolt />,
    title: 'Instant Feedback',
    description: 'Real-time stats after every swing.',
  },
  {
    icon: <FaUsers />,
    title: 'For All Levels',
    description: 'From beginners to pros.',
  },
];

const GolfFeatureSection = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2A9D8F] sm:text-4xl">
            Smart golf performance tracking, made for everyone.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
            data-aos="zoom-out"
            data-aos-delay={index * 200} 
              key={feature.title}
              className="flex transform flex-col items-center justify-center rounded-xl bg-[#E9F2F1] p-8 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9F2F1] text-teal-600 transition-transform duration-500 ease-in-out hover:rotate-12"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-2xl">{feature.icon}</div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GolfFeatureSection;