import React from 'react'
import Slider from "react-slick";
import IMG1 from "../ROMOLO HOME IMAGES/statue1.jpg"
import IMG2 from "../ROMOLO HOME IMAGES/statue2.png"
import IMG3 from "../ROMOLO HOME IMAGES/statue3.jpg"
import IMG4 from "../ROMOLO HOME IMAGES/statue4.jpg"

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings}>

        <div className="slidercontainer">
            <img src={IMG1} />
        </div>

        <div className="slidercontainer">
            <img src={IMG2} />
        </div>

        <div className="slidercontainer">
            <img src={IMG3} />
        </div>

        <div className="slidercontainer">
            <img src={IMG4} />
        </div>

    </Slider>
  );
}
