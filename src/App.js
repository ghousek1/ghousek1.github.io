import "./App.css";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <div className="App">
      <ThemeContextDefaultProvider>
        <Navigation />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contributions />
      </ThemeContextDefaultProvider>
    </div>
  );
}

export default App;
