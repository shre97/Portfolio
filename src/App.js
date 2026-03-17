import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <div className="content">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
