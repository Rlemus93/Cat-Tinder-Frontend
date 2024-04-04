import React from "react";
import { Form, Row, Col, FormGroup, Label, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams();
  let currentCat = cats.find((catObject) => catObject.id === +id);
  console.log(currentCat.id);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (catData) => {
    updateCat(catData, currentCat.id);
    navigate(`/cat-show/${currentCat.id}`);
  };

  return (
    <>
      <h2>Edit Your Cat</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Enter Your Cat's Name</Label>
              <input
                id="name"
                name="name"
                type="text"
                // defaultValue={currentCat.name}
                className="form-control"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="form-validations">Name is required</span>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="age">Enter Your Cat's Age</Label>
              <input
                id="age"
                name="age"
                type="number"
                // defaultValue={currentCat.age}
                min="0"
                className="form-control"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <span className="form-validations">Age is required</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="enjoys">What does your cat enjoy doing?</Label>
          <input
            id="enjoys"
            name="enjoys"
            type="text"
            defaultValue={currentCat.enjoys}
            className="form-control"
            {...register("enjoys", { required: true })}
          />
          {errors.enjoys && (
            <span className="form-validations">Enjoys is required</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <input
            id="image"
            name="image"
            type="text"
            // defaultValue={currentCat.image}
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="form-validations">Image is required</span>
          )}
        </FormGroup>
        <div className="centering-content">
          <Button onClick={handleSubmit} className="nav-button">
            Submit
          </Button>
          <Link to={`/cat-show/${currentCat.id}`}>
            <Button>Cancel</Button>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default CatEdit;
