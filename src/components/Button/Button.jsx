import styles from './style.css'

const types = {
  ['add']: styles.btnTertiary,
  ['secondary']: styles.btnSecondary,
  ['primary']: styles.btnPrimary,
}

export default function Button({ type, onClick, children }) {
  const className = types[type]
  return (
    <button type='button'  onClick={onClick} className={`${styles.button} ${className}`} >
      <div>
        {children}
      </div>
    </button>
  )
}