import "./compcad.css";
import { useRef } from "react";
import { Power3 } from "gsap";
import gsap from "gsap";

function ComCard({player, playerImg, role}) {
 
  const myElementRef = useRef(null);


  const handleOn = () => {
    gsap.fromTo(
      myElementRef.current, // Target element
      { opacity: 0, height: "0", y: "15rem", display: "block" }, // Initial state
      {
        opacity: 1,
        height: "79%",
        y: "0rem",
        duration: 1,
        ease: Power3.easeOut,
      } // Final state
    );
  };
  const handleOut = () => {
    gsap.fromTo(
      myElementRef.current, // Target element
      { opacity: 1, height: "79%" }, // Initial state
      {
        opacity: 0,
        height: "0",
        duration: 1,
        display: "none",
        ease: Power3.easeOut,
      } // Final state
    );
  };
  return (
    <div>
      <div className="comp-card-comp">
        <div
          className="candit-one"
          onMouseEnter={handleOn}
          onMouseLeave={handleOut}
        >
          <div className="card-img">
            <img src={playerImg} alt="" />
          </div>
          <div className="name-social">
            <div className="play-name">{player}
            <br />
             <span  style={{padding: ".5rem 0", margin:".5rem 0", fontSize:".8rem"}}>{role}</span>
            </div>
            <div className="play-social" ref={myElementRef}>
              <img src="assets/fb.png" alt="" />
              <img src="assets/twi.png" alt="" />
              <img src="assets/ins.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComCard;
