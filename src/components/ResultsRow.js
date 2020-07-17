import React, { useContext } from "react"
import SpoilerContext from "../context/SpoilerContext"

const RESULTS_LABELS = {
  first: "1st Finishes",
  second: "2nd Finishes",
  third: "3rd Finishes",
}

const ResultsRow = ({ data, place }) => {
  const { showSpoilers } = useContext(SpoilerContext)
  return (
    <tr>
      <th scope="row">{RESULTS_LABELS[place]}</th>
      {data.map(score => (
        <td key={score.id}>
          {showSpoilers ? (
            <span className={place}>
              {score.days.filter(day => day.place === place).length}
            </span>
          ) : (
            "Spoilers"
          )}
        </td>
      ))}
    </tr>
  )
}

export default ResultsRow
