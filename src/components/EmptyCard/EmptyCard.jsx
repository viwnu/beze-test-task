import TitleContainer from '../TitleContainer/TitleContainer'
import Text from '../Text/Text'
import Button from '../Button/Button'
import IconPlus from '../icons/IconPlus'

export default function EmptyCard({setModal}) {
    return (
        <>
            <TitleContainer>
                <Text type='title' >Организация</Text>
            </TitleContainer>
            <Text type='content' >Название организации, логотип и описание</Text>
            <Button type='add' onClick={() => setModal('edit')}>
                <IconPlus/>
                Добавить
            </Button>
        </> 
    )
}