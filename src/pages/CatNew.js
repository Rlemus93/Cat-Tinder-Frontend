import React, { useState } from "react"
import { Form, Row, Col, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import AvatarEditor from "react-avatar-editor"

const CatNew = ({ createNewCat }) => {
  const [imageFile, setImageFile] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

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
      <h2>Let's Meet Your Cat</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Enter Your Cat's Name</Label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Name is required</span>}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="age">Enter Your Cat's Age</Label>
              <input
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
            id="image"
            name="image"
            type="text"
            className="form-control"
            onChange={(e) => setImageFile(e.target.files[0])}
            {...register("image", { required: true })}
          />
          {errors.image && <span>Image is required</span>}
        </FormGroup>
        {imageFile && (
          <AvatarEditor
            image={imageFile}
            width={100}
            height={100}
            border={50}
            borderRadius={50}
            onCrop={(blob) => setCroppedImage(blob)}
            style={{ marginBottom: "20px" }}
          />
        )}
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </Form>
    </>
  )
}

export default CatNew
