import React, { useState } from 'react';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import {IoMdLogIn} from 'react-icons/io';
import {checkActive} from '../../../utilities/validation';
import Loading from '../../Utilities/Loading/Loading';
import {getLogin} from '../../../utilities/api';

const Login = (props) => {
    const [data,setData] = useState({username:"",password:""})
    const [active,setActive] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    //Handles Input Change
    const handleChange = (event) => {
        let obj = data;
        obj[event.target.name] = event.target.value;
        setData({...obj});
        setActive(checkActive(data,{}));
    }

    //Handles login functionality
    const login = (data) => {
        setError('');
        setLoading(true);
        getLogin(data,(response) => {
            setLoading(false);
            if(response.message){
                setError(response.message)
            }else{
                localStorage.setItem('token',response.access_token);
                localStorage.setItem('time',new Date().toISOString());
                props.toggle();
                props.success();
                setData({username:"",password:""})
            }
        })

    }

    
    return (
        <div className="login-view">
             <Modal isOpen={props.open} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Login</ModalHeader>
        <ModalBody>
            <div className="login-form">
                <div className="input">
                    <div className="label">Username</div>
                    <input type="text" placeholder="Username" value={data.username} name="username" onChange={(event) => handleChange(event)}/>
                </div>
                <div className="input">
                    <div className="label">Password</div>
                    <input type="password" placeholder="Password" value={data.password} name="password" onChange={(event) => handleChange(event)}/>
                </div>
                {loading ? <Loading/>:
                <div className={active ? "login-button" : "login-button login-disable"} onClick={() => {login(data)}}>
                    <button>Login <IoMdLogIn/></button>
                </div>}
                <div className="error">{error}</div>
            </div>
        </ModalBody>
      </Modal>
            
        </div>
    );
};

export default Login;