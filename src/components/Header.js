import React from "react"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        Doug Proctor
        <span className={styles.span}>Lead UX &amp; UI designer</span>
      </h1>
    </header>
  )
}
