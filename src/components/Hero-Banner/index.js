import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Button from "../Button"
import "./styles.css"

// const HeroBanner = data => (
//   <StaticQuery
//     query={graphql`
//       query HeroBannerQuery {
//         allContentstackHeroBanner {
//           edges {
//             node {
//               title
//               subtitle
//               course_description
//               background_image {
//                 title
//                 href
//               }
//               button {
//                 link {
//                   title
//                   href
//                 }
//                 button_text
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       data = data.allContentstackHeroBanner.edges[0].node
//       console.log(data)
//       const {
//         title,
//         subtitle,
//         course_description,
//         background_image,
//         button,
//       } = data
//       return (
//         <>
//           <div
//             className="hero-banner-container"
//             style={{
//               background: `url('${background_image.href}')`,
//               backgroundColor: "black",
//             }}
//           >
//             <div className="workshop-points-wrp">{course_description}</div>
//             <h1 className="workshop-title">{title}</h1>
//             <h2 className="workshop-subtitle">{subtitle}</h2>
//             <div className="application-cta">
//               <Button children={button[0].button_text}></Button>
//             </div>
//           </div>
//         </>
//       )
//     }}
//   />
// )

const HeroBanner = ({ data }) => {
  const { title, subtitle, course_description, background_image, button } = data
  return (
    <>
      <div
        className="hero-banner-container"
        style={{
          background: `url('${background_image.href}')`,
          backgroundColor: "black",
        }}
      >
        <div className="workshop-points-wrp">{course_description}</div>
        <h1 className="workshop-title">{title}</h1>
        <h2 className="workshop-subtitle">{subtitle}</h2>
        <div className="application-cta">
          <Button children={button[0].button_text}></Button>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
