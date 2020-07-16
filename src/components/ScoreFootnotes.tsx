import React from "react"

const ScoreFootnotes = ({ notes }) => (
  <div id="footnote">
    {notes.map((note, index) => (
      <div key={index}>
        {"*".repeat(index + 1)} {note}
      </div>
    ))}
  </div>
)

export default ScoreFootnotes
