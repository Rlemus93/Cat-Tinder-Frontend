import React, { useState, useEffect } from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"

const CatIndex = ({ cats }) => {
  const [likedCats, setLikedCats] = useState([])
  const [isRendered, setIsRendered] = useState(false)
  const [search, setSearch] = useState("")
  const [ageFilter, setAgeFilter] = useState("")
  const [ageOptions, setAgeOptions] = useState([])
  const [filteredCats, setFilteredCats] = useState([])

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

  useEffect(() => {
    setIsRendered(true)
    setFilteredCats(
      cats.filter((cat) => {
        const nameMatch = cat.name.toLowerCase().includes(search.toLowerCase())
        const ageMatch = !ageFilter || cat.age === parseInt(ageFilter)
        return nameMatch && ageMatch
      })
    )
    return () => setIsRendered(false)
  }, [cats, search, ageFilter])

  useEffect(() => {
    const ages = [...new Set(cats.map((cat) => cat.age))]
    ages.sort((a, b) => a - b)
    setAgeOptions(ages)
  }, [cats])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleAgeFilterChange = (e) => {
    setAgeFilter(e.target.value)
  }

  if (!isRendered) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="index-cont">
      <h1 className="index-title">Meet All the Cats</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Cats..."
          value={search}
          onChange={handleSearchChange}
          style={{
            borderRadius: "1vh",
            border: "none",
            outline: "none",
            height: "3.5vh",
          }}
        />
        <div className="age-filter">
          <select
            value={ageFilter}
            onChange={handleAgeFilterChange}
            style={{
              borderRadius: "1vh",
              border: "none",
              outline: "none",
              height: "3.5vh",
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            <option value="">Filter by Age...</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age} Year{age !== 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="cat-index-cards">
        {filteredCats.map((cat) => {
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
