import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./style.css"

// const OverviewSection = data => (
//   <StaticQuery
//     query={graphql`
//       query MyPageQuery {
//         # allDatoCmsCourseOverview {
//         #   edges {
//         #     node {
//         #       points {
//         #         text
//         #         title
//         #         image
//         #         course
//         #       }
//         #       sprites
//         #       title
//         #       subtitle
//         #     }
//         #   }
//         # }

//         allContentstackCourseOverview {
//           edges {
//             node {
//               title
//               subtitle
//               points {
//                 text
//                 course
//                 title
//                 image {
//                   title
//                   href
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       data = data.allContentstackCourseOverview.edges[0].node
//       return (
//         <>
//           <div className="sp-course-overview">
//             <div className="c-o-title section-title">{data.title}</div>
//             <p className="c-o-subtitle section-subtitle">{data.subtitle}</p>
//             <div className="c-o-points-wrp">
//               {data.points.map((point, index) => (
//                 <div key={index} className="c-o-point">
//                   <div className="c-o-point-img-wrp">
//                     <div
//                       className="c-o-point-img"
//                       style={{
//                         backgroundPositionX: `-${71 * index}px`,
//                         backgroundImage: "url(" + point.image.href + ")",
//                       }}
//                     ></div>
//                   </div>
//                   <h4 className="c-o-point-title">{point.title}</h4>
//                   <div className="c-o-point-desc">{point.text}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )
//     }}
//   />
// )

const OverviewSection = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className="sp-course-overview">
        <div className="c-o-title section-title">{data.title}</div>
        <p className="c-o-subtitle section-subtitle">{data.subtitle}</p>
        <div className="c-o-points-wrp">
          {data.points.map((point, index) => (
            <div key={index} className="c-o-point">
              <div className="c-o-point-img-wrp">
                <div
                  className="c-o-point-img"
                  style={{
                    backgroundPositionX: `-${71 * index}px`,
                    backgroundImage: "url(" + point.image.href + ")",
                  }}
                ></div>
              </div>
              <h4 className="c-o-point-title">{point.title}</h4>
              <div className="c-o-point-desc">{point.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default OverviewSection
