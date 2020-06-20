import React from "react"
import bg from "../images/grid.png"
import styles from "./GridBg.module.css"

export default function GridBg(props) {
  return (
    <div className={styles.bg} style={{ backgroundImage: `url(${bg})` }}>
      {props.children}
    </div>
  )
}
