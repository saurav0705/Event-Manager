import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ViewMessage = (props) => {
    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
        <ModalHeader toggle={props.toggle}>Message</ModalHeader>
        <ModalBody>
            <h2 className="name btn-outline-primary">From : {props.select.name.toUpperCase()}</h2>
            <h6 className="email btn-outline-warning">Email : {props.select.email}</h6>
            <h3 className="message">Message : {props.select.message}</h3>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    );
};

export default ViewMessage;