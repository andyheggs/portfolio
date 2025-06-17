import React from 'react'
import './Hero.css'
import logo_small from '../../assets/logo_small.svg'

// Define the Hero functional component
const Hero = () => {
  return (
    // Main container div for the Hero section with id and class
    <div id='hero' className='hero'>
      {/* Logo section */}
      <div className='hero-logo'>
        <img src={logo_small} alt="Andy Heggs logo"/>
      </div>
      {/* My Name */}
      <div className='hero-myname'>
        <h1>Andy Heggs</h1>
      </div>
      {/* Technical title */}
      <div className='hero-techtitle'>
        <h2>Full stack developer & data scientist</h2>
      </div>
      {/* Tagline or short description */}
      <div className='hero-tagline'>
        <p>Capitalising data and building intelligent business solutions.</p>
      </div>
    </div>
  )
}


export default Hero
