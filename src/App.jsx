import Modal from './components/Modal/Modal'
import EmptyCard from './components/EmptyCard/EmptyCard'
import EditCard from './components/EditCard/EditCard'
import FilledCard from './components/FilledCard/FilledCard'

import styles from  './index.css'
import { useState } from 'react'
import Button from './components/Button/Button'

const CurrentCard = ({cardName, setModal}) => {
  const cards = {
    ['empty']: EmptyCard,
    ['edit']: EditCard,
    ['filled']: FilledCard
  }
  const Current = cards[cardName]
  return <Current setModal={setModal} />
}

export default function App() {
  const [modal, setModal] = useState('')

  

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
        ? <Modal>
            <CurrentCard cardName={modal} setModal={setModal} />
          </Modal>
         : ''
      }
    </div>
  )
}
