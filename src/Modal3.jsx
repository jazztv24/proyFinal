import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal3(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Yawar Mallku
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Yawar Mallku</ModalHeader>
        <ModalBody>
          Considerada una de las obras cumbres del cine andino, esta película narra la historia de una pareja indígena que busca justicia después de que la esposa es esterilizada sin su consentimiento por una clínica extranjera. Es un fuerte comentario social sobre la explotación y el imperialismo.
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

export default Modal3;