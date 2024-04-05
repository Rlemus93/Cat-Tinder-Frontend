import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from "react"

const App = () => {
  const [cats, setCats] = useState([])
  useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    try {
      const getResponse = await fetch("http://localhost:3000/cats")
      if (!getResponse.ok) {
        throw new Error("Error on the get request for cats")
      }
      const getResult = await getResponse.json()
      setCats(getResult)
    } catch (error) {
      alert("Cat-astrophe! something went wrong:", error.message)
    }
  }

  const createNewCat = async (catProfile) => {
    try {
      const postResponse = await fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catProfile),
      })
      if (!postResponse.ok) {
        throw new Error("Error on the post request for cats")
      }
      await postResponse.json()
      getCats()
    } catch (error) {
      alert("Cat-astrophe! something went wrong:", error.message)
    }
  }

  const updateCat = async (cat, id) => {
    try {
      const patchResponse = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cat),
      })
      if (!patchResponse.ok) {
        throw new Error("Error on the post request for cats")
      }
      await patchResponse.json()
      getCats()
    } catch (error) {
      alert("Cat-astrophe! something went wrong:", error.message)
    }
  }

  const deleteCat = async (id) => {
    try {
      const deleteResponse = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE",
      })
      if (!deleteResponse.ok) {
        throw new Error("Error on the post request for cats")
      }
      getCats()
    } catch (error) {
      alert("Cat-astrophe! something went wrong:", error.message)
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cat-index/" element={<CatIndex cats={cats} />} />
        <Route
          path="cat-show/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
        <Route
          path="cat-new"
          element={<CatNew createNewCat={createNewCat} />}
        />
        <Route
          path="cat-edit/:id"
          element={<CatEdit cats={cats} updateCat={updateCat} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
