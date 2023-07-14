import React, { useEffect } from 'react';
import particlesConfig from '../../particles.json';
import './ParticlesBackground.css';

function ParticlesBackground() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', particlesConfig);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="particles-js" className="particles-background"></div>;
}

export default ParticlesBackground;
