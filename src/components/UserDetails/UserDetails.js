import React,{useEffect} from 'react';
import './UserDetails.scss';
import {getUser} from '../../utilities/api';
const UserDetails = () => {
    useEffect(()=>{
        getUser((resp)=> console.log(resp));

    },[])
    return (
        <div className="user-details">
            
        </div>
    );
};

export default UserDetails;