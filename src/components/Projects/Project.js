import Image from "next/image";
import Link from "next/link";
import mediaPlaceholder from "../../../public/media-placeholder.jpg";

import styles from "./Project.module.css";

export default function Project({ title, description, year, roles }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meta}>
        <div className={styles.title}>
          <h2>
            <Link href='#'>{title}</Link>
          </h2>
          <p>{description}</p>
        </div>
        <div className={styles.roles}>
          {roles.map((role, index) => (
            <div key={index} className={styles.role}>
              {role}
            </div>
          ))}
        </div>
        <div className={styles.date}>{year}</div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={mediaPlaceholder}
          alt='Media placeholder'
          fill
          placeholder='blur'
        />
      </div>
    </div>
  );
}
