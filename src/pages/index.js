import React from "react"
import Layout from "../components/layout"
import CourseOverview from "../components/overview-section"
import ValueProps from "../components/value-props"
import HeroBanner from "../components/Hero-Banner"

const button = {
  buttonText: "Apply Now",
  color: "navy",
  buttonType: "submit",
}

const rating = {
  ratingValue: 5,
  awardLogo: "",
}

const IndexPage = () => (
  <Layout>
    <HeroBanner></HeroBanner>
    <CourseOverview></CourseOverview>
    <ValueProps></ValueProps>
  </Layout>
)
export default IndexPage
