import { Sparkles } from "lucide-react";

// Logo Component
const Logo = ({ setActiveSection }) => {
  return (
    <a
      href="#home"
      className="group relative flex items-center gap-3 transition-transform duration-300 hover:scale-105"
      onClick={() => setActiveSection("home")}
    >
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-spin"
          style={{ animationDuration: "3s" }}
        />
        <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
        </div>
      </div>

      <div className="overflow-hidden hidden md:block">
        <span className="text-lg font-bold text-white transform transition-all duration-300 group-hover:translate-x-1 inline-block">
          Portfolio
        </span>
      </div>
    </a>
  );
};
export default Logo;
