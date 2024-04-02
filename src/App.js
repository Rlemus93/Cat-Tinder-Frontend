import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import NotFound from "./pages/NotFound"
import mockCats from "./mockCats"
import { Routes, Route } from "react-router-dom"
import React, { useState } from "react"

const App = () => {
  const [cats, setCats] = useState(mockCats)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cat-edit" element={<CatEdit />} />
        <Route path="cat-index" element={<CatIndex />} />
        <Route path="cat-new" element={<CatNew />} />
        <Route path="cat-show" element={<CatShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
