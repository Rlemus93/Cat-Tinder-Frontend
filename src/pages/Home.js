import React from "react"
import homeHeroImage from "../assets/home-hero-image.png"

const Home = () => {
  return (
    <div className="home-cont">
    <h1 className="home-title">CAT <br /> TINDER</h1>
    <h3 className="home-sub-title"> Find Your Purrfect Match</h3>
    <img className="home-hero-image" src= { homeHeroImage } alt="grey cat with glasses on" />
    </div>
  )
}

export default Home