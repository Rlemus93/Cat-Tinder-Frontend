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
  const footerTextContent = screen.getByText(
    /2024 Ryan Lemus | Amir Jackson | Morgan Smith/
  )
  expect(footerTextContent).toBeInTheDocument()
})
