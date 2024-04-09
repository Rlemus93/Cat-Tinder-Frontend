import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import catCafe from "../assets/cat-cafe.jpg"
import stairKitties from "../assets/stair-kitties.jpg"
import streetKitties from "../assets/street-kitties.jpg"
import flowerCat from "../assets/flower-cat.jpg"
import roofKitties from "../assets/roof-kitties.jpg"
import tableKitties from "../assets/table-kitties.jpg"

const CatShow = ({ cats, deleteCat }) => {
  const [isRendered, setIsRendered] = useState(false)
  const { id } = useParams()
  const cat = cats.find((catObject) => catObject.id === +id)
  const handleDelete = () => {
    deleteCat(cat.id)
  }

  useEffect(() => {
    setIsRendered(true)

    const backgroundPaths = [
      catCafe,
      stairKitties,
      streetKitties,
      flowerCat,
      roofKitties,
      tableKitties,
    ]

    const imagePromises = backgroundPaths.map((path) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = path
        img.onload = resolve
      })
    })
    Promise.all(imagePromises)
      .then(() => console.log("Background images loaded"))
      .catch((error) =>
        console.error("Error loading background images:", error)
      )

    return () => setIsRendered(false)
  }, [id])

  const getRandomIndex = () => {
    const backgroundPaths = [
      catCafe,
      stairKitties,
      streetKitties,
      flowerCat,
      roofKitties,
      tableKitties,
    ]
    const randomIndex = Math.floor(Math.random() * backgroundPaths.length)
    return backgroundPaths[randomIndex]
  }

  return isRendered ? (
    <div className="cat-profile-cont">
      <div className="left-half"></div>
      <img
        className={`background-image ${isRendered ? "slideOutLeft" : ""}`}
        src={getRandomIndex()}
        alt={`random background for ${cat.name}`}
      />
      <img
        className={`show-profile-image ${isRendered ? "slideOutLeft" : ""}`}
        src={cat.image}
        alt={`profile of ${cat.name}`}
      />
      <div className={`show-text ${isRendered ? "slideOutLeft" : ""}`}>
        <h1 style={{ fontSize: "5vh" }}>{cat.name}</h1>
        <p style={{ fontSize: "2.5vh" }}>
          <span style={{ fontWeight: "700" }}>Age:</span> {cat.age}
        </p>
        <p style={{ fontSize: "2.5vh" }}>
          <span style={{ fontWeight: "700" }}>{cat.name} Enjoys:</span>{" "}
          {cat.enjoys}
        </p>
        <div className="show-icons">
          <Link to="/cat-index">
            <FontAwesomeIcon className="show-icon" icon={faArrowLeft} />
          </Link>
          <Link to={`/cat-edit/${cat.id}`}>
            <FontAwesomeIcon className="show-icon" icon={faPenToSquare} />
          </Link>
          <Link to="/cat-index">
            <FontAwesomeIcon
              onClick={handleDelete}
              className="show-icon"
              icon={faTrash}
            />
          </Link>
        </div>
      </div>
    </div>
  ) : null
}

export default CatShow
