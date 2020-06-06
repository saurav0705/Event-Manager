import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.scss';
import Loading from '../Utilities/Loading/Loading';
import {changePassword} from '../../utilities/api';
const ChangePassword = (props) => {
    const [data,setData] = useState({old_password:"",new_password:""});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    
    const handleChange = (event) => {
        let obj = data;
        obj[event.target.name] = event.target.value;
        setData({...obj});
    }
    
    const change = () => {
        setError('');
        setLoading(true);
        changePassword({...data,username:props.name},(resp) => {setLoading(false);if(resp.status === 'Success'){setError('Registered Sucessfully');setData({old_password:"",new_password:""});setError('');props.toggle();}else{setError(resp.message)}});
    }

    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
        <ModalHeader toggle={props.toggle}>Change Password</ModalHeader>
        <ModalBody>
            <div className="add-event">
                <div className="heading">Enter Old Password</div>
                <input placeholder="Enter Old Password..." type="password" value={data.old_password} name="old_password" onChange={(event) => handleChange(event)}/>
                <div className="heading">Enter New Password</div>
                <input placeholder="Enter New Password..." type="password" value={data.new_password} name="new_password" onChange={(event) => handleChange(event)}/>
            </div>
            <div className="error">{error}</div>
        </ModalBody>
        <ModalFooter>
        {loading ? <Loading/>:<>
          <Button color="primary" className={data.old_password.length === 0 || data.new_password.length === 0? "disable":""} onClick={() => change()}>OK</Button>{' '}
          <Button color="danger" onClick={() => {setError('');setData({old_password:"",new_password:""});props.toggle();}}>Cancel</Button></>}
        
        </ModalFooter>
      </Modal>
    );
};

export default ChangePassword;