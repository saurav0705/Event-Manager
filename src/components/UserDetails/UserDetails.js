import React,{useEffect,useState} from 'react';
import './UserDetails.scss';
import {getUser} from '../../utilities/api';
import UserOptions from './UserOptions';
import {AiFillRightSquare} from 'react-icons/ai';
import Messages from './Messages';
import Loading from '../Utilities/Loading/Loading';
import Events from './Events';
import Users from './Users';
import { useHistory } from 'react-router-dom';
const UserDetails = () => {
    const [user,setUser] = useState();
    const [select,setSelect] = useState('events');
    let history = useHistory();
    
    useEffect(()=>{
        if(!localStorage.getItem('token')){history.push('/');return;}
        getUser((resp)=> {setUser({...resp});});
    },[])

    const open = () =>   document.querySelector('.user-options').style.margin = "0";

    const viewComponent = (value) => {
        switch(value){
            case 'messages' : return <Messages/>
            case 'events' : return <Events/>
            case 'users' : return <Users/>
            default : return null;
        }
    }
    
    return (
        <div className="user-details">
            
            {user ? <UserOptions data={user} select={select} setOption={(val) => setSelect(val)}/> : <Loading/>}
            <div className="side-drawer" onClick={() => open()}><AiFillRightSquare/></div>
            <div className="component">
            {viewComponent(select)}
            </div>
            
        </div>
    );
};

export default UserDetails;