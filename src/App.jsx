import React from "react";
import Home from "./Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
