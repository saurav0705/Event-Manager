import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getEventsUser} from '../../utilities/api';
const ViewUser = (props) => {
    const [data,setData] = useState();
    
    useEffect(()=>{getEventsUser((resp) => setData([...resp]))},[]);

    const filterEvents = (username) => {
        let filtered = data.filter(dat => dat.username === username);
        if(filtered.length === 0 ){return "No Events Created"}
        let list = filtered.map(dat => {return(<div className="event">{dat.event_name}</div>)})
        return list;
    }

    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
        <ModalHeader toggle={props.toggle}>{props.data ? "Events by " + props.data.username  : null}</ModalHeader>
        <ModalBody>
            {props.data ? 
            <div className="modal-user">
             <div className="event-list">
                 {filterEvents(props.data.username)}
             </div>
            </div>:null}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    );
};

export default ViewUser;