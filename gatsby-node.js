const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GamesQuery {
      allGamesCsv(sort: { order: DESC, fields: week }) {
        nodes {
          week
          name
          slug
          image
          theme
        }
      }
    }
  `)
  createPage({
    path: "/",
    component: path.resolve(`./src/templates/ScorePage.js`),
    context: {
      week: result.data.allGamesCsv.nodes[0].week,
      name: result.data.allGamesCsv.nodes[0].name,
      slug: result.data.allGamesCsv.nodes[0].slug,
      image: result.data.allGamesCsv.nodes[0].image,
      theme: result.data.allGamesCsv.nodes[0].theme,
    },
  })
  result.data.allGamesCsv.nodes.forEach(
    ({ week, name, slug, image, theme }) => {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/ScorePage.js`),
        context: {
          week,
          name,
          slug,
          image,
          theme,
        },
      })
    }
  )
}
