import React from "react";

const GlowingButtons = () => {
  return (
    <div className="flex space-x-6 items-center justify-center">
      {/* {['Download the App', 'Watch Demo'].map((label) => (
        <button
          key={label}
          className="relative px-4 py-4 rounded-xl border"
        >
          <span className="z-10 relative">{label}</span>
        </button>
      ))} */}
      <button className="border px-4 py-4 rounded-xl bg-[#2A9D8F] text-white ">Download the App</button>
      <button className="border px-4 py-4 rounded-xl border-[#264653] text-[#264653]">Watch Demo</button>
    </div>
  );
};

export default GlowingButtons;
