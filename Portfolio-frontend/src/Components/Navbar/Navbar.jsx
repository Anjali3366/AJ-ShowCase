import { useEffect, useState } from "react";
import Logo from "./Logo";
import BackgroundEffects from "./BackgroundEffects";
import NavMenu from "./NavMenu";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "explore", label: "Explore" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "h-20 bg-black/90" : "h-24 bg-black/70"
      } backdrop-blur-xl border-b border-purple-500/20`}
      style={{
        animation: "slideDown 0.8s ease-out",
      }}
    >
      <BackgroundEffects mousePosition={mousePosition} />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <NavMenu
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
