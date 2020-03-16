import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/RatingBottom"
import CourseOverview from "../components/overview-section"
import ValueProps from "../components/value-props"
import HeroBanner from "../components/Hero-Banner"
// import "./index.css";

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
