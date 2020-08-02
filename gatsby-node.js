const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getProject {
      projects: allAirtable {
        nodes {
          data {
            slug
          }
        }
      }
    }
  `)
  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.data.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: project.data.slug,
      },
    })
  })
}
