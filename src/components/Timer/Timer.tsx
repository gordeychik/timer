import styles from './Timer.module.scss';

export interface ITimer {
  minutes: number;
  seconds: number;
  isPriceRed: boolean;
}

export const Timer: React.FC<ITimer> = ({ minutes, seconds, isPriceRed }) => {
  return (
    <div className={`${styles.timer} ${isPriceRed ? styles.redPrice : ''}`}>
      <div className={styles.timer__numbers}>
        <span className={styles.minutes}>{String(minutes).padStart(2, '0')}</span><span className={styles.dots}>:</span>
        <span className={styles.seconds}>{String(seconds).padStart(2, '0')}</span>
      </div>
      <div className={styles.timer__text}>
        <p>минут</p>
        <p>секунд</p>
      </div>
    </div>
  );
};