import styles from './Projects.module.css';
import Project from './Project';

import { FEATURED_PROJECTS } from '@/constants';

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      {FEATURED_PROJECTS.map(({title, description, year, roles}, index) => (
        <Project
          key={index}
          title={title}
          description={description}
          year={year}
          roles={roles}
        />
      ))}
    </div>
  );
}