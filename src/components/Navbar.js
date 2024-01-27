import React, { useState } from "react";
import MenuCreate from "./MenuCreate.js";
import { MenuItems } from "./MenuItems.js";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [menuStatus, setMenuStatus] = useState([]);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Tecnico
      </Link>
      <ul className="main-nav">
        {MenuItems.map((item, index) => (
          <MenuCreate
            key={index} // Ensure a unique key for each MenuCreate component
            item={item}
            depth={0}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            setClick={setClick}
          />
        ))}
      </ul>
      <div className="icons">
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
