import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30" />
        <div
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x - 192}px`,
            top: `${mousePos.y - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-fadeInDown">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-purple-300 text-sm font-medium border border-purple-500/50 backdrop-blur-sm">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeInUp">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Creative Developer
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Crafting beautiful digital experiences with modern technologies and
          innovative designs
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#explore"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-float"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 10}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: "4s",
          }}
        />
      ))}
    </section>
  );
};

export default Home;
