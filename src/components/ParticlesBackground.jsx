import particlesConfig from "./config/particles-config.js";
import basicEffect from "./config/basic-efect.js";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles";
import amoungUS from "./config/amoung-us.js";
import confetti from "./config/confetti.js";
import confettiExplosions from "./config/confetti-explosions.js";
import fireworks from "./config/fireworks.js";
import hexagons from "./config/hexagons.js";
import hexagons2 from "./config/hexagons2.js";
import lights from "./config/lights.js";
import sideConfetti from "./config/side-confetti.js";
import starryPaused from "./config/starry-paused.js";
import tunnel from "./config/tunnel.js";
import allEffects from "./config/allEffects.js";
import zigZagPath from "./config/zig-zag.path,.js";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      await loadFull(engine);
      // await loadSlim(engine);
      // await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          // options={basicEffect}
          options={particlesConfig} //colors ok
          // options={amoungUS}
          // options={confetti} //ok
          // options={confettiExplosions} //ok
          // options={fireworks}
          // options={hexagons}
          // options={hexagons2}
          // options={lights}
          // options={sideConfetti} //ok
          // options={starryPaused} //0k fix opacity bg
          // options={tunnel}
          // options={zigZagPath}
      
        />
      )}
    </>
  );
};

export default ParticlesBackground;
