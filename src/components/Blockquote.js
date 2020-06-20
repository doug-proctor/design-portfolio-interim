import React from "react"
import styles from "./Blockquote.module.css"

export default function Blockquote(props) {
  return <blockquote className={styles.blockquote}>{props.children}</blockquote>
}
