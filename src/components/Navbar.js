import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/logo_photostudio.png";

const Navbar = () => {
  const [bars, setBars] = useState(false);
  const showBars = () => setBars(!bars);
  return (
    <div className="navbar_container">
      <div className="bar_container" onClick={showBars}>
        {bars ? <FaTimes /> : <FaBars />}
      </div>
      <div className="navbar_wrapper">
        <Link to="/" className="navbar_logo">
          <img src={logo} alt="IDEAL DIZAYN STUDIO" />
        </Link>
        <div
          className={bars ? "mobile_container" : "navbar_link"}
          onClick={() => showBars(false)}
        >
          <Link className="navbar_link_item" to="/">
            Главный
          </Link>
          <Link className="navbar_link_item" to="/prays">
            Прайслист
          </Link>
          <Link className="navbar_link_item" to="/about">
            О нас
          </Link>
          <Link className="navbar_link_item" to="/contact">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
