import styles from './score-bug.module.css';

/*

Scorebug
  Score Container
    Left side
      Team/Logo
      Score
    Right side
      Team/Logo
      Score
  Time Container
    Time

*/

export default function ScoreBugPage() {
  return (<>
    <div className={styles.mainWrapper}>
      <div className={styles.scoreWrapper}>
        <div className={styles.scoreCell}>
          <div className={styles.team}>
            <span>TOT</span>
          </div>
          <div className={styles.score}>
            <span>2</span>
          </div>
        </div>
        <div className={styles.scoreCell}>
          <div className={styles.team}>
            <span>LIV</span>
          </div>
          <div className={styles.score}>
            <span>1</span>
          </div>
        </div>
      </div>
      <div className={styles.timeWrapper}>
        <div className={styles.time}>
          35:14
        </div>
      </div>
    </div>
  </>)
}
