import './ecom.css'
import Ecomcard from './ecomcard'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Ecom() {
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
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0, duration: 2 } // Final state
    );
    tl.fromTo(
      parallay.current,
      { opacity: 0, x: 150 }, // Initial state
      { opacity: 1, x: 0, duration: 2 } // Final state
    );
  }, []);
  return (
    <div ref={parallaxRef}>
      <div className="ecom-complete">
           <div className="first-dd">
              <img src="assets/ecomsdd.jpg" alt="" ref={parallaxa}/>
           </div>
           <div className="feuture-product">FEATURED PRODUCTS</div>
           <div className="select-perfect-pro">Select from our new collections of products</div>
           <div className="ecom-list" ref={parallay}>
             <Ecomcard ecoImg="assets/p6.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N56000'/>
             <Ecomcard ecoImg="assets/p3.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N80000'/>
             <Ecomcard ecoImg="assets/p8.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N56000'/>
             <Ecomcard ecoImg="assets/p5.jpg" ecoDesc="Callaway 2015 Hyper-Lite 5 Golf Balls – White" ecoPrice='N56000'/>
           </div>
      </div>
    </div>
  )
}

export default Ecom
