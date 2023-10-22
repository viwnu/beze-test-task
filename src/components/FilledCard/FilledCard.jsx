import TitleContainer from '../TitleContainer/TitleContainer'
import Text from '../Text/Text'
import Button from '../Button/Button'
import IconEdit from '../icons/IconEdit'
import imgContainer from '../../../public/assets/image/imgContainer.png'

import styles from './style.css'

const cardTextFields = [
    {
        label: 'Тип',
        value: 'Санаторий'
    },
    {
        label: 'Название компании',
        value: 'Санаторий "Огонёк"'
    },
    {
        label: 'Описание',
        value: 'Мой первый бизнес'
    }
]



export default function FilledCard({setModal}) {
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