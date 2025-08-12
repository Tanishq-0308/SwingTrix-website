// src/components/TimelineSection.jsx

import React from 'react';

const timelineEvents = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'Prototype created by a team of engineers and golf lovers',
  },
  {
    year: '2024',
    title: 'AI Development',
    description: 'AI model trained on 10,000+ real-world shots',
  },
  {
    year: '2025',
    title: 'Beta Testing',
    description: 'Beta tested by pros and amateurs',
  },
  {
    year: 'Today',
    title: 'Launch',
    description: 'Launching SwingTrix to golfers everywhere',
  },
];

const TimelineSection = () => {
  return (
    <div className="bg-[#E9F2F1] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#2A9D8F] sm:text-4xl">
          How It Started
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timelineEvents.map((event) => (
            <div
              key={event.year}
              className="flex transform flex-col justify-center rounded-xl bg-white p-6 text-left shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-2xl font-bold text-teal-600">
                {event.year}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="mt-1 text-base text-gray-600">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;