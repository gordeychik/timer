import styles from './Button.module.scss'

interface IButton {
    children: React.ReactNode;
}

export const Button: React.FC<IButton> = ({children}) => {
    return (
        <button className={styles.btn}>{children}</button>
    )
}
