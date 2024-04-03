import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"
import notFoundImage from "../assets/not-found-image.png"

test("renders the NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const notFoundHeroImage = screen.getByAltText(
    'underneath text reading "404 error", an animated orange tabby has its head stuck in a cardboard box. underneath the cat it reads "Houston, we have a problem"'
  )
  expect(notFoundHeroImage).toBeInTheDocument()
  expect(notFoundHeroImage).toHaveAttribute("src", notFoundImage)
})