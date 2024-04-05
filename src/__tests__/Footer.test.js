import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

test("renders the Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  const ryanLink = screen.getByText("Ryan Lemus")
  const amirLink = screen.getByText("Amir Jackson")
  const morganLink = screen.getByText("Morgan Smith")

  expect(ryanLink).toHaveAttribute("href", "https://github.com/Rlemus93")
  expect(amirLink).toHaveAttribute("href", "https://github.com/Rashadjaxon")
  expect(morganLink).toHaveAttribute("href", "https://github.com/smorgannicole")
})
