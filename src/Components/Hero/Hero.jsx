import React from 'react'
import './Hero.css'
import LogoSolo from '../../assets/LogoSolo.svg'


const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={LogoSolo} alt=""/>
      <h1>Andy Heggs</h1>
      <h2>Full stack developer & data scientist</h2>
      <p>Capitalising data and building intelligent business solutions.</p>
    </div>
  )
}

export default Hero
