import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SpoilerButton from "../components/SpoilerButton"
import ScoreTable from "../components/ScoreTable"
import ScoreFootnotes from "../components/ScoreFootnotes"
import ResultsTable from "../components/ResultsTable"
import ImageHeader from "../components/ImageHeader"

export default function ScorePage({ data, pageContext }) {
  const { backgroundColor, name } = pageContext
  const notes = data.scores.nodes
    .map(node => node.days.map(day => day.notes))
    .flat()
    .filter(Boolean)

  return (
    <Layout
      currentGame={name}
      backgroundColor={backgroundColor}
      navButtons={<SpoilerButton />}
    >
      <ImageHeader data={data.gameImage} />
      <ScoreTable data={data.scores.nodes} notes={notes} />
      <ResultsTable data={data.scores.nodes} />
      <ScoreFootnotes notes={notes} />
    </Layout>
  )
}

export const query = graphql`
  query($image: String!, $week: String!) {
    scores: allScoreCsv(
      filter: { week: { eq: $week } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        id
        name
        days {
          score
          place
          youtube
          notes
        }
      }
    }
    gameImage: file(relativePath: { eq: $image }) {
      publicURL
      childImageSharp {
        fixed(width: 840) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
