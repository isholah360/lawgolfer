import { gsap } from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./navigate.css";

function Navi() {
  const menuMove = useRef(null);

  const handleMenu = () => {
    gsap.fromTo(
      menuMove.current,
      { opacity: 0, x: "15rem" }, // Initial state
      { opacity: 1, x: "-18rem", duration: 2 } // Final state
    );
  };
  const handleClose = () => {
    gsap.fromTo(
      menuMove.current,
      { x: "-15rem", duration: 5 }, // Initial state
      { x: "15rem", duration: 5 } // Final state
    );
  };

  return (
    <div>
      <div className="naviagtion">
        <div className="logo-link">
          <img src="assets/logo.png" alt="" />
        </div>
        <div className="navigate-list">
          <ul ref={menuMove}>
            <div className="close" onClick={handleClose}>
              X
            </div>
            <div className="account"></div>

            <li>
              <Link to='/login'>
                <div className="login-but">login</div>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <div className="login-but">logout</div>
              </Link>
            </li>

            <li>
            <Link to="/">
                Home
              </Link>
            </li>
            <li>About Us</li>

            <li>Event</li>
            <li>Tournamet</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="farbar" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navi;
