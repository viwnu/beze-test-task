import Input from '../Input/Input'
import FileInput from '../FileInput/FileInput'
import Button from '../Button/Button'

import styles from './style.css'

export default function Form({setModal, organization, setOrganization}) {
    return (
        <form className={styles.form} onSubmit={() => console.log('submit')}>
                <Input
                    label='Тип'
                    type='select'
                    options={['Санаторий', 'Музей', 'Библиотека']}
                    required={true}
                    value={organization.type}
                />
                <Input
                    label='Название организации'
                    type='text'
                    placeholder={`Санаторий "Огонёк"`}
                    required={true}
                    value={organization.name}
                />
                <Input
                    label='Описание'
                    type='textarea'
                    placeholder={`Санаторий "Огонёк"`}
                    description='Описание в модуле на сайте не показывается'
                    value={organization.description}
                />
                <FileInput
                    label="Логотип"
                    required={true}
                    value={organization.logo}
                />
                <Button type='primary' onClick={() => setModal('filled')} >Сохранить</Button>
            </form>
    )
}