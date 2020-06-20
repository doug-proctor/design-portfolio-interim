import React from "react"
import styles from "./Readable.module.css"

export default function Readable(props) {
  return <div className={styles.readable}>{props.children}</div>
}
