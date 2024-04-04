import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap"
import { Link } from "react-router-dom";

const CatShow = ({ cats }) => {
  const { id } = useParams();
  const cat = cats.find((catObject) => catObject.id === +id);
  return (
    <div className="">
      <h1> Meet {cat.name}</h1>
      <p>Age {cat.age}</p>
      <p>
        {cat.name} enjoys {cat.enjoys}
      </p>
      <img
        className="show-image"
        src={cat.image}
        alt={`profile of ${cat.name}`}
      />
      <Link to={`/cat-edit/${cat.id}`}>
        <Button> Edit </Button>
      </Link>
      <Link to={`/cat-index`}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default CatShow;
