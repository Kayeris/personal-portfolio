import '../styles/appstyle.css';
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from '../assets/particlejs-config.json';

import Navbar from "../components/navbar";
import IntroDiv from "../components/landing-div"
import AboutMe from "../components/about-me-div"
import ToolsnTech from "../components/tools-n-tech-div"
import ProjectDiv from "../components/projects-div"
import ExpDiv from "../components/experience-div"
import ContactDiv from "../components/contactme"

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function LandingPage() {
  const opts = options;
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div>
      <Parallax pages={8}>
        <ParallaxLayer className='layerOne'>
          <Navbar/>   
          <IntroDiv/>
          <Particles classname="particlebox" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={opts} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={1} factor={1} className='layerTwo'>
          <AboutMe/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.3}  offset={2} className='layerThree'>
          <ToolsnTech/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4}  offset={3} className='layerFour'>
          <ProjectDiv/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4} factor={4} offset={4} className='layerFour'>
          <ExpDiv/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} factor={1} offset={7} className='layerFour'>
          <ContactDiv id="#contact" />
        </ParallaxLayer>
      </Parallax>
       
    </div>
  );
}

export default LandingPage;
