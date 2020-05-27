import React from 'react';
import {AiFillCloseSquare} from 'react-icons/ai';
import {MdPerson} from 'react-icons/md';
import {useHistory} from 'react-router-dom';
const UserOptions = (props) => {
    let history = useHistory();
    const close = () => {
        if(window.innerWidth <= 600){
        document.querySelector('.user-options').style.marginLeft = "-100%";}
    }
    return (
        <div className="user-options">
            <div className="close" onClick={() => close()}><AiFillCloseSquare/></div>
            <div className="icon"><MdPerson/></div>
            <div className="name">{props.data.id.username}</div>
            <div className="options">
                <div className={props.select === 'messages'?"option-item active":"option-item"} onClick={() => {props.setOption('messages');close();}}>messages</div>
                <div className={props.select === 'users'?"option-item active":"option-item"} onClick={() => {props.setOption('users');close();}}>users</div>
                <div className={props.select === 'events'?"option-item active":"option-item"} onClick={() => {props.setOption('events');close();history.push('/admin')}}>events</div>
                <div className="option-item delete">delete account</div>
            </div>
            
        </div>
    );
};

export default UserOptions;