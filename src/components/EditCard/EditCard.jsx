import TitleContainer from '../TitleContainer/TitleContainer'
import Button from '../Button/Button'
import Text from '../Text/Text'
import IconCross from '../icons/IconCross'
import Form from './Form'

export default function EditCard ({setModal, organization, setOrganization}) {
    return (
        <>
            <TitleContainer>
                <Text type='title' >Организация</Text>
                <Button type='secondary' onClick={() => setModal('')}>
                    <IconCross/>
                    Отменить
                </Button>
            </TitleContainer>
            <Form
                setModal={setModal}
                organization={organization}
                setOrganization={setOrganization}
            />
        </>
    )
}