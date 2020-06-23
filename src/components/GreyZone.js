import React from "react"
import styles from "./GreyZone.module.css"

export default function GreyZone(props) {
  const classes = props.compact ? styles.zoneCompact : styles.zone
  return <div className={classes}>{props.children}</div>
}
