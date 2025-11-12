import { Rocket } from "lucide-react";
import ScrollStack from "../Components/ScrollStack";
import ScrollStackItem from "../Components/ScrollStackItem";

const Explore = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Modern shopping experience with React & Node.js",
      color: "from-purple-600 to-blue-600",
      tags: ["React", "Node.js"],
    },
    {
      title: "Portfolio Website",
      desc: "Stunning personal portfolio with animations",
      color: "from-pink-600 to-purple-600",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Dashboard App",
      desc: "Analytics dashboard with real-time data",
      color: "from-blue-600 to-cyan-600",
      tags: ["Next.js", "D3.js"],
    },
    {
      title: "Social Media App",
      desc: "Connect and share with friends",
      color: "from-purple-600 to-pink-600",
      tags: ["React", "Firebase"],
    },
    {
      title: "Task Manager",
      desc: "Organize your work efficiently",
      color: "from-green-600 to-teal-600",
      tags: ["Vue.js", "Express"],
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecasts",
      color: "from-orange-600 to-red-600",
      tags: ["React", "API"],
    },
  ];

  return (
    <section
      id="explore"
      className="relative py-20 md:py-32 bg-black overflow-hidden min-h-screen"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
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

        <ScrollStack
          stackOffset={120}
          scaleFactor={0.04}
          useWindowScroll={true}
        >
          {projects.map((project, index) => (
            <ScrollStackItem
              key={index}
              itemClassName="bg-gradient-to-br from-black/90 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 group cursor-pointer overflow-hidden"
            >
              <div className="relative z-10">
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-6 bg-gradient-to-br ${project.color} rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                />

                <div className="relative">
                  {/* Top Section */}
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 shadow-lg`}
                    >
                      <Rocket className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 text-sm font-medium rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                      <span>View Project</span>
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Explore;
