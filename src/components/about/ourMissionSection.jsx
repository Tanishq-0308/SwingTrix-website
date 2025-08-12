// src/components/OurMissionSection.jsx

import React from 'react';
import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaHeart,
} from 'react-icons/fa';

const missionValues = [
  {
    icon: <FaBullseye />,
    title: 'Precision',
    description: 'Accurate measurements for every swing',
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    description: 'Pushing boundaries with AI technology',
  },
  {
    icon: <FaUsers />,
    title: 'Accessibility',
    description: 'Pro tools for every golfer',
  },
  {
    icon: <FaHeart />,
    title: 'Passion',
    description: 'Deep love for the game',
  },
];

const OurMissionSection = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-[#2A9D8F] sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 mb-10 max-w-5xl mx-auto text-lg text-gray-600">
        SwingTrix was born out of a passion for golf and technology. We're a team of engineers, AI experts, and golf fanatics who believe that every player should have access to pro-level insights — without spending thousands on gear.
        </p>
        <p className="mt-4 mb-10 max-w-5xl mx-auto text-lg text-gray-600">
        Whether you're training for your next tournament or just starting out, SwingTrix helps you understand and improve your game through AI-powered tracking — using nothing but your smartphone.
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#2A9D8F] sm:text-4xl">
          Our Mission
        </h2>
        <p className="mt-4 max-w-5xl mx-auto text-lg text-gray-600">
          At SwingTrix, we believe every golfer should have access to professional-grade
          training tools. Our mission is to democratize golf performance tracking using
          only what's in your pocket — your smartphone.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {missionValues.map((value,index) => (
            <div
            data-aos="zoom-out"
            data-aos-delay={index * 200} 
              key={value.title}
              className="bg-[#E9F2F1] rounded-xl shadow-md p-6 flex flex-col items-center justify-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-teal-500 text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-base text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;