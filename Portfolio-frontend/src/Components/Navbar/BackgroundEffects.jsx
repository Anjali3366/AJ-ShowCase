const BackgroundEffects = ({ mousePosition }) => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 opacity-50 animate-pulse" />

      <div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default BackgroundEffects;
