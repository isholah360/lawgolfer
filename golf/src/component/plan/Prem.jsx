import React from "react";
import Plan from "./plan";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Prem() {
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
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
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0, duration: 2 } // Final state
    );
  }, []);
  return (
    <>
      <div className="pln-complete"ref={parallaxRef}>
        <div className="pln-title">CLUMB MEMBERSHIP</div>
        <div className="select-pln">Select the your most suitable plan</div>
        <div className="the-plans" ref={parallaxa}>
          <Plan amount="250/mth" naming="Junior" />
          <Plan amount="350/mth" naming="Individual" />
          <Plan amount="450/mth" naming="Family" />
        </div>
        <div className="promopln" >
          <div className="mnth-mem">
            <div className="get-pro-mem">
            Get One Month Free Golf Club Membership
            </div>
            <div className="pro-fone-mil">
                <div className="plan-phone">08068235454</div>
                <div className="plan-mil">isholah360@gmail.com</div>
            </div>
          </div>
          <div className="join-memb-button">
            <button>Join Now</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Prem;
