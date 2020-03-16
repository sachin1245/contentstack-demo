const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentstackCourseLandingPage {
          edges {
            node {
              shortname
              id
              course_id
              url
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }
      console.log(result)
      // Resolve the paths to our template
      const coursePageTemplate = path.resolve("./src/templates/course.js")
      // Then for each result we create a page.
      result.data.allContentstackCourseLandingPage.edges.forEach(edge => {
        createPage({
          path: `/course/${edge.node.shortname}/`,
          component: slash(coursePageTemplate),
          context: {
            shortname: edge.node.shortname,
            id: edge.node.course_id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
