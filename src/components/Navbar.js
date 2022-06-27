import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarData from "../data/NavbarData";
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
        <div className="navbar_logo">
          <img src={logo} alt="IDEAL DIZAYN STUDIO" />
        </div>
        <div className="navbar_link">
          {NavbarData.map((item) => (
            <Link className="navbar_link_item" to={item.path} key={item.id}>
              {item.link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
