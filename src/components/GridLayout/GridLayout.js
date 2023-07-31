import styles from './GridLayout.module.css'

export default function GridLayout({ children }) {
  return (
    <div className={styles.gridLayout}>
      {children}
    </div>
  )
}