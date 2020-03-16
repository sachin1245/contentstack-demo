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
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hello There</h1>
      <p>Welcome to my awesome blog</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: "0 auto 1.45rem",
          }}
        >
          <Image />
        </div>
      </div>
      <Link to="/blogposts/">View all posts</Link>
    </div> */}
    {/* <Hero
      button={button}
      rating={rating}
      headerSummary="test matching"
      headerText="test matching"
      description="test description"
    ></Hero> */}
    <HeroBanner></HeroBanner>
    <CourseOverview></CourseOverview>
    <ValueProps></ValueProps>
  </Layout>
)
export default IndexPage
