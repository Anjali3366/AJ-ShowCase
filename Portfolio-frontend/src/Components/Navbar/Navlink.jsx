// Navigation Link Component
const NavLink = ({ item, isActive, onClick }) => {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className="relative px-6 py-3 text-sm font-medium transition-all duration-300 group z-10"
    >
      <span
        className={`relative z-10 transition-all duration-300 ${
          isActive ? "text-white" : "text-gray-400 group-hover:text-white"
        }`}
      >
        {item.label}
      </span>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

      <div
        className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
          isActive
            ? "w-full -translate-x-1/2"
            : "w-0 -translate-x-1/2 group-hover:w-3/4"
        }`}
      />

      {isActive && (
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
      )}
    </a>
  );
};

export default NavLink;
