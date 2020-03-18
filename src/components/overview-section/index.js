import React from "react"
import "./style.css"

const OverviewSection = ({ data }) => {
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
                    backgroundImage: "url(" + point.overview.image.href + ")",
                  }}
                ></div>
              </div>
              <h4 className="c-o-point-title">{point.overview.title}</h4>
              <div className="c-o-point-desc">{point.overview.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default OverviewSection
