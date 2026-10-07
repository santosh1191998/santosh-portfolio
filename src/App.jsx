import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Patents from "./components/Patents";
import Certifications from "./components/Certifications";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Education />

        <Experience />

        <Projects />

        <Patents />

        <Certifications />

        <Interests />

        <Contact />

      </main>

    </div>
  );
}

export default App;