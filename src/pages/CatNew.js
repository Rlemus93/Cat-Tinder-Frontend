import React from "react"
import { Form, Row, Col, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const CatNew = ({ createNewCat }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (catData) => {
    createNewCat(catData)
    navigate("/cat-index")
  }

  return (
    <>
      <h1 className="cat-new-title">Let's Meet Your Cat</h1>
      <Form className="form-cont" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Cat's Name</Label>
              <input
              style={{
                width: "10dvw"
              }}
                id="name"
                name="name"
                type="text"
                className="form-control"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Name is required</span>}
            </FormGroup>
          </Col>
          <Col md={6} >
            <FormGroup>
              <Label for="age">Cat's Age</Label>
              <input
              style={{
                width: "5dvw",
                marginLeft: "2vw",
              }}
                id="age"
                name="age"
                type="number"
                min="0"
                className="form-control"
                {...register("age", { required: true })}
              />
              {errors.age && <span>Age is required</span>}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="enjoys">What does your cat enjoy doing?</Label>
          <input
          style={{
            width: "50dvw",
          }}
            id="enjoys"
            name="enjoys"
            type="text"
            className="form-control"
            {...register("enjoys", { required: true })}
          />
          {errors.enjoys && <span>Enjoys is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <input
          style={{
            width: "50dvw",
          }}
            id="image"
            name="image"
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && <span>Image is required</span>}
        </FormGroup>
        <div>
          <button style={{marginRight: "1vw", backgroundColor:"#4BCCFF"}} className="form-buttons" onClick={handleSubmit}>Submit</button>
          <Link to={"/cat-index"}>
            <button style={{backgroundColor: "#828CA2",}} className="form-buttons">Cancel</button>
          </Link>
        </div>
      </Form>
    </>
  )
}

export default CatNew
