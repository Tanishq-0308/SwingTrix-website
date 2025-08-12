// src/components/PowerfulFeaturesSection.jsx


import React from 'react';
import {
    FaChartLine,
    FaVideo,
    FaHistory,
    FaGlobe,
} from 'react-icons/fa';


const features = [
    { icon: <FaChartLine />, title: 'Real-Time Shot Analytics' },
    { icon: <FaVideo />, title: 'Slow-Motion Replay' },
    { icon: <FaHistory />, title: 'Shot History' },
    { icon: <FaGlobe />, title: 'Indoor or Outdoor Use' },
];


const PowerfulFeaturesSection = () => {
    return (
        <div className="bg-[#E9F2F1] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#2A9D8F] sm:text-4xl">
                        Powerful Features. Seamless Experience.
                    </h2>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            data-aos="zoom-in"
                            data-aos-delay={index * 200} 
                            key={feature.title}
                            className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105"
                        >
                            <div className="text-teal-500 text-3xl mb-3">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default PowerfulFeaturesSection;