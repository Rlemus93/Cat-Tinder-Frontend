import React, { useState, useEffect } from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
// imported heart icons from font awesome (you will need to run "yarn" in terminal)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

const CatIndex = ({ cats }) => {
  // will need to store liked cats in an arr
  const [likedCats, setLikedCats] = useState([])

  // this fxn is being triggered by an onClick on like button
  const toggleLike = (catId) => {
    if (likedCats.includes(catId)) {
      // this is for if user hearted a cat and wants to unheart it
      // creates new array that excludes the catId user "unhearted"
      setLikedCats(likedCats.filter((id) => id !== catId))
    } else {
      // if likedCats state arr doesnt already contain the id of cat whose heart was just clicked, the cat will be added to likedCats state arr and appear "liked"
      setLikedCats([...likedCats, catId])
    }
  }

  // using local storage so user can refresh page and likes/unlikes will be remembered locally on their own computer
  // useEffect so if anything component related changes on the screen, local storage will be checked to see if any more cats were added/removed
  useEffect(() => {
    // creating variable to retrieve all our likedCats from local storage
    const storedLikedCats = JSON.parse(localStorage.getItem("likedCats"))
    // if the array isnt empty, the statement returns "truthy"
    if (storedLikedCats) {
      // it resets state to reflect any potential updates
      setLikedCats(storedLikedCats)
    }
  }, [])

  // the useEffect here is slightly different than the one used above...
  // check how the arr on this useEffect isn't empty like above
  // this is bc this useEffect only runs when a change is detected in likedCats
  useEffect(() => {
    // this is to update local storage
    // it's taking the cats from our state variable likedCats and putting it into JSON (strings) the same way we do with our backend database
    // then it stores it in local storage under the key "likedCats"
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
                    <button className="buttons">See More</button>
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
