import React from "react"
import styles from "./ImageRow.module.css"

export default function ImageRow(props) {
  return <div className={styles.row}>{props.children}</div>
}
