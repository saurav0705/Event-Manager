import React, { useEffect,useState } from 'react';
import {getAdmins,deleteEvent} from '../../../utilities/api';
import Loading from '../../Utilities/Loading/Loading';
import { useHistory } from 'react-router-dom';
import {IoIosAddCircle} from 'react-icons/io';
import AddUser from './AddUser';
const Users = () => {
    const [data,setData] = useState();
    const [deleting,setDeleting] = useState(-1);
    const [open,setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open);
    }
    let history = useHistory()
    useEffect(()=>{
        getUsers();
    },[])
    const getUsers = () => {
        getAdmins((resp) => {if(!resp.message){let obj = resp;setData([...obj]);}else{setData([])}});
    }

    const deleteUser = (event,index) => {
        // setDeleting(index);
        // deleteEvent({event_name:event},(response)=>{setDeleting(-1);if(response.status === "Success"){deleteItem(index)}});

    }
    const deleteItem = (index) => {
        let obj = data.filter((dat,ind) => ind !== index)
        setData([...obj]);
    }
    
    const addUser = (user) => {
        let obj = data;
        setData([...obj,{username:user}]);
    }
    const listUser = (data) => {
        if(data.length === 0 ){return ("NO DATA")}

        return (data.map((event,index) => {
            return (<div className="message-box" key={"message"+index}>
                <div className="name">{event.username}</div>
                {deleting !== index ?
                <div className="buttons">
                    {/* <div className="button" onClick={() => history.push(`/admin?event=${event.event_name}`)}>View</div> */}
                    <div className="button delete" onClick={() => deleteUser(event.event_name,index)}>Delete</div>
                </div>:<Loading/>}
            </div>)
        }))

    }
    return (<>
        <div className="heading-box">
            <div className="heading">Users</div>
            <div className="add" onClick={() => toggle()}><IoIosAddCircle/> add</div>
        </div>
        <div className="messages">
            {data ? listUser(data):<Loading/>}
        </div>
        <AddUser
        open={open}
        toggle={toggle}
        add={(event) => addUser(event)}/>
        </>
    );
};

export default Users;