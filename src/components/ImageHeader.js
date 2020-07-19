import React from "react"
import Img from "gatsby-image"

const ImageHeader = ({ data, alt }) => {
  const { publicURL, childImageSharp } = data

  return (
    <div className="mx-auto">
      {childImageSharp ? (
        <Img fluid={childImageSharp.fluid} className="img-fluid" alt={alt} />
      ) : (
        <img src={publicURL} className="img-fluid" alt={alt} />
      )}
    </div>
  )
}

ImageHeader.defaultProps = {
  alt: "Game Logo",
}

export default ImageHeader
