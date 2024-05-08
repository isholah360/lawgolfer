
import './ads.css'
import Count from './count'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CountAds() {
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
  const parallaxy = useRef(null);
  const parallay = useRef(null);
  useEffect(() => {
    // Set up a GSAP timeline for the parallax animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top center", // Adjust the start point as needed
        end: "bottom center",
        once: true, // Enables scrubbing for a smoother effect
      },
    });

    // Define your parallax animation
    tl.fromTo(
      parallaxa.current,
      { opacity: 0, x: -150 }, // Initial state
      { opacity: 1, x: 0, duration: 2 } // Final state
    );
    tl.fromTo(
      parallaxy.current,
      { opacity: 0, x: 150 }, // Initial state
      { opacity: 1, x: 0, duration: 2 } // Final state
    );
    tl.fromTo(
      parallay.current,
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0, duration: .5 } // Final state
    );
  }, []);
  return (
    <div ref={parallaxRef}>
      <div className="the-second-ds">
         <div className="thead-cover">
            <div className="adscontent-sec" ref={parallaxa}>
                <span>Tee Off with the Best!</span>
                <div className='golftour'>Sign Up for Our Golf Tournament!</div>
                <Count/>
            </div>
            <div className="sec-adsimg" ref={parallay}>
                <img src="assets/gtou.png" alt="" />
            </div>
            <div className="power-by" ref={parallaxy}>
                by
                <div className="power-img">
                    <img src="assets/logo.png" alt="" />
                </div>
                <div className="buton"><button>Join Now</button></div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default CountAds
