import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import heroImage from "../assets/hero-image.png"

test("renders the Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const homeTitle = screen.getByText("CAT TINDER")
  expect(homeTitle).toBeInTheDocument()

  const homeSubTitle = screen.getByText("Find Your Purrfect Match")
  expect(homeSubTitle).toBeInTheDocument()

  const homeHeroImage = screen.getByAltText("grey cat with glasses on")
  expect(homeHeroImage).toBeInTheDocument()
  expect(homeHeroImage).toHaveAttribute("src", heroImage)
})
