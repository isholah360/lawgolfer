import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./header.css";

function Header() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="header">
      <Slider {...settings}>
        <div className="outer">
          <img src="assets/go2.jpeg" alt="" />
          <div className="content-cover">
            <div className="enjoy">
              <div className="tester">
                <hr style={{ width: "7rem", background: "#fff" }} />
                ENJOY ULTIMATE{" "}
                <hr style={{ width: "7rem", background: "#fff" }} />
              </div>
              <div className="golf-exper">GOLF EXPERIENCE</div>
              <div className="golf-sub">
                Our legendary ourse is classic Gem that Cater exclusively to our
                members.
              </div>
              <div className="the-button">
                <button>SPECIAL & PACKAGE</button>
                <button style={{ margin: "0 .8rem" }}>BOOK ONLINE NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="outer">
          <img src="assets/go3.jpeg" alt="" />
          <div className="content-cover">
            <div className="enjoy">
              <div className="tester">
                <hr style={{ width: "7rem", background: "#fff" }} />
                NOW ACCEPTING{" "}
                <hr style={{ width: "7rem", background: "#fff" }} />
              </div>
              <div className="golf-exper">ONLINE RESERVATION</div>
              <div className="golf-sub">
                Book your time today! Booking one of Our Golf Club finest
                courses has never been easy.
              </div>
              <div className="the-button">
                <button>BOOK TIME</button>
                <button style={{ margin: "0 .8rem" }}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="outer">
          <img src="assets/go4.jpeg" alt="" />
          <div className="content-cover">
            Want to be part of our next Touranment
          </div>
        </div>
        <div className="outer">
          <img src="assets/go5.jpeg" alt="" />
          <div className="content-cover">
            <div className="enjoy">
              <div className="tester">
                <hr style={{ width: "7rem", background: "#fff" }} />
                ENJOY ULTIMATE{" "}
                <hr style={{ width: "7rem", background: "#fff" }} />
              </div>
              <div className="golf-exper">GET THE BEST</div>
              <div className="golf-sub">
                 Magnificient Golf, Surerb Amenities, Outstanding services
              </div>
              <div className="the-button">
                <button>BOOK TIME</button>
                <button style={{ margin: "0 .8rem" }}>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Header;
