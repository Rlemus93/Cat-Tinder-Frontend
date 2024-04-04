import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CatEdit from "../pages/CatEdit";
import mockCats from "../mockCats";

test("renders the CatNew component", () => {
  render(
    <MemoryRouter initialEntries={["/cat-edit/1"]}>
      <Routes>
        <Route path="cat-edit/:id" element={<CatEdit cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  );

  const newPageHeader = screen.getByText("Edit Your Cat");
  expect(newPageHeader).toBeInTheDocument();

  const catNameInput = screen.getByLabelText("Enter Your Cat's Name");
  expect(catNameInput).toBeInTheDocument();
  const catAgeInput = screen.getByLabelText("Enter Your Cat's Age");
  expect(catAgeInput).toBeInTheDocument();
  const catEnjoysInput = screen.getByLabelText(
    /What does your cat enjoy doing/
  );
  expect(catEnjoysInput).toBeInTheDocument();
  const catImageInput = screen.getByLabelText("Image URL");
  expect(catImageInput).toBeInTheDocument();

  const submitButton = screen.getByText("Submit");
  expect(submitButton).toBeInTheDocument();

  const cancelButton = screen.getByText("Cancel");
  expect(cancelButton).toBeInTheDocument();
});
