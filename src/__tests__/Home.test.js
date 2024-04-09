// import React from "react"
// import { render, screen, waitFor } from "@testing-library/react"
// import { BrowserRouter } from "react-router-dom"
// import Home from "../pages/Home"
// import heroImage from "../assets/hero-image.png"

// test("renders the Home component", async () => {
//   render(
//     <BrowserRouter>
//       <Home />
//     </BrowserRouter>
//   )
//   expect(screen.getByText("Loading...")).toBeInTheDocument()
//   await waitFor(
//     () => expect(screen.getByText("CAT TINDER")).toBeInTheDocument(),
//     {
//       timeout: 4000,
//     }
//   )

//   const homeSubTitle = screen.getByText("Find Your Purrfect Match")
//   expect(homeSubTitle).toBeInTheDocument()

//   const homeHeroImage = screen.getByAltText("cat from neck up")
//   expect(homeHeroImage).toBeInTheDocument()
//   expect(homeHeroImage).toHaveAttribute("src", heroImage)

//   const homeHeroImageShadow = screen.getByAltText("cat from neck up shadow")
//   expect(homeHeroImageShadow).toBeInTheDocument()
//   expect(homeHeroImageShadow).toHaveAttribute("src", heroImage)
// })
