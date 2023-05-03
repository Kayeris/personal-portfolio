import '../styles/appstyle.css';
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from '../assets/particlejs-config.json';

import Navbar from "../components/navbar";
import IntroDiv from "../components/landing-div"
import AboutMe from "../components/about-me-div"

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
      <Parallax pages={4}>
        <ParallaxLayer speed={1} className='layerOne'>
          <Navbar/>   
          <IntroDiv/>
          <Particles classname="particlebox" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={opts} />
        </ParallaxLayer>
        <ParallaxLayer speed={2} offset={1} factor={1} className='layerTwo'>
          <AboutMe/>
        </ParallaxLayer>
        <ParallaxLayer speed={3}  offset={2} className='layerThree'>
        <h1 className='headertext' >Layer 3 Text</h1>
        </ParallaxLayer>
        <ParallaxLayer speed={4}  offset={3} className='layerFour'>
        <h1 className='headertext' >Layer 4 Text</h1>
        </ParallaxLayer>
      </Parallax>
       
    </div>
  );
}

export default LandingPage;
