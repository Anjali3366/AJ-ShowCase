import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-purple-500/20 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <p className="text-gray-400 mb-2">
          © 2025 Portfolio. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Made with <Heart className="w-4 h-4 inline text-pink-500" /> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
