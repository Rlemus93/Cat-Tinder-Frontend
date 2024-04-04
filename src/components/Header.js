import React, { useState } from "react";
import { Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import catTinderLogo from "../assets/cat-tinder-logo.png";
import speechBubbleImage from "../assets/speech-bubble-image.png";

const Header = () => {
  const [logoIsHovered, setLogoIsHovered] = useState(false);

  return (
    <Nav className="nav-cont" navbar>
      <div className="hider"></div>
      <div className="logo-cont">
        <NavLink className="nav-link" to="/">
          <img
            src={catTinderLogo}
            alt="cat tinder logo: an animated grey kitty with yellow sunglasses"
            className="cat-tinder-logo"
            onMouseEnter={() => setLogoIsHovered(true)}
            onMouseLeave={() => setLogoIsHovered(false)}
          />
          {logoIsHovered && (
            <img
              src={speechBubbleImage}
              alt='A white speech bubble with black text reading: "Take me home!"'
              className="speech-bubble-image"
            />
          )}
        </NavLink>
      </div>
      <div className="navigation-links">
        <NavLink className="nav-link" to="/cat-index">
          Meet All the Cats
        </NavLink>
        <NavLink className="nav-link" to="/cat-new">
          Add a Cat
        </NavLink>
        <a
          href="https://www.petfinder.com/search/cats-for-adoption/us"
          target="blank"
          className="nav-link"
        >
          Adopt a Cat
        </a>
      </div>
    </Nav>
  );
};

export default Header;
