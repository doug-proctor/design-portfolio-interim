import React from "react"
import styles from "./Heading.module.css"

export default function Heading(props) {
  const headingStyles = props.sm ? styles.headingSmall : styles.heading
  const wrapperStyles = props.centred
    ? `${styles.centred} ${styles.wrapper}`
    : styles.wrapper

  const renderSuper = () => {
    if (props.super) {
      return <h2 className={styles.super}>{props.super}</h2>
    }
    return null
  }

  const renderHeading = () => (
    <h3 className={headingStyles}>{props.children}</h3>
  )

  return (
    <div className={wrapperStyles}>
      {renderSuper()}
      {renderHeading()}
    </div>
  )
}
