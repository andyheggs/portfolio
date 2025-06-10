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

/* ------- Home (existing layout) ------- */
const Home = () => (
  /* Wrapper for the two‑column layout */
  <div className="layout-container">
    {/* Left Sidebar: Hero + Navbar + socials */}
    <div className="sidebar">
      <Hero />
      <Navbar />
      <SocialIcons />
    </div>

    {/* Right Main Content */}
    <div className="main-content">
      <About />
      <MyWork />
      <Skills />
      <Insights />
      <Contact />
    </div>
  </div>
);

/* ------- App with routing ------- */
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/insights" element={<InsightsRepo />} />
      <Route path="/projects" element={<ProjectsRepo />} />
    </Routes>
  </Router>
);

export default App;
