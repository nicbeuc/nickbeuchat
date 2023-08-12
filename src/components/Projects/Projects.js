import styles from './Projects.module.css';
import Project from './Project';

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <Project />
    </div>
  );
}