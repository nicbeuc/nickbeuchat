import Image from 'next/image';
import mediaPlaceholder from '../../../public/media-placeholder.jpg'

import styles from './Project.module.css';

export default function Project() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={mediaPlaceholder}
          alt='Media placeholder'
          fill
          placeholder='blur'
        />
      </div>
    </div>
  )
}