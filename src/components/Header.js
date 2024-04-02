import React from 'react'
import { Nav } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Nav className="me-auto" navbar>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/cat-index">See All Cats</NavLink>
        <a
          href="https://www.austinpetsalive.org/?c_src=GoogleAds-home&c_src2=ads-google-adopt&gad_source=1&gclid=Cj0KCQjw2a6wBhCVARIsABPeH1vNA5Q07ZUYdyQwuS_e5pbG4_FXnxC9BmdcDFmwVU4wRHXKlF3DdfoaAqh6EALw_wcB"
          target="blank"
          className="nav-link">
          Adopt a Cat
        </a>
        <NavLink className="nav-link" to="/cat-new">Add a Cat</NavLink>
      </Nav>
    </div>
  )
}

export default Header