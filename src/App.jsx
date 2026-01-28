import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/common/Modal'
import Spinner from './components/common/Spinner'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <h1 style={{marginBottom: "55px"}}>App test</h1>
      <button onClick={() => {setIsOpen(true)}}>Open Modal</button>
      <Modal 
        onClose={() => setIsOpen(false)}
        title={"Đây là test modal"}
        isOpen={isOpen}
        children={(<div>
          Đây là body bên trong modal
        </div>)}
        footer={(
          <div>
            <button>Save</button>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        )}
      />

      <div>
        <h2>Loading</h2>
        <Spinner />
      </div>
    </>
  )
}

export default App
