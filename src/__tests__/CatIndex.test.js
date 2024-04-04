import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CatIndex from "../pages/CatIndex";
import mockCats from "../mockCats";

test("renders the CatIndex component", () => {
  render(
    <BrowserRouter>
      <CatIndex cats={mockCats} />
    </BrowserRouter>
  );
  const indexTitle = screen.getByText("Meet All the Cats");
  expect(indexTitle).toBeInTheDocument();

  mockCats.forEach((cat) => {
    const catName = screen.getByText(cat.name);
    expect(catName).toBeInTheDocument();

    const catImage = screen.getByAltText(`profile of ${cat.name}`);
    expect(catImage).toBeInTheDocument();
    expect(catImage).toHaveAttribute("src", cat.image);
  });
});
