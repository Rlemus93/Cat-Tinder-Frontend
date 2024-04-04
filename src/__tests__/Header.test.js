import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import catTinderLogo from "../assets/cat-tinder-logo.png";

test("renders the Header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const headerCatTinderLogo = screen.getByAltText(
    "cat tinder logo: an animated grey kitty with yellow sunglasses"
  );
  expect(headerCatTinderLogo).toBeInTheDocument();
  expect(headerCatTinderLogo).toHaveAttribute("src", catTinderLogo);
  expect(
    screen.getByRole("link", {
      name: "cat tinder logo: an animated grey kitty with yellow sunglasses",
    })
  ).toHaveAttribute("href", "/");

  const linkToCatIndex = screen.getByText("Meet All the Cats");
  expect(linkToCatIndex).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Meet All the Cats" })
  ).toHaveAttribute("href", "/cat-index");

  const linkToCatNew = screen.getByText("Add a Cat");
  expect(linkToCatNew).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Add a Cat" })).toHaveAttribute(
    "href",
    "/cat-new"
  );

  const linkToCatAdoption = screen.getByText("Adopt a Cat");
  expect(linkToCatAdoption).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Adopt a Cat" })).toHaveAttribute(
    "href",
    "https://www.petfinder.com/search/cats-for-adoption/us"
  );
});
