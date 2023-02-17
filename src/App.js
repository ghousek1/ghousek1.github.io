import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
     <Navbar/>
     <Hero/>
    </div>
  );
}

export default App;
