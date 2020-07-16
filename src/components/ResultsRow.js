import React from "react"

const RESULTS_LABELS = {
  first: "1st Finishes",
  second: "2nd Finishes",
  third: "3rd Finishes",
}

const ResultsRow = ({ data, place }) => {
  return (
    <tr>
      <th scope="row">{RESULTS_LABELS[place]}</th>
      {data.map(score => (
        <td className={place} key={score.id}>
          {score.days.filter(day => day.place === place).length}
        </td>
      ))}
    </tr>
  )
}

export default ResultsRow
