import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal2(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Quien Mato a la LLamita Blanca
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Quein mato a la llamita Blanca</ModalHeader>
        <ModalBody>
          Una comedia negra que sigue a dos amigos, Jacinta y Chicho, quienes se embarcan en un viaje por el Altiplano boliviano transportando un cargamento de droga. La película es un road movie lleno de situaciones absurdas y personajes peculiares, que a la vez muestra paisajes impresionantes de Bolivia.
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

export default Modal2;