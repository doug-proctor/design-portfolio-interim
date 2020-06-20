import React from "react"
import styles from "./Study.module.css"

import Main from "./main"

export default function Study(props) {
  return (
    <Main>
      <div className={styles.shadow}>
        <div className={styles.header}>
          <h1 className={styles.title}>{props.title}</h1>
          <div className={styles.intro}>{props.intro}</div>
        </div>
        <div className={styles.body}>{props.children}</div>
      </div>
    </Main>
  )
}
