import styles from './style.css'

const types = {
    ['title']: styles.title,
    ['content']: styles.content,
    ['label']: styles.label,
    ['description']: styles.description,
}

export default function Text ({ type, children, style={} }) {
    const className = types[type]
    return (
        <p
            className={className}
            style={style}
        > {children} </p>
    )
}