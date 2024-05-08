import "./coabout.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Coabou() {
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
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
      { opacity: 0, x: 80 }, // Initial state
      { opacity: 1, x: 0, duration: 2 } // Final state
    );
    tl.fromTo(
      parallay.current,
      { opacity: 0, x: -80 }, // Initial state
      { opacity: 1, x: 0, duration: 2 } // Final state
    );
  }, []);
  return (
    <div ref={parallaxRef}>
      <div className="cobout">
        <div className="cobout-img" ref={parallaxa}>
          <img src="assets/gf4.jpeg" alt="" />
        </div>
        <div className="cobout-cont" ref={parallay}>
          <span>ABOUT US</span>
          <div
            style={{
              padding: ".9rem 0 .9rem 0",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Play like a Champion Today.
          </div>
          <div className="bout-content">
            Established in 1964 by a group of seasoned golf professionals, our
            club has since become a cornerstone in one of the country's most
            scenic regions. Located amidst lush landscapes and breathtaking
            vistas, our club offers an ideal setting for both golf enthusiasts
            and families seeking a relaxing membership experience. 
            <br />
            <br />
            Our course is
            renowned for its challenging design and natural beauty, attracting
            members who appreciate a premium golfing environment. With a strong
            focus on community and family-oriented activities, our club provides
            a welcoming atmosphere for all who share a passion for the sport and
            the serenity of nature.
          </div>
          <div className="the-wrd">
            <img src="assets/wd.png" alt="" />
            <img src="assets/wdd.png" alt="" />
            <img src="assets/wddd.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coabou;
