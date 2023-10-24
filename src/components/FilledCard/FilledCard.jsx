import TitleContainer from '../TitleContainer/TitleContainer'
import Text from '../Text/Text'
import Button from '../Button/Button'
import IconEdit from '../icons/IconEdit'
import imgContainer from '../../../public/assets/image/imgContainer.png'

import styles from './style.css'

export default function FilledCard({setModal, organization}) {
    const cardTextFields = [
        {
            label: 'Тип',
            value: organization.type
        },
        {
            label: 'Название компании',
            value: organization.name
        },
        {
            label: 'Описание',
            value: organization.description
        }
    ]

    return (
        <>
            <TitleContainer>
                <Text type='title' >Организация</Text>
                <Button type='secondary' onClick={() => setModal('edit')} > <IconEdit/> Редактировать</Button>
            </TitleContainer>
            <div className={styles.content} >
                {cardTextFields.map ((item, index) => {
                    return (
                        <div key = {index} >
                            <Text type='description' >{item.label}</Text>
                            <Text type='label' style={{fontSize: '1rem'}} >{item.value}</Text>
                        </div>
                    )
                })}
                <div>
                    <Text type='label' text='Логотип' />
                    <div className={styles.imgContainer} >
                        <img src={imgContainer} alt="Логотип" />
                    </div>
                </div>
            </div>
        </>
    )
}