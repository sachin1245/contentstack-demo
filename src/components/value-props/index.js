import React from "react"
import Image from "../image-contentstack"
import "./styles.css"

const ValueProp = ({ data }) => {
  return (
    <>
      <div className="sp-learning-experience">
        <div className="learning-experience-img-wrp">
          <Image
            url={data.background.href}
            quality="50"
            format="'webpll'"
          ></Image>
        </div>
        <div className="learning-experience-info">
          <div className="section-title">{data.title}</div>
          <div className="l-e-info-wrp">
            {data.values.map((value, index) => (
              <div key={index} className="l-e-point-wrp">
                <div
                  className="l-e-point-img"
                  style={{
                    backgroundPositionX: `-${31 * index}px`,
                    backgroundImage: "url(" + value.value.image.href + ")",
                  }}
                ></div>
                <div className="l-e-point-info">
                  <h4 className="l-point-title">{value.value.title}</h4>
                  <div className="l-point-text">{value.value.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ValueProp
