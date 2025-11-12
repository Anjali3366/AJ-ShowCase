import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Explore from "./Sections/Explore";
import Home from "./Sections/Home";
import Skills from "./Sections/Skills";
import FluidCursor from "./Components/FluidCursor";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "explore", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <FluidCursor />
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Home />
        <About />
        <Explore />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
