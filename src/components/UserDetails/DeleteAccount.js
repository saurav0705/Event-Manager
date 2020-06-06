import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.scss';
import Loading from '../Utilities/Loading/Loading';
import {deleteUser} from '../../utilities/api';
import { useHistory } from 'react-router-dom';
const DeleteAccount = (props) => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    let history = useHistory();
    
    const deleteAccount = () => {
        setError('');
        setLoading(true);
        deleteUser({username:props.name},(resp) => {setLoading(false);if(resp.status === 'Success'){history.push('/');localStorage.setItem('deleted',true);window.location.reload();props.toggle();}else{setError(resp.message)}});
    }
    
    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
        <ModalHeader toggle={props.toggle}>Delete Account</ModalHeader>
        <ModalBody>
            <div className="add-event">
                <div className="heading">Are You sure You want to Delete Your Account ?</div>
               </div>
            <div className="error">{error}</div>
        </ModalBody>
        <ModalFooter>
        {loading ? <Loading/>:<>
          <Button color="primary"  onClick={() => deleteAccount()}>YES</Button>{' '}
          <Button color="danger" onClick={() => {props.toggle();}}>NO</Button></>}
        
        </ModalFooter>
      </Modal>
    );
};

export default DeleteAccount;