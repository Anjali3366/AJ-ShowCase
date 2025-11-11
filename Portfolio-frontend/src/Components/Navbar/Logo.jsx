import React, { useState, useEffect } from "react";

// Logo Component
const Logo = ({ activeSection, setActiveSection }) => {
  return (
    <a
      href="#home"
      className="group relative flex items-center gap-3 transition-transform duration-300 hover:scale-105"
      onClick={() => setActiveSection("home")}
    >
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-spin"
          style={{ animationDuration: "3s" }}
        />
        <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            B
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <span className="text-xl font-bold text-white transform transition-all duration-300 group-hover:translate-x-1 inline-block">
          Brand
        </span>
      </div>
    </a>
  );
};
export default Logo;
