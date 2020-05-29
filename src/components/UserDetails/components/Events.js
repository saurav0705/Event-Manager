import React, { useEffect,useState } from 'react';
import {getEventsUser,deleteEvent} from '../../../utilities/api';
import Loading from '../../Utilities/Loading/Loading';
import { useHistory } from 'react-router-dom';

const Events = () => {
    const [data,setData] = useState();
    const [deleting,setDeleting] = useState(-1);
    let history = useHistory()
    useEffect(()=>{
        getEvents()
    },[])
    const getEvents = () => {
        getEventsUser((resp) => {if(!resp.message){let obj = resp;setData([...obj]);}else{setData([])}});
    }

    const deleteEvents = (event,index) => {
        setDeleting(index);
        deleteEvent({event_name:event},(response)=>{setDeleting(-1);if(response.status === "Success"){deleteItem(index)}});

    }
    const deleteItem = (index) => {
        let obj = data.filter((dat,ind) => ind !== index)
        setData([...obj]);
    }
    
    const listEvents = (data) => {
        if(data.length === 0 ){return ("NO DATA")}

        return (data.map((event,index) => {
            return (<div className="message-box" key={"message"+index}>
                <div className="name">{event.event_name}</div>
                {deleting !== index ?
                <div className="buttons">
                    <div className="button" onClick={() => history.push(`/admin?event=${event.event_name}`)}>View</div>
                    <div className="button delete" onClick={() => deleteEvents(event.event_name,index)}>Delete</div>
                </div>:<Loading/>}
            </div>)
        }))

    }
    return (
        <div className="messages">
            {data ? listEvents(data):<Loading/>}
        </div>
    );
};

export default Events;