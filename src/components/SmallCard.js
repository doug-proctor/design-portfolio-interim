import React from "react"
import styles from "./SmallCard.module.css"

export default function SmallCard(props) {
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
      </div>
    </div>
  )
}
