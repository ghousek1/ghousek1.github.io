import "./App.css";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Contributions />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
