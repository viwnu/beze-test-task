import Input from '../Input/Input'
import FileInput from '../FileInput/FileInput'
import Button from '../Button/Button'

import styles from './style.css'
import { useState } from 'react'

export default function Form({setModal, organization, setOrganization}) {
    const formValidity = organization.type.length > 0 & organization.name.length > 0 & organization.logo.length > 0
    console.log('formValidity', formValidity)
    return (
        <form className={styles.form} onSubmit={(e) => {
            e.preventDefault()
            if(formValidity) {
                console.log('submit')
                setModal('filled')
            }
        }}>
            <Input
                label='Тип'
                type='select'
                options={['Санаторий', 'Музей', 'Библиотека']}
                required={true}
                value={organization.type}
                setValue={(type) => setOrganization({...organization, type})}
            />
            <Input
                label='Название организации'
                type='text'
                placeholder={`Санаторий "Огонёк"`}
                required={true}
                value={organization.name}
                setValue={(name) => setOrganization({...organization, name})}
            />
            <Input
                label='Описание'
                type='textarea'
                placeholder={`Санаторий "Огонёк"`}
                description='Описание в модуле на сайте не показывается'
                value={organization.description}
                setValue={(description) => setOrganization({...organization, description})}
            />
            <FileInput
                label="Логотип"
                required={true}
                value={organization.logo}
                setFile={(logo) => setOrganization({...organization, logo})}
            />
            <Button type='submit' >Сохранить</Button>
        </form>
    )
}