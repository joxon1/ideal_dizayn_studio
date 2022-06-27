import React from "react";
import img1 from "../assets/lenta-2.jpg";
import img2 from "../assets/lenta-3.jpg";
import img3 from "../assets/lenta-1.jpg";
import "../style/Slider.css";
const Slider = () => {
  return (
    <div className="slider_content">
      <div className="slider_container">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
      </div>
      <div className="mobile">
        <div className="mobile_slider">
          <img src={img3} alt="img3" />
          <img src={img3} alt="img3" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
