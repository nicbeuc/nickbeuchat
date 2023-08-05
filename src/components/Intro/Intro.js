import styles from './Intro.module.css';
import { ASSOCIATIONS } from '@/constants';

export default function Intro() {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.text}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className={styles.assoc}>
        <h2 className={styles.assocTitle}>Associations</h2>
        <ul>
          {ASSOCIATIONS.map(({ name }, index) => (
            <li key={index}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}