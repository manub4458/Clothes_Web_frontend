"use client"
// pages/index.js or any other page
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Effect = () => {
  useEffect(() => {
    // Only run on the client-side
    if (typeof window !== 'undefined') {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Set up scroll animations
      gsap.utils.toArray('.parallax-layer').forEach((element, index) => {
        gsap.to(element, {
          y: () => -window.scrollY / (index + 1), // Adjust speed as needed
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top top', // Adjust as needed
            end: 'bottom bottom', // Adjust as needed
            scrub: true,
          },
        });
      });
    }
  }, []);

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <div className="parallax-layer" style={{ height: '500px', backgroundColor: 'lightblue' }}>
        <h2>This is the foreground layer</h2>
      </div>
      <div className="parallax-layer" style={{ height: '700px', backgroundColor: 'lightgreen' }}>
        <h2>This is the midground layer</h2>
      </div>
      <div className="parallax-layer" style={{ height: '1000px', backgroundColor: 'lightgray' }}>
        <h2>This is the background layer</h2>
      </div>
      <div style={{ height: '2000px', background: 'linear-gradient(to bottom, lightgray, white)' }}>
        <p>Scroll down to see the parallax effect!</p>
      </div>
    </div>
  );
};

export default Effect;
