import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Components from "../components"
const componentSchema = {
  course_overview: "CourseOverview",
  value_props: "ValueProp",
  hero_banner: "HeroBanner",
}
const CoursePage = ({ data }) => {
  const coursePage = data.contentstackCourseLandingPage

  const components = []
  coursePage.sections.map(value => {
    Object.keys(value).forEach(key => {
      if (value[key]) {
        const obj = {
          name: key,
          value: value[key],
        }
        components.push(obj)
      }
    })
  })

  return (
    <>
      {components.map((key, index) => (
        <WrapperComponent
          key={index}
          type={componentSchema[key.name]}
          data={key.value}
        />
      ))}
    </>
  )
}

export const WrapperComponent = ({ type, data }) => {
  const wrapper = React.createElement(Components[type], { data: data })
  return wrapper
}

export default CoursePage
export const query = graphql`
  query($shortname: String!) {
    contentstackCourseLandingPage(shortname: { eq: $shortname }) {
      title
      id
      sections {
        course_overview {
          title
          subtitle
          points {
            overview {
              title
              text
              image {
                title
                href
              }
            }
          }
        }
        hero_banner {
          header_text
          course_description
          background_color
          background_image {
            title
            href
          }
          subtitle
          button {
            button_text
            link {
              href
            }
            color
          }
        }
        value_props {
          title
          background {
            title
            href
          }
          values {
            value {
              text
              title
              text
              image {
                title
                href
              }
            }
          }
        }
      }
    }
  }
`
