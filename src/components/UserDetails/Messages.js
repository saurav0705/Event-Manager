import React, { useEffect,useState } from 'react';
import {getMessages,deleteMessage} from '../../utilities/api';
import Loading from '../Utilities/Loading/Loading';
import ViewMessage from './ViewMessage';
const Messages = () => {
    const [data,setData] = useState();
    const [select,setSelect] =useState({name:"",email:"",message:""});
    const [open,setOpen] = useState(false);
    const [deleting,setDeleting] = useState(-1);
    
    useEffect(()=>{getMsg()},[])

    const getMsg = () =>   getMessages((resp) => {if(!resp.message){let obj = resp;setData([...obj]);}else{setData([])}});
    

    const deleteMsg = (data,index) => {
        setDeleting(index);
        deleteMessage(data,(response)=>{setDeleting(-1);if(response.status === "Success"){deleteItem(index)}});

    }

    const deleteItem = (index) => {
        let obj = data.filter((dat,ind) => ind !== index)
        setData([...obj]);
    }

    const listMessages = (data) => {
        if(data.length === 0 ){return ("NO DATA")}

        return (data.map((message,index) => {
            return (<div className="message-box" key={"message"+index}>
                <div className="name">{message.name}</div>
                <div className="email">{message.email}</div>
                {deleting !== index ?
                <div className="buttons">
                    <div className="button" onClick={() => {setOpen(!open);setSelect({...message});}}>View</div>
                    <div className="button delete" onClick={() => deleteMsg(message,index)}>Delete</div>
                </div>:<Loading/>}
            </div>)
        }))

    }
    return (<>
        <div className="heading-box">
            <div className="heading">Messages</div>
        </div>
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