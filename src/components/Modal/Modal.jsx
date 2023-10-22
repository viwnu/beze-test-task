import { createPortal } from 'react-dom';
import styles from './style.css'

export default function Modal({ closeModal, children }) {
    const root = document.getElementById('root')
    return (
        <>
            {createPortal(
                <div
                    className={styles.modalBackground}
                    id='modalBackground'
                    onClick={e => {
                        if(e.target === document.querySelector('#modalBackground')) {
                            closeModal()
                    }}}
                >
                    <div className={styles.modalContainer} >
                        {children}
                    </div>
                </div>
                , root
            )}
        </>
    )
}