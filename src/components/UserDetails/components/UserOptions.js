import React from 'react';
import {AiFillCloseSquare} from 'react-icons/ai';
import {colorPallete} from '../../../utilities/randomColor';
import {useHistory} from 'react-router-dom';
import {FaUserEdit} from 'react-icons/fa';
import {AiFillMessage,AiTwotoneDelete} from 'react-icons/ai';
import {MdEventNote} from 'react-icons/md';
const UserOptions = (props) => {
    let history = useHistory();
    const close = () => {
        if(window.innerWidth <= 600){
        document.querySelector('.user-options').style.marginLeft = "-100%";}
    }
    return (
        <div className="user-options">
            <div className="close" onClick={() => close()}><AiFillCloseSquare/></div>
            <div className="icon" style={colorPallete()}>{props.data.id.username.toUpperCase().charAt(0)}</div>
            <div className="name">{props.data.id.username}</div>
            <div className="options">
                {props.data.is_admin ? <div className={props.select === 'messages'?"option-item active":"option-item"} onClick={() => {props.setOption('messages');close();}}><AiFillMessage/> messages</div>:null}
                {props.data.is_admin ?<div className={props.select === 'users'?"option-item active":"option-item"} onClick={() => {props.setOption('users');close();}}><FaUserEdit/> users</div>:null}
                <div className={props.select === 'events'?"option-item active":"option-item"} onClick={() => {props.setOption('events');close();}}><MdEventNote/> events</div>
                { ! props.data.is_admin ?<div className="option-item delete"><AiTwotoneDelete/> delete account</div>:null}
            </div>
            
        </div>
    );
};

export default UserOptions;