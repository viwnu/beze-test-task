import { useState } from 'react'

import Modal from './components/Modal/Modal'
import EmptyCard from './components/EmptyCard/EmptyCard'
import EditCard from './components/EditCard/EditCard'
import FilledCard from './components/FilledCard/FilledCard'
import Button from './components/Button/Button'

import styles from  './index.css'

const CurrentCard = ({cardName, setModal, organization, setOrganization}) => {
  const cards = {
    ['empty']: EmptyCard,
    ['edit']: EditCard,
    ['filled']: FilledCard,
  }
  const Current = cards[cardName]
  return (
    <Current
      setModal={setModal}
      organization={organization}
      setOrganization={setOrganization}
    />
  )
}

export default function App() {
  const [modal, setModal] = useState('')
  const [organization, setOrganization] = useState({
    type: '',
    name: '',
    description: '',
    logo: [],
  })

  return (

    <div
      style={{
        width:'100vw',
        height:'100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button type='add' onClick={() => setModal('empty') } >Show Modal</Button>
      {modal !== ''
        ? <Modal closeModal={() => setModal('')} >
            <CurrentCard
              cardName={modal}
              setModal={setModal}
              organization={organization}
              setOrganization={setOrganization}
            />
          </Modal>
         : ''
      }
    </div>
  )
}
