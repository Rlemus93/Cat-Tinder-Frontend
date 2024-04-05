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
            <div className="index-card" key={cat.id}>
              <Card
                style={{
                  width: "18rem",
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
                    <Button>See More of Me</Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
