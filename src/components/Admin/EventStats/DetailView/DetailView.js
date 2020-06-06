import React, { useState, useEffect } from 'react';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailView.scss';
const DetailView = (props) => {
    const [message,setMessage] = useState('');

    //Make copied message disappears after 2 seconds
    useEffect(()=>{setTimeout(()=>{setMessage('')},2000)},[message])

    return (
        <div className="detail-view">
             <Modal isOpen={props.open} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Registration Detail</ModalHeader>
        <ModalBody>
            <div className="view">
            <div className="message">click on value to copy to clipboard</div>
            <div className="copied">{message}</div>
            {props.data ?
            Object.keys(props.data).map(key => 
            (<tr key={"detail-"+key}>
                <td className="key">{key.replace(/_/gi," ")}</td>
                <td className="value" onClick={() => {setMessage('Copied to clipboard');navigator.clipboard.writeText(props.data[key])}}>{props.data[key]}</td>
                </tr>))
                :null}
            
            </div>
        </ModalBody>
      </Modal>
            
        </div>
    );
};

export default DetailView;