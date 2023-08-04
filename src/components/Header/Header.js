import GridLayout from "../GridLayout"
import ExternalLink from "../ExternalLink"
import Logo from "../Logo"

import styles from './Header.module.css'
import { LINKS } from "@/constants"

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.link1Wrapper}>
        <ExternalLink link={LINKS.email}>
          Contact
        </ExternalLink>
      </div>
      <div className={styles.link2Wrapper}>
        <ExternalLink link="#">
          Resumé
        </ExternalLink>
      </div>
      <div className={styles.link3Wrapper}>
        <ExternalLink link={LINKS.linkedIn}>
          LinkedIn
        </ExternalLink>
      </div>
    </header>
  )
}