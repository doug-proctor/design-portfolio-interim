import React from "react"
import styles from "./Col.module.css"

export default function Col(props) {
  return <div className={styles.col}>{props.children}</div>
}
