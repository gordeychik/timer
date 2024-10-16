import styles from './ModalCard.module.scss';

interface IModalCard {
  name: string;
  price: number;
  defaultChecked: boolean;
}

export const ModalCard: React.FC<IModalCard> = ({ name, price, defaultChecked }) => {
  return (
    <label>
      <div className={styles.modalCard}>
        <p className={styles.name}>{name}</p>
        <p className={styles.oldPrice}>999₽</p>
        <p className={styles.price}>{price}₽</p>
        <span className={styles.card__discount}></span>
      </div>
      <input className={styles.radio} name='card' type='radio' defaultChecked={defaultChecked} />
    </label>
  );
};