import React from "react"
import { Form, Row, Col, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  let currentCat = cats.find((catObject) => catObject.id === +id)

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (catData) => {
    console.log(catData)
    updateCat(catData, currentCat.id)
    navigate(`/cat-show/${currentCat.id}`)
  }

  return (
    <div className="edit-cont">
      <h1 className="cat-edit-title">Edit Your Cat</h1>
      <Form className="form-cont" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label style={{ width: "15dvw" }} for="name">
                Change Cat's Name
              </Label>
              <input
                style={{
                  width: "10dvw",
                  marginLeft: "2.3vw",
                }}
                id="name"
                name="name"
                type="text"
                defaultValue={currentCat.name}
                className="form-control"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="error-message form-validations">Name is required</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="age">Change Cat's Age</Label>
              <input
                style={{
                  width: "5dvw",
                  marginLeft: "3vw",
                }}
                id="age"
                name="age"
                type="number"
                defaultValue={currentCat.age}
                min="0"
                className="form-control"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <span className="error-message form-validations">Age is required</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="enjoys">What does your cat enjoy doing?</Label>
          <p style={{color:"#999"}}>{"(must be 10 characters long)"}</p>
          <input
            style={{
              width: "50dvw",
            }}
            id="enjoys"
            name="enjoys"
            type="text"
            defaultValue={currentCat.enjoys}
            className="form-control"
            {...register("enjoys", { required: true })}
          />
          {errors.enjoys && (
            <span className="error-message form-validations">Enjoys is required</span>
          )}
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
            defaultValue={currentCat.image}
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="error-message form-validations">Image is required</span>
          )}
        </FormGroup>
        <div className="centering-content">
          <button
            style={{ marginRight: "1vw", backgroundColor: "#4BCCFF" }}
            onClick={handleSubmit}
            className="form-buttons"
          >
            Submit
          </button>
          <Link to={`/cat-show/${currentCat.id}`}>
            <button
              style={{ backgroundColor: "#828CA2" }}
              className="form-buttons"
            >
              Cancel
            </button>
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default CatEdit
