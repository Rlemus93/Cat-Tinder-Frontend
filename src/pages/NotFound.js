import React from "react"
import cat404 from "../assets/houston-404.png"

const NotFound = () => {
  return (
    <div className="houston-cont">
      <img className="houston-img" src={cat404} alt='underneath text reading "404 error", an animated orange tabby has its head stuck in a cardboard box. underneath the cat it reads "Houston, we have a problem"' />
    </div>
  )
}

export default NotFound