import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Andy Heggs,</span> AI-centric software developer & data scientist </h1>
      <p>Luxury asset strategist turned AI-driven software engineer, I blend board-level leadership with fresh full-stack and machine-learning skills. From Django APIs to TensorFlow models, I build data-powered products that solve real-world problems and scale businesses. Decisive, risk-tolerant and relentlessly curious, I translate complex ideas into delightful digital experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
