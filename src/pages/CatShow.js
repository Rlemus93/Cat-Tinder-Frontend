import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams()
  const cat = cats.find((catObject) => catObject.id === +id)
  const handleDelete = () => {
    deleteCat(cat.id)
  }
  return (
    <div className="cat-profile-cont">
      <Row>
        <Col className="left-show-col" md={6}>
          <img
            className="show-image"
            src={cat.image}
            alt={`profile of ${cat.name}`}
          />
          <h1>{cat.name}</h1>
          <p>Age {cat.age}</p>
          <p>
            {cat.name} enjoys {cat.enjoys}
          </p>
          <Link to={`/cat-edit/${cat.id}`}>
            <button> Edit </button>
          </Link>
          <Link to={`/cat-index`}>
            <button>Back</button>
            <button onClick={handleDelete}>Delete</button>
          </Link>
        </Col>
        <Col md={6}></Col>
      </Row>
    </div>
  )
}

export default CatShow
