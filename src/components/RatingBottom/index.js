import clsx from "clsx"
import React from "react"
import { graphql } from "gatsby"
import Button from "../Button"
import styles from "./style.module.css"

export default ({ button, rating, headerText, headerSummary, description }) => {
  // const {
  //   buttonText,
  //   color: { color: buttonColor },
  //   type: buttonType,
  // } = button
  const { ratingValue, awardLogo } = rating
  return (
    <div className={styles.wrapper}>
      <p className={clsx(styles.alignCenter, styles.headerSummary)}>
        {headerSummary}
      </p>
      <h1 className={clsx(styles.alignCenter, styles.header)}>{headerText}</h1>
      <p className={clsx(styles.alignCenter, styles.description)}>
        {description}
      </p>
      {/* <div className={clsx(styles.alignCenter, styles.buttonWrapper)}>
        <Button color={buttonColor} type={buttonType}>
          {buttonText}
        </Button>
      </div> */}
      <div className={clsx(styles.alignCenter, styles.ratingSection)}>
        <div className={styles.imageWrapper}>
          <img src={awardLogo} className={styles.image} alt="Award Logo" />
        </div>
        <div className={styles.ratingWrapper}>
          <div className={styles.rating}>
            <span>{ratingValue} of 5</span>
            <img
              alt="rating logo"
              src="https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto,w_80/v1/homepage-assets/career-tracks/sp-uxc/hero-banner/sp-uxc-stars.png"
            />
          </div>
          <div className={styles.ratingText}>
            Student rating on{" "}
            <a href="https://www.switchup.org/bootcamps/springboard">
              Switch up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
