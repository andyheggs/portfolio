import React from 'react'
import './Hero.css'
import LogoSolo from '../../assets/LogoSolo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={LogoSolo} alt=""/>
      <h1>Andy Heggs</h1>
      <h2>Full stack developer & data scientist</h2>
      <p>Capitalising data and building intelligent business solutions.</p>
      {/*<div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>*/}
    </div>
  )
}

export default Hero
