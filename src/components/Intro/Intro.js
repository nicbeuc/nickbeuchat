import styles from './Intro.module.css';
import { ASSOCIATIONS, INTRO_TEXT } from '@/constants';

export default function Intro() {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.text}>
        <p>{ INTRO_TEXT }</p>
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