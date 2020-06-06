import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.scss';
import Loading from '../Utilities/Loading/Loading';
import {createEvent} from '../../utilities/api';
const AddEvent = (props) => {
    const [event,setEvent] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const add = () => {
        setError('');
        setLoading(true);
        let obj ={event_name : event}
        createEvent(obj,(resp) => {setLoading(false);if(resp.status === 'Success'){setError('');setEvent('');props.toggle();props.add(event);}else{setError(resp.message)}});
    }
    
    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
        <ModalHeader toggle={props.toggle}>Add Event</ModalHeader>
        <ModalBody>
            <div className="add-event">
                <div className="heading">Enter Event Name</div>
                <input placeholder="Enter Event Name..." value={event} onChange={(event) => setEvent(event.target.value)}/>
            </div>
            <div className="error">{error}</div>
        </ModalBody>
        <ModalFooter>
        {loading ? <Loading/>:<>
          <Button color="primary" className={event.length === 0 ? "disable":""} onClick={() => add()}>OK</Button>{' '}
          <Button color="danger" onClick={() => {setError('');setEvent('');props.toggle();}}>Cancel</Button></>}
        
        </ModalFooter>
      </Modal>
    );
};

export default AddEvent;