import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((catObject) => catObject.id === +id)
  return (
      <div className="">
      <h1> Meet {cat.name}</h1>
      <p>Age {cat.age}</p>
      <p>{cat.name} enjoys {cat.enjoys}</p>
      <img src={cat.image} alt={`profile of ${cat.name}`} />
      </div>
  )
}

export default CatShow