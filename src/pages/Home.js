import React, { useEffect, useState, useMemo } from "react"
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
  const [isLoaded, setIsLoaded] = useState(false)

  const heroImages = useMemo(
    () => [heroImage, heroImage3, heroImage4, heroImage5, heroImage2],
    []
  )

  useEffect(() => {
    const imagePromises = heroImages.map((path) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = path
        img.onload = resolve
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setIsLoaded(true)
        console.log("Images loaded")
      })
      .catch((error) => console.error("Error loading images:", error))
  }, [heroImages])

  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isLoaded, heroImages])

  if (!isLoaded) {
    return <div className="loading">Loading...</div>
  }

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
