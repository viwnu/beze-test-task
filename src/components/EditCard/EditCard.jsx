import TitleContainer from '../TitleContainer/TitleContainer'
import Button from '../Button/Button'
import Text from '../Text/Text'
import IconCross from '../icons/IconCross'
import Form from './Form'

export default function EditCard ({setModal}) {
    return (
        <>
            <TitleContainer>
                <Text type='title' text = 'Организация' />
                <Button type='secondary' >
                    <IconCross/>
                    Отменить
                </Button>
            </TitleContainer>
            <Form setModal={setModal} />
        </>
    )
}