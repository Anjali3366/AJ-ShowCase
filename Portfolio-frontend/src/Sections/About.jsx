import { Code, Rocket, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: Rocket },
    { label: "Projects Completed", value: "50+", icon: Code },
    { label: "Happy Clients", value: "30+", icon: Heart },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gradient-to-b from-black via-purple-900/10 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 transform group-hover:scale-105 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl flex items-center justify-center">
                <Code className="w-32 h-32 text-purple-300 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate developer who loves creating beautiful and
              functional web experiences. With a keen eye for design and a
              strong foundation in modern web technologies, I bring ideas to
              life through code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development has been driven by curiosity and a
              desire to constantly learn and improve. I specialize in creating
              responsive, user-friendly applications that not only look great
              but also perform exceptionally well.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "JavaScript", "CSS", "Node.js", "UI/UX"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 hover:scale-105 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center transform group-hover:scale-105 transition-all duration-300">
                <stat.icon className="w-10 h-10 text-purple-400 mx-auto mb-3 animate-pulse" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
