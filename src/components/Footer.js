import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}>👋</div>
      <div className={styles.line}>07482178555 / hello@dougproctor.co.uk</div>
      <div className={styles.line}>
        <a href="/Doug-Proctor-CV-Lead-UX-UI.pdf">Curriculum vitae</a>
      </div>
    </footer>
  )
}
