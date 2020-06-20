import React from "react"
import styles from "./GreyZone.module.css"

export default function GreyZone(props) {
  return <div className={styles.zone}>{props.children}</div>
}
