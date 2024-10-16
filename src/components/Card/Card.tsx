import styles from './Card.module.scss'
export interface ICard {
    name: string;
    price: number;
    discount: boolean;
    defaultChecked: boolean;
}

export const Card: React.FC<ICard> = ({ name, price, discount, defaultChecked }) => {
    return (
        <label>
            <div className={styles.card}>
                <p className={styles.card__name}>{name}</p>
                <p className={styles.card__price}>{price}₽</p>
                <p className={styles.card__oldPrice}>999₽</p>
                <p className={styles.card__info}>Чтобы просто начать 👍🏻</p>
                {discount && <span className={styles.card__discount}></span>}
            </div>
            <input className={styles.radio} name='card' type='radio' defaultChecked={defaultChecked} />
        </label>
    )
}
