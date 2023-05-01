import './App.css';
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from './particlejs-config.json';
// import pic1 from './pic1.jpg'
// import pic2 from './pic2.jpg'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const opts = options;
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer speed={1} className='layerOne'>
          <h1 className='headertext' >Layer One Text</h1>
          <Particles classname="particlebox" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={opts} />

        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className='layerTwo'>
        <h1 className='headertext' >Layer 2 Text</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2}  className='layerThree'>
        <h1 className='headertext' >Layer 3 Text</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={3} className='layerFour'>
        <h1 className='headertext' >Layer 4 Text</h1>
        </ParallaxLayer>
      </Parallax>
       
    </div>
  );
}

export default App;
