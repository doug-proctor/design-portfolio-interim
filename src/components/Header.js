import React from "react"
import styles from "./Header.module.css"

export default function Header(props) {
  const headerClasses = props.compact ? styles.headerCompact : styles.header
  return (
    <header className={headerClasses}>
      <h1 className={styles.h1}>Doug Proctor</h1>
      <h2 className={styles.h2}>Lead UX &amp; UI designer</h2>
    </header>
  )
}
