import React from "react"
import notFoundImage from "../assets/not-found-image.png"

const NotFound = () => {
  return (
    <div className="not-found-cont">
      <img
        className="not-found-image"
        src={notFoundImage}
        alt='underneath text reading "404 error", an animated orange tabby has its head stuck in a cardboard box. underneath the cat it reads "Houston, we have a problem"'
      />
    </div>
  )
}

export default NotFound
