import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal5(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Utama
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Utama</ModalHeader>
        <ModalBody>
          Un emotivo drama que sigue a una pareja de ancianos quechua, Virginio y Sisa, que viven en una comunidad remota del Altiplano boliviano. Enfrentan una sequía prolongada que amenaza su estilo de vida tradicional y los obliga a considerar si deben abandonar su hogar. La película es visualmente impresionante y conmovedora.
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

export default Modal5;