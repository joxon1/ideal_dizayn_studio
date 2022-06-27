import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import "../style/Home.css";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="content_home">
        <div className="home">
          <p className="home_text">Добро пожаловать в студию</p>
          <h1 className="home_title">IDEAL DIZAYN</h1>
          <Link to="/about" className="home_link">Узнать больше...</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
