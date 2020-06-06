import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.scss';
import Loading from '../Utilities/Loading/Loading';
import {createAdmin} from '../../utilities/api';
const AddUser = (props) => {
    const [data,setData] = useState({username:"",password:""});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    
    const handleChange = (event) => {
        let obj = data;
        obj[event.target.name] = event.target.value;
        setData({...obj});
    }

    const add = () => {
        setError('');
        setLoading(true);
        createAdmin(data,(resp) => {setLoading(false);if(resp.status === 'Success'){setError('Registered Sucessfully');setData({username:"",password:""});setError('');props.toggle();props.add(data.username);}else{setError(resp.message)}});
    }
    
    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
        <ModalHeader toggle={props.toggle}>Add User</ModalHeader>
        <ModalBody>
            <div className="add-event">
                <div className="heading">Enter Username</div>
                <input placeholder="Enter Username..." value={data.username} name="username" onChange={(event) => handleChange(event)}/>
                <div className="heading">Enter Password</div>
                <input placeholder="Enter Password..." type="password" value={data.password} name="password" onChange={(event) => handleChange(event)}/>
            </div>
            <div className="error">{error}</div>
        </ModalBody>
        <ModalFooter>
        {loading ? <Loading/>:<>
          <Button color="primary" className={data.username.length === 0 || data.password.length === 0? "disable":""} onClick={() => add()}>OK</Button>{' '}
          <Button color="danger" onClick={() => {setError('');setData({username:"",password:""});props.toggle();}}>Cancel</Button></>}
        
        </ModalFooter>
      </Modal>
    );
};

export default AddUser;