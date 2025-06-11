import React from 'react'
import './Hero.css'
import LogoSolo from '../../assets/LogoSolo.svg'


const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <div className='hero-logo'>
        <img src={LogoSolo} alt=""/>
      </div>
      <div className='hero-myname'>
        <h1>Andy Heggs</h1>
      </div>
      <div className='hero-techtitle'>
        <h2>Full stack developer & data scientist</h2>
      </div>
      <div className='hero-tagline'>
        <p>Capitalising data and building intelligent business solutions.</p>
      </div>
    </div>
  )
}

export default Hero
