import React from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
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
                  height: "34rem",
                  width: "25rem",
                  borderRadius: "60px",
                  border: "12px solid #fff",
                  backgroundColor: "transparent",
                  color: "white",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                  marginLeft: "3rem",
                  boxShadow: "0.75vw 1.5vh 1px rgba(0, 0, 0, 0.5)"
                }}
              >
                <img
                  className="profile-image"
                  alt={`profile of ${cat.name}`}
                  src={cat.image}
                />
                <CardBody>
                  <CardTitle tag="h5">{cat.name}</CardTitle>
                  <Link to={`/cat-show/${cat.id}`}>
                    <Button
                      style={{
                        color: "white",
                        marginTop: "2rem",
                      }}
                    >
                      See More of Me
                    </Button>
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
