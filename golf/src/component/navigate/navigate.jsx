import "./navigate.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";





function Navigate() {
  const menuMove = useRef(null);
  
  const handleMenu = () => {
    gsap.fromTo(
      menuMove.current,
      { opacity: 0, x: "15rem" }, // Initial state
      { opacity: 1, x: "-15rem", duration: 2 } // Final state
    );
  };
  const handleClose = () => {
    gsap.fromTo(
      menuMove.current,
      { x: "-15rem", duration: 5 }, // Initial state
      { x: "15rem", duration: 5 } // Final state
    );
  };


  // const handleLogout = async (e)=>{
  //   e.preventDefault()
  //   const res = await axios.post("http://localhost:8000/api/user/logout")
  //   localStorage.removeItem("currentUser");
  //   navigate('/')
  //   console.log(res)
  // }
  return (
    <div>
      <div className="naviagtion">
        <div className="logo-link">DateUp</div>
        <div className="navigate-list">
          <ul>
            
            <div className="account">
              
            </div>
            <li>Home</li>
            <li>About Us</li>
            <li>Trainer</li>
            <li>Events</li>

            <li>Blog</li>

            <li>Contact</li>
            
            <div className="the-mobile">
              <button>Get the App</button>
            </div>
          </ul>
        </div>
        <div className="farbar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        
      </div>
    </div>
  );
}

export default Navigate;
