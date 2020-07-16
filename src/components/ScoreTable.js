import React from "react"
import { Table } from "react-bootstrap"

import Score from "./Score"
import ViewsyncLink from "./ViewsyncLink"

const ScoreTable = ({ data, notes }) => {
  let rows = []
  for (let day = 0; day < 7; day++) {
    rows.push(
      <tr key={day}>
        <th scope="row">
          <ViewsyncLink data={data} day={day} />
        </th>
        {data.map(row => (
          <Score key={row.id} day={row.days[day]} allNotes={notes} />
        ))}
      </tr>
    )
  }

  return (
    <Table variant="dark" className="results">
      <thead>
        <tr>
          <th scope="col">Viewsync</th>
          {data.map(score => (
            <th scope="col" key={score.id}>
              {score.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default ScoreTable
