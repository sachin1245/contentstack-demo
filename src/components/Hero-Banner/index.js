import React from "react"
import Button from "../Button"
import "./styles.css"

const HeroBanner = ({ data }) => {
  const {
    header_text,
    subtitle,
    course_description,
    background_image,
    button,
  } = data
  return (
    <>
      <div
        className="hero-banner-container"
        style={{
          background: `url('${background_image.href}')`,
          backgroundColor: "black",
          backgroundSize: "cover",
        }}
      >
        <div className="workshop-points-wrp">{course_description}</div>
        <h1 className="workshop-title">{header_text}</h1>
        <h2 className="workshop-subtitle">{subtitle}</h2>
        <div className="application-cta">
          <Button children={button[0].button_text}></Button>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
