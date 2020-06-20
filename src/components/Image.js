import React from "react"
import styles from "./Image.module.css"

export default function Image(props) {
  return <img className={styles.image} src={props.src} alt={props.alt} />
}
