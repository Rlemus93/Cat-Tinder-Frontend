import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import NotFound from "./pages/NotFound";
import mockCats from "./mockCats";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const App = () => {
  const [cats, setCats] = useState(mockCats);

  const createNewCat = (catData) => {
    console.log(catData);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cat-index/" element={<CatIndex cats={cats} />} />
        <Route path="cat-show/:id" element={<CatShow cats={cats} />} />
        <Route
          path="cat-new"
          element={<CatNew createNewCat={createNewCat} />}
        />
        <Route path="cat-edit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
