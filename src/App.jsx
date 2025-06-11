import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SocialIcons from "./Components/Socials/Socials";
import About from "./Components/About/About";
import Insights from "./Components/Insights/Insights";
import InsightsRepo from "./pages/InsightsRepo";
import MyWork from "./Components/MyWork/MyWork";
import ProjectsRepo from "./pages/ProjectsRepo";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";


// Home page component with two‑column layout
const Home = () => (
  /* Wrapper for the two‑column layout */
  <div className="layout-container">
    {/* Left Sidebar: Hero, Navbar, and Social Icons */}
    <div className="sidebar">
      <Hero /> {/* Hero section */}
      <Navbar /> {/* Navigation bar */}
      <SocialIcons /> {/* Social media icons */}
    </div>

    {/* Right Main Content Area */}
    <div className="main-content">
      <About />
      <MyWork />
      <Skills />
      <Insights />
      <Contact />
    </div>
  </div>
);

/* ------- App Component with React Router ------- */
const App = () => (
  <Router>
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />
      {/* Insights repo route */}
      <Route path="/insights" element={<InsightsRepo />} />
      {/* Projects repo route */}
      <Route path="/projects" element={<ProjectsRepo />} />
    </Routes>
  </Router>
);

export default App;
