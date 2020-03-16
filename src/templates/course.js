import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ValueProps from "../components/value-props"
import HeroBanner from "../components/Hero-Banner"
import OverviewSection from "../components/overview-section"
const CoursePage = ({ data }) => {
  const coursePage = data.contentstackCourseLandingPage
  return (
    <>
      <HeroBanner data={coursePage.hero_banner[0]}></HeroBanner>
      <OverviewSection data={coursePage.course_overview[0]}></OverviewSection>
      <ValueProps data={coursePage.value_props[0]}> </ValueProps>
    </>
  )
}
export default CoursePage
export const query = graphql`
  query($shortname: String!) {
    contentstackCourseLandingPage(shortname: { eq: $shortname }) {
      title
      id
      course_overview {
        title
        subtitle
        points {
          text
          course
          title
          image {
            title
            href
          }
        }
      }
      hero_banner {
        title
        subtitle
        course_description
        background_image {
          title
          href
        }
        button {
          link {
            title
            href
          }
          button_text
        }
      }
      value_props {
        title
        background {
          title
          href
        }
        values {
          course
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
`
