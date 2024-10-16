import { Card } from '../Card/Card';
import { IData } from '../../api/getData';
import styles from './Widgets.module.scss';

interface WidgetsProps {
    widgets: IData[];
    discount: boolean;
}

export const Widgets: React.FC<WidgetsProps> = ({ widgets, discount }) => {
    return (
        <ul className={styles.widgets}>
            {widgets.map((item, i) => (
                <li key={i + 1} className={i === 3 ? styles.lastItem : ''}>
                    <Card name={item.name} price={item.price} discount={discount} defaultChecked={i == 0} />
                </li>
            ))}
        </ul>
    );
};