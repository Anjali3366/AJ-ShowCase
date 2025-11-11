import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Explore from "./Sections/Explore";
import Home from "./Sections/Home";
import Skills from "./Sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Explore />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
