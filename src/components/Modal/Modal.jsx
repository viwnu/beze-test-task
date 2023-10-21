import { createPortal } from 'react-dom';
import styles from './style.css'

export default function Modal({ children }) {
    const root = document.getElementById('root')
    return (
        <>
            {createPortal(
                <div className={styles.modalBackground} >
                    <div className={styles.modalContainer} >
                        {children}
                    </div>
                </div>
                , root
            )}
        </>
    )
}