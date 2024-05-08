import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Gala() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className="img-flex">
      <Slider {...settings}>
        <div >
          <h3>1</h3>
        </div>
        <div  >
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <p>
          <h3>6</h3>
        </p>
      </Slider>
    </div>
    </>
  );
}

export default Gala;
