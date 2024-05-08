import Slider from "react-slick";
import "../gallery/gallery.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MultipleItems() {
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container" ref={parallaxRef}>
      <div ref={parallaxa}>
        <div className="recent-foto">
          <div className="gallery-title">
            <div className="gall-latest">The Latest Photos</div>
            <div className="gall-amazing">AMAZING PHOTO REPORTAGE</div>
            <hr style={{ width: "5rem" }} />
          </div>
        </div>
        <Slider {...settings}>
          <div className="golfer-show">
            <img src="assets/gf2.jpeg" alt="" />
          </div>
          <div className="golfer-show">
            <img src="assets/gf3.jpeg" alt="" />
          </div>
          <div className="golfer-show">
            <img src="assets/gf4.jpeg" alt="" />
          </div>
          <div className="golfer-show">
            <img src="assets/gf5.jpeg" alt="" />
          </div>
          <div className="golfer-show">
            <img src="assets/gf6.jpeg" alt="" />
          </div>
          <div className="golfer-show">
            <img src="assets/gf8.jpeg" alt="" />
          </div>
        </Slider>

        <div className="recent-ds">
          <img src="assets/bbb.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MultipleItems;
