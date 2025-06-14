import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal1(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Fuertes
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Fuertes</ModalHeader>
        <ModalBody>
          Esta película épica se inspira en hechos reales y narra la historia del equipo de fútbol paceño The Strongest a principios del siglo XX. Cuando estalla la Guerra del Chaco (1932-1935) entre Bolivia y Paraguay, muchos de sus jugadores, movidos por el patriotismo y el honor, abandonan las canchas y se alistan para luchar en el frente. La película explora temas como la hermandad, el amor, el coraje y el sacrificio de estos deportistas que cambiaron la camiseta por el uniforme militar para defender su nación.
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

export default Modal1;