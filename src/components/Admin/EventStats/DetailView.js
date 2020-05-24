import React from 'react';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailView.scss';
const DetailView = (props) => {
    return (
        <div className="detail-view">
             <Modal isOpen={props.open} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Registration Detail</ModalHeader>
        <ModalBody>
            <div className="view">
            {props.data ?
            Object.keys(props.data).map(key => (<tr key={"detail-"+key}><td className="key">{key}</td><td>{props.data[key]}</td></tr>)):null}
            </div>
        </ModalBody>
      </Modal>
            
        </div>
    );
};

export default DetailView;