import Text from '../Text/Text'
import styles from './style.css'

export default function Input ({ label, type, placeholder = '', options=[], required=false, description='', value, setValue }) {
    console.log('required: ', required)
    return (
        <label className={styles.input} >
            <>
                <Text type='label' >{
                    required
                    ? <><span className={styles.requred} >* </span> {label} </>
                    : <>{label}</>
                }</Text>
            </>
            {type === 'select' && type != 'textarea'
                ? <select
                    value={value}
                    defaultValue='Select your option'
                    className={styles.notselected}
                    onChange={e => {
                        e.target.className=styles.selcted
                        setValue(e.target.value)
                    } }
                    required={required}
                >
                    <option disabled>Select your option</option>
                    {options.map((option, index) => {
                        return (
                            <option value={option} key={index} > {option} </option>
                        )
                    })}
                </select>
                : type === 'textarea'
                    ? <>
                        <textarea
                            placeholder={placeholder}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        ></textarea>
                        <Text type='description' >{description}</Text>
                    </>
                    : <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
            }
        </label>
    )
}