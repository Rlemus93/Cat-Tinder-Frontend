import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import catTinderLogo from "../assets/cat-tinder-logo.png"

const Header = () => {
  return (
    <Nav className="nav-cont" navbar>
      <div>
        <NavLink className="nav-link" to="/">
          <img
              src={catTinderLogo}
              alt="cat tinder logo: the profile of a cat enclosed in a circle"
              className="cat-tinder-logo"
            />
        </NavLink>
      </div>
      <div className="navigation-links">
        <NavLink className="nav-link" to="/cat-index">Meet All the Cats</NavLink>
        <a
          href="https://www.petfinder.com/search/cats-for-adoption/us"
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