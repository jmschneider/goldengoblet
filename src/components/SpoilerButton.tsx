import React, { useContext } from "react"
import { Button } from "react-bootstrap"
import SpoilerContext from "../context/SpoilerContext"

const SpoilerButton = () => {
  const { toggleSpoilers } = useContext(SpoilerContext)
  return (
    <Button variant="warning" onClick={toggleSpoilers}>
      Toggle Spoilers
    </Button>
  )
}

export default SpoilerButton
