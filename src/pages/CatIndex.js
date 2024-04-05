import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <div className="index-cont">
      <h1 className="index-title">Meet All the Cats</h1>
      <div className="cat-index-cards">
        {cats.map((cat) => {
          return (
            <Card
              style={{
                height: "34dvh",
                width: "15dvw",
                borderRadius: "5vh",
                border: "0.8dvh solid #fff",
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "0.75vw 1.5vh 1px rgba(0, 0, 0, 0.5)",
                position: "relative"
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
                }}
              >
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <Link to={`/cat-show/${cat.id}`}>
                  <button className="buttons">
                    See More
                  </button>
                </Link>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
