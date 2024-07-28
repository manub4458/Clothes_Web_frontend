"use client"
// hooks/useScrollAnimations.js
// hooks/useScrollAnimations.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      gsap.utils.toArray('.animate').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%', // Adjust as needed
              end: 'bottom 30%', // Adjust as needed
              scrub: true,
            },
          }
        );
      });
    };

    handleScrollAnimations();

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  // No need to return anything
};

export default useScrollAnimations;
