import React, {useState} from 'react';
import './App.css'
import Modal from './components/common/Modal'
import Spinner from './components/common/Spinner'
import Button from './components/common/Button';
import logo from './assets/img/test.png'
import Input from './components/common/Input';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 style={{marginBottom: "55px"}}>App test</h1>
      <button style={{marginBottom: "30px"}} onClick={() => {setIsOpen(true)}}>Open Modal</button>
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

      <div style={{marginBottom: "30px"}}>
        <h2>Loading</h2>
        <Spinner />
      </div>

      <div style={{marginBottom: "30px"}}>
        <h2>Button</h2>
        <Button
          title='Đây là nút test'
          variant='light'
          width={400}
          height={100}
          image={logo}
        />
      </div>

        <div style={{marginBottom: "30px"}}>
        <h2>Loading</h2>
        <Input 
          labelTitle={"Test nhập"}
          errorTitle={"Vui lòng nhập"}
        />
      </div>
      
    </>
  )
}

export default App
