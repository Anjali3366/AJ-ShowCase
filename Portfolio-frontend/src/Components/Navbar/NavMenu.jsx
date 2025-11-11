// Navigation Menu Component
import NavLink from "./Navlink";
const NavMenu = ({ navItems, activeSection, setActiveSection }) => {
  return (
    <nav className="flex items-center gap-2 relative">
      <div
        className="absolute h-12 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full transition-all duration-300 ease-out"
        style={{
          width: "80px",
          left: `${
            navItems.findIndex((item) => item.id === activeSection) * 100
          }px`,
        }}
      />

      {navItems.map((item) => (
        <NavLink
          key={item.id}
          item={item}
          isActive={activeSection === item.id}
          onClick={() => setActiveSection(item.id)}
        />
      ))}

      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-float pointer-events-none"
          style={{
            left: `${20 + i * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: "3s",
          }}
        />
      ))}
    </nav>
  );
};

export default NavMenu;
