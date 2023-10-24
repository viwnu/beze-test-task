import Text from '../Text/Text'
import styles from './style.css'

export default function Input ({
    label,
    type,placeholder = '',
    options=[],
    required=false,
    description='',
    value,
    setValue,
}) {
    const onChange = (e) => {
        e.target.className=styles.selcted
        setValue(e.target.value)
        if(!e.target.validity.valid) e.target.className=styles.notValid
        else if(e.target.validity.valid) e.target.className=''
    }
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
                    value={value.length === 0 ?'Select your option' : value}
                    className={styles.notselected}
                    onChange={onChange}
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
                            onChange={onChange}
                        ></textarea>
                        <Text type='description' >{description}</Text>
                    </>
                    : <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required}
                    />
            }
        </label>
    )
}