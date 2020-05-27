import React, { useEffect,useState } from 'react';
import {getMessages} from '../../../utilities/api';
import Loading from '../../Utilities/Loading/Loading';
import ViewMessage from './ViewMessage';
const Messages = () => {
    const [data,setData] = useState();
    const [select,setSelect] =useState({name:"",email:"",message:""});
    const [open,setOpen] = useState(false);
    useEffect(()=>{
        getMessages((resp) => {if(!resp.message){setData(resp);}else{setData([])}});

    },[])

    const listMessages = (data) => {
        if(data.length === 0 ){return ("NO DATA")}

        return (data.map(message => {
            return (<div className="message-box" key={JSON.stringify(message._id)}>
                <div className="name">{message.name}</div>
                <div className="email">{message.email}</div>
                <div className="buttons">
                    <div className="button" onClick={() => {setOpen(!open);setSelect({...message});}}>View</div>
                    <div className="button delete">Delete</div>
                </div>
            </div>)
        }))

    }
    return (<>
        <div className="messages">
            {data ? listMessages(data):<Loading/>}
        </div>
        <ViewMessage
        open={open}
        toggle={() => setOpen(!open)}
        select={select}
        />
        </>

    );
};

export default Messages;