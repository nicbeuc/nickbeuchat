import styles from './lab.module.css';

export default function LabLayout({ children }) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  )
}