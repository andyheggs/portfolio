import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    // Wrapper for the two-column layout
    <div className="layout-container">
      {/* Left Sidebar: contains Hero and Navbar */}
      <div className="sidebar">
        <Hero />
        <Navbar />
      </div>

      {/* Right Main Content: contains the rest of the sections */}
      <div className="main-content">
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App
