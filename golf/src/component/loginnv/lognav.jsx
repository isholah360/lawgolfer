import { Link } from 'react-router-dom';
import './log.css';

function Lognav() {
    const thedts = new Date().toUTCString().slice(0, 14)
  return ( 
    <div className="lognv">
      <div className="lognvg">
        <div className="phone">
         {thedts}
         <span style={{padding:"0 1rem"}}>Phone:08068235454</span>
        </div>
        <div className="nv-social">
            <div className="log-out">
              <Link to="/register">
                <div className="login-nv">Register</div>
              </Link>
              <Link to="/login">
                <div className="login-nv">Login</div>
              </Link>

            </div>
           
            <div className="media-logo">
              <img src="assets/instagram.png" alt="" /> 
            </div>
            <div className="media-logo">
              <img src="assets/fbcirc.png" alt="" />
            </div>
            <div className="media-logo">
              <img src="assets/twitter.png" alt="" />
            </div>
            <div className="media-logo">
              <img src="assets/you1.png" alt="" />
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default Lognav;
