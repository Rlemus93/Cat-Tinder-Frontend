import React from "react";
import { Card, CardBody, CardTitle, Button} from "reactstrap"
import { Link } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <div className="cat-index-cont">
      <h1 className="index-title">Meet All the Cats</h1>
      {cats.map((cat) => {
        return (
          <Card
          key={cat.id}
            style={{
              width: "18rem",
            }}
          >
            <img alt={`profile of ${cat.name}`} src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <Link to={`/cat-show/${cat.id}`}>
              <Button>See More of Me</Button>
              </Link>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default CatIndex;
