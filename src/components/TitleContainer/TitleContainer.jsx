import styles from './style.css'

export default function TitleContainer({ children }) {
    return (
        <div className={styles.titleContainer} >
            {children}
        </div>
    )
}