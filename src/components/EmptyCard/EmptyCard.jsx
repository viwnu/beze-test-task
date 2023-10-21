import TitleContainer from '../TitleContainer/TitleContainer'
import Text from '../Text/Text'
import Button from '../Button/Button'
import IconPlus from '../icons/IconPlus'

export default function EmptyCard({setModal}) {
    return (
        <>
            <TitleContainer>
                <Text type='title' text='Организация' />
            </TitleContainer>
            <Text type='content' text = 'Название организации, логотип и описание' />
            <Button type='add' onClick={() => setModal('edit')}>
                <IconPlus/>
                Добавить
            </Button>
        </> 
    )
}