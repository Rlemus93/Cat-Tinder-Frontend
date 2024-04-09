import React, { useState, useEffect } from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const CatIndex = ({ cats }) => {
  const [likedCats, setLikedCats] = useState([])

  const toggleLike = (catId) => {
    if (likedCats.includes(catId)) {
      setLikedCats(likedCats.filter((id) => id !== catId))
    } else {
      setLikedCats([...likedCats, catId])
    }
  }

  useEffect(() => {
    const storedLikedCats = JSON.parse(localStorage.getItem("likedCats"))
    if (storedLikedCats) {
      setLikedCats(storedLikedCats)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("likedCats", JSON.stringify(likedCats))
  }, [likedCats])

  return (
    <div className="index-cont">
      <h1 className="index-title">Meet All the Cats</h1>
      <div className="cat-index-cards">
        {cats.map((cat) => {
          const isLiked = likedCats.includes(cat.id)
          return (
            <Card
              style={{
                height: "34dvh",
                width: "15dvw",
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "0.75vw 1.5vh 1px rgba(0, 0, 0, 0.5)",
                borderRadius: "5vh",
                position: "relative",
              }}
              key={cat.id}
            >
              <div className="profile-image-cont">
                <div className="upper-card-background"></div>
                <img
                  className="profile-image"
                  alt={`profile of ${cat.name}`}
                  src={cat.image}
                />
              </div>
              <CardBody
                style={{
                  textAlign: "center",
                  padding: "2vh",
                  backgroundColor: "#fff",
                  borderBottomLeftRadius: "5vh",
                  borderBottomRightRadius: "5vh",
                }}
              >
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <div className="index-heart-and-btn">
                  <FontAwesomeIcon
                    icon={isLiked ? solidHeart : regularHeart}
                    onClick={() => toggleLike(cat.id)}
                    className="heart-icon"
                  />

                  <Link to={`/cat-show/${cat.id}`}>
                    <button className="see-more-button">
                      {/* <FontAwesomeIcon
                        style={{ height: "2vh", marginRight: "0.5vw" }}
                        className="show-icon arrow-right"
                        icon={faArrowRight}
                      /> */}
                      <span>See More </span>
                    </button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
