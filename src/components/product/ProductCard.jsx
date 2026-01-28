import React, { useState } from 'react'
import Modal from '../common/Modal';


export default function ProductCard() {
    const [isOpen, setOpen] = useState(false);

    const form = () => {
        return(
            <div>This is form</div>
        );
    }
  return (
    <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <Modal isOpen={isOpen} onClose={() => setOpen(false)} title="This is title">
             {form()}
        </Modal>
    </div>
  )
}
