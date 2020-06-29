import React from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.css"

export default function Nav() {
  const pages = [
    {
      name: "Case studies",
      path: "/",
    },
    // {
    //   name: "Samples",
    //   path: "/samples",
    // },
    {
      name: "Side projects",
      path: "/side-projects",
    },
  ]

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {pages &&
          pages.map(page => (
            <li className={styles.li}>
              <Link
                activeStyle={{ color: "#ff6000", textDecoration: "underline" }}
                className={styles.link}
                to={page.path}
              >
                {page.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
