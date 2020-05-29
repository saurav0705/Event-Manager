import React, { useEffect,useState } from 'react';
import {getEventsUser} from '../../../utilities/api';
import Loading from '../../Utilities/Loading/Loading';

const Events = () => {
    const [data,setData] = useState();
    const [deleting,setDeleting] = useState(-1);
    
    useEffect(()=>{
        getEvents()
    },[])
    const getEvents = () => {
        getEventsUser((resp) => {if(!resp.message){let obj = resp;setData([...obj]);}else{setData([])}});
    }
    
    const listEvents = (data) => {
        if(data.length === 0 ){return ("NO DATA")}

        return (data.map((event,index) => {
            return (<div className="message-box" key={"message"+index}>
                <div className="name">{event.event_name}</div>
                {deleting !== index ?
                <div className="buttons">
                    <div className="button" onClick={() => console.log('test')}>View</div>
                    <div className="button delete" onClick={() => console.log(index)}>Delete</div>
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