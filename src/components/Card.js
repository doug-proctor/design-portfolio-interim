import React from "react"
import { Link } from "gatsby"

import styles from "./Card.module.css"
import arrow from "../images/icons/arrow.svg"

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.logoBox}>
        <div
          className={styles.logo}
          style={{ backgroundImage: `url(${props.image})` }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.description}>{props.children}</div>
        <Link to={`portfolio/${props.studySlug}`} className={styles.link}>
          View study
          <img className={styles.arrow} src={arrow} alt="View the case study" />
        </Link>
      </div>
    </div>
  )
}
