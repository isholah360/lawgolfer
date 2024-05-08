import "./footer.css";

export default function Footer() {
  return (
    <div style={{ background: "#142127", padding: "3rem 5%" }}>
      <div className="the-footer-path">
        <div className="date-up-com">
          <div className="date-com-lists">
            <img src="assets/logo.png" alt="" />
          </div>
          <div className="logo-content">Elevate Your Game, Embrace the Experience.</div>
        </div>
        <div className="date-up-pages">
          <p>Important Links</p>
          <div className="date-com-list">Home</div>
          <div className="date-com-list">About Us</div>
          <div className="date-com-list">Event</div>
          <div className="date-com-list">Tournament</div>
          <div className="date-com-list">Contact</div>
        </div>
        <div className="date-up-social">
          <p>FOLLOW US</p>
          <div className="media-logo">
            <img src="assets/instagram.png" alt="" />
            <div className="smedia">Golftogether_community</div>
          </div>
          <div className="media-logo">
            <img src="assets/fbcirc.png" alt="" />
            <div className="smedia">Golftogether</div>
          </div>
          <div className="media-logo">
            <img src="assets/linkedin.png" alt="" />
            <div className="smedia">Golftogether</div>
          </div>
          <div className="media-logo">
            <img src="assets/twitter.png" alt="" />
            <div className="smedia">Golftogether</div>
          </div>
          <div className="media-logo">
            <img src="assets/you1.png" alt="" />
            <div className="smedia">Golftogether_tv</div>
          </div>
        </div>
        <div className="date-up-register">
          <p>SUBSCRIBE TO DATEUP</p>
          <div className="subscribeto-dateup"></div>
          <div className="little-content">
            Experience world-class golf at our exclusive club, where stunning
            landscapes meet exceptional facilities. 
          </div>
          <div className="button">
            <button>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
