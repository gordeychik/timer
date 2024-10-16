import { IData } from '../../api/getData';
import { ModalCard } from '../ModalCard/ModalCard';
import styles from './Modal.module.scss';

interface ModalProps {
    onClose: () => void;
    widgets: IData[];
    discount: boolean;
}

export const Modal: React.FC<ModalProps> = ({ onClose, widgets }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <p className={styles.title}>Не упусти свой <span>последний шанс</span></p>
                <p className={styles.text}>Мы знаем, как трудно начать.. <b>Поэтому!</b></p>
                <p className={styles.start}>Дарим скидку для <span>лёгкого старта</span> 🏃‍♂️</p>
                <p className={styles.check}>Посмотри, что мы для тебя приготовили 🔥</p>
                <ul className={styles.list}>
                    {widgets.map((elem, i) => {
                        return <li key={i + 1}><ModalCard name={elem.name} price={elem.price} defaultChecked={i == 0} /></li>
                    })}
                </ul>
                <button className={styles.btn}>Начать тренироваться</button>
                <button className={styles.close} onClick={onClose}><img src='/img/Close.svg' alt='close' /></button>
            </div>
        </div>
    );
};