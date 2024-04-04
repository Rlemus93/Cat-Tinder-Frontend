import React from "react"
import heroImage from "../assets/hero-image.png"
import accentHeroImage from "../assets/accent-hero-image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <div className="home-cont">
      <img className="accent-hero-image" src={accentHeroImage} alt="an accent wave faded in the background" />
      <h1 className="home-title">CAT <br /> TINDER</h1>
      <h3 className="home-sub-title">Find Your Purrfect Match <FontAwesomeIcon className="home-arrow-icon" icon={faCircleArrowRight} /></h3>
      <img className="home-hero-image-shadow" src= { heroImage } alt="cat with sunglasses' shadow" />
      <img className="home-hero-image" src= { heroImage } alt="grey cat with glasses on" />
    </div>
  )
}

export default Home