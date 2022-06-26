import React from "react";
import { Link } from "react-router-dom";
import NavbarData from "../data/NavbarData";
import "../style/Navbar.css";
import logo_photostudio from "../assets/logo_photostudio.png";

const Navbar = () => {

  

  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <Link to="/" className="navbar_logo">
          <img src={logo_photostudio} alt="IDEAL DIZAYN STUDIO" />
        </Link>
        <div className="navbar_menu">
          {NavbarData.map((item) => (
            <Link to={item.path} className="navbar_menu_item">
              {item.link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
