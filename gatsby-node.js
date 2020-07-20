const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GamesQuery {
      allGamesCsv {
        nodes {
          name
          slug
          image
          theme
        }
      }
    }
  `)
  result.data.allGamesCsv.nodes
    .reverse()
    .forEach(({ name, slug, image, theme }, index) => {
      if (index === 0) {
        createPage({
          path: "/",
          component: path.resolve(`./src/templates/ScorePage.js`),
          context: {
            name,
            slug,
            image,
            theme,
          },
        })
      }
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/ScorePage.js`),
        context: {
          name,
          slug,
          image,
          theme,
        },
      })
    })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type GamesCsv implements Node {
      scores: [ScoreCsv] @link(by: "slug", from: "slug")
    }

    type ScoreCsv implements Node {
      game: [GamesCsv] @link(by: "slug", from: "slug")
      youtube: [YoutubeCsv] @link(by: "name", from: "name")
    }
  `
  createTypes(typeDefs)
}
