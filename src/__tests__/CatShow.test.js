// import React from "react"
// import { render, screen } from "@testing-library/react"
// import { MemoryRouter, Routes, Route } from "react-router-dom"
// import CatShow from "../pages/CatShow"
// import mockCats from "../mockCats"

// test("renders the CatShow component", () => {
//   render(
//     <MemoryRouter initialEntries={["/cat-show/1"]}>
//       <Routes>
//         <Route path="cat-show/:id" element={<CatShow cats={mockCats} />} />
//       </Routes>
//     </MemoryRouter>
//   )

//   const cat = mockCats.find((catObject) => catObject.id === 1)

//   const catName = screen.getByText(`${cat.name}`)
//   expect(catName).toBeInTheDocument()

//   const catAge = screen.getByText(`${cat.age}`)
//   expect(catAge).toBeInTheDocument()

//   const catEnjoys = screen.getByText(`${cat.name} Enjoys: ${cat.enjoys}`)
//   expect(catEnjoys).toBeInTheDocument()

//   const catImage = screen.getByAltText(`profile of ${cat.name}`)
//   expect(catImage).toBeInTheDocument()
//   expect(catImage).toHaveAttribute("src", cat.image)
// })
