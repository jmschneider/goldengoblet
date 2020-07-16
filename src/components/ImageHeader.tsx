import React from "react"
import Img from "gatsby-image"

const ImageHeader = ({ data }) => {
  const { publicURL, childImageSharp } = data

  return (
    <div className="d-flex justify-content-center">
      {childImageSharp ? (
        <Img fixed={childImageSharp.fixed} className="img-fluid" />
      ) : (
        <img src={publicURL} className="img-fluid" />
      )}
    </div>
  )
}

export default ImageHeader
