import { Container } from '../../ui/Container/Container'
import mainImage from '/img/main.png'
import styles from './Content.module.scss'
import { Widgets } from '../Widgets/Widgets'
import { Button } from '../../ui/Button/Button'
import { IData } from '../../api/getData'

interface ContentProps {
    widgets: IData[];
    discount: boolean;
    isCheckboxChecked: boolean;
}

export const Content: React.FC<ContentProps> = ({ widgets, discount, isCheckboxChecked }) => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <h1>Выберите подходящий тарифный план</h1>
                <div className={styles.main}>
                    <div className={styles.main__image}>
                        <img src={mainImage} alt='image' />
                    </div>
                    <div className={styles.main__widgets}>
                        <Widgets widgets={widgets} discount={discount} />
                        <p className={styles.text}>Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц</p>
                        <div className={styles.checkbox}>
                            <label>
                                <input type='checkbox' checked={isCheckboxChecked} readOnly />
                                <p>Я соглашаюсь с <a>Правилами сервиса</a> и  условиями <a>Публичной оферты.</a></p>
                            </label>
                        </div>
                        <div className={styles.button}>
                            <Button>Купить</Button>
                        </div>
                        <p className={styles.privacy}>
                            Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}