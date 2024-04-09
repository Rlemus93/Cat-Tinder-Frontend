import React, { useEffect, useState } from "react"
import heroImage from "../assets/hero-image.png"
import heroImage2 from "../assets/hero-image-2.png"
import heroImage3 from "../assets/hero-image-3.png"
import heroImage4 from "../assets/hero-image-4.png"
import heroImage5 from "../assets/hero-image-5.png"
import accentHeroImage from "../assets/accent-hero-image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const heroImages = [heroImage, heroImage2, heroImage3, heroImage4, heroImage5]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="home-cont">
      <img
        className="accent-hero-image"
        src={accentHeroImage}
        alt="an accent wave faded in the background"
      />
      <h1 className="home-title">
        CAT <br /> TINDER
      </h1>
      <Link to="/cat-index">
        <h3 className="home-sub-title">
          Find Your Purrfect Match{" "}
          <FontAwesomeIcon
            className="home-arrow-icon"
            icon={faCircleArrowRight}
          />
        </h3>
      </Link>
      {heroImages.map((image, index) => (
        <img
          key={index}
          className={`home-hero-image ${
            index === imageIndex ? "active" : "inactive"
          }`}
          src={image}
          alt="cat from neck up"
        />
      ))}
      {heroImages.map((image, index) => (
        <img
          key={index}
          className={`home-hero-image-shadow ${
            index === imageIndex ? "active" : "inactive"
          }`}
          src={image}
          alt="cat from neck up shadow"
        />
      ))}
    </div>
  )
}

export default Home
