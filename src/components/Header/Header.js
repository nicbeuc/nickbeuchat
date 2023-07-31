import GridLayout from "../GridLayout"
import ExternalLink from "../ExternalLink"

import styles from './Header.module.css'
import { LINKS } from "@/constants"

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <GridLayout>
        <div className={styles.logoWrapper}>
          <h1>Nick Beuchat</h1>
        </div>
        <div className={styles.linksWrapper}>
          <ExternalLink link={LINKS.email}>
            Email
          </ExternalLink>
          <ExternalLink link="#">
            Resumé
          </ExternalLink>
          <ExternalLink link={LINKS.linkedIn}>
            LinkedIn
          </ExternalLink>
        </div>
      </GridLayout>
    </header>
  )
}