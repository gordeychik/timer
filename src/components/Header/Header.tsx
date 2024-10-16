import { Timer } from '../Timer/Timer';
import styles from './Header.module.scss';
import { ITimer } from '../Timer/Timer';

export const Header: React.FC<ITimer> = ({ seconds, minutes, isPriceRed }) => {
  return (
    <header>
      <div className={styles.header__wrapper}>
        <p>Скидка действует:</p>
        <Timer seconds={seconds} minutes={minutes} isPriceRed={isPriceRed} />
      </div>
    </header>
  );
};