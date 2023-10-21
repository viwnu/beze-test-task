import Text from '../Text/Text'
import styles from './style.css'

export default function Input ({ label, type, placeholder = '', options=[], description='' }) {
    return (
        <label className={styles.input} >
            <Text type='label' text={label} />
            {type === 'select' && type != 'textarea'
                ? <select defaultValue='Select your option' onChange={e => console.log(e.target.value)} >
                    <option disabled>Select your option</option>
                    {options.map((option, index) => {
                        return (
                            <option value={option} key={index} > {option} </option>
                        )
                    })}
                </select>
                : type === 'textarea'
                    ? <>
                        <textarea placeholder={placeholder} ></textarea>
                        <Text type='description' text={description} />
                    </>
                    : <input type={type} placeholder={placeholder} />
            }
        </label>
    )
}