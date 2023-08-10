import React from 'react';
import styles from './topDiv.module.scss'; // Import the corresponding SCSS file

interface TopDivProps {
  imageSrc: string;
  title?: string; // Optional, with default value
  targetTime?: string; // Optional, with default value
}

const TopDiv: React.FC<TopDivProps> = ({ imageSrc, title = 'learning cs', targetTime = '10,000 hours' }) => {
  return (
    <div className={styles['top-div']}>
      <div className={styles.left}>
        <img src={imageSrc} alt="Left Image" className={styles.image} />
      </div>
      <div className={styles.right}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>target time: {targetTime}</div>
        </div>
        <button className={styles.button}>
          <div className={styles.square}>
            <div className={styles.plus}>+</div>
          </div>
          <span className={styles.buttonText}>add accumulate time</span>
        </button>
      </div>
    </div>
  );
};

export default TopDiv;
