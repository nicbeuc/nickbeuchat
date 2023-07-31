import { ArrowTr } from "iconoir-react"

import styles from './ExternalLink.module.css'

export default function ExternalLink({ link, children }) {
  return (
    <a href={link} target="_blank" className={styles.externalLink}>
      <span className={styles.linkText}>{children}</span>
      <ArrowTr width=".9em" height=".9em" />
    </a>
  )
}