import Input from '../Input/Input'
import Text from '../Text/Text'
import FileInput from '../FileInput/FileInput'
import Button from '../Button/Button'

import styles from './style.css'

export default function Form({setModal}) {
    return (
        <form className={styles.form} onSubmit={() => console.log('submit')}>
                <Input
                    label='Тип'
                    type='select'
                    options={['Санаторий', 'Музей', 'Библиотека']}
                />
                <Input
                    label='Название организации'
                    type='text'
                    placeholder={`Санаторий "Огонёк"`}
                />
                <Input
                    label='Описание'
                    type='textarea'
                    placeholder={`Санаторий "Огонёк"`}
                    description='Описание в модуле на сайте не показывается'
                />
                <FileInput
                    label="Логотип"
                />
                <Button type='primary' onClick={() => setModal('filled')} >Сохранить</Button>
            </form>
    )
}