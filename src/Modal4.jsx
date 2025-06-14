import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal4(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        La Nación Clandestina
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>La Nación Clandestina</ModalHeader>
        <ModalBody>
          Cuenta la historia de Sebastián Mamani, un campesino aymara que regresa a su comunidad andina para realizar una danza ritual de arrepentimiento y reintegrarse a la "Nación Clandestina" después de haber traicionado sus raíces al irse a la ciudad. La película explora la identidad cultural y la búsqueda de pertenencia.
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>
            ATRAS
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modal4;