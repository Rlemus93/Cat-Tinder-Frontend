import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import catTinderLogo from "../assets/cat-tinder-logo.png"

const Header = () => {
  return (
    <Nav className="nav-cont" navbar>
      <div className="hider"></div>
      <div className="logo-cont">
        <NavLink className="nav-link" to="/">
          <img
              src={catTinderLogo}
              alt="cat tinder logo: the profile of a cat enclosed in a circle"
              className="cat-tinder-logo"
            />
        </NavLink>
      </div>
      <div className="navigation-links">
        <NavLink className="nav-link" to="/cat-index">See All Cats</NavLink>
        <a
          href="https://www.austinpetsalive.org/?c_src=GoogleAds-home&c_src2=ads-google-adopt&gad_source=1&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1vNA5Q07ZUYdyQwuS_e5pbG4_FXnxC9BmdcDFmwVU4wRHXKlF3DdfoaAqh6EALw_wcB"
          target="blank"
          className="nav-link">
          Adopt a Cat
        </a>
        <NavLink className="nav-link" to="/cat-new">Add a Cat</NavLink>
      </div>
    </Nav>
  )
}

export default Header