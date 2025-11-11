import { Rocket } from "lucide-react";

const Explore = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Modern shopping experience with React & Node.js",
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Portfolio Website",
      desc: "Stunning personal portfolio with animations",
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "Dashboard App",
      desc: "Analytics dashboard with real-time data",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Social Media App",
      desc: "Connect and share with friends",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Task Manager",
      desc: "Organize your work efficiently",
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecasts",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section
      id="explore"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Explore My Work
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg">
            Check out some of my recent projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300`}
              />

              <div className="relative bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 h-full transform group-hover:scale-105 transition-all duration-300">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}
                >
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.desc}</p>

                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  View Project →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
