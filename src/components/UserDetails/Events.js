import React, { useEffect,useState } from 'react';
import {getEventsUser,deleteEvent} from '../../utilities/api';
import Loading from '../Utilities/Loading/Loading';
import { useHistory } from 'react-router-dom';
import {IoIosAddCircle} from 'react-icons/io';
import {FaShareAlt} from 'react-icons/fa';
import AddEvent from './AddEvent';
const Events = () => {
    const [data,setData] = useState();
    const [deleting,setDeleting] = useState(-1);
    const [open,setOpen] = useState(false);
    let history = useHistory();    

    const toggle = () => setOpen(!open)

    useEffect(()=>{getEvents()},[])

    const getEvents = () =>  getEventsUser((resp) => {if(!resp.message){let obj = resp;setData([...obj]);}else{setData([])}});
    

    const deleteEvents = (event,index) => {
        setDeleting(index);
        deleteEvent({event_name:event},(response)=>{setDeleting(-1);if(response.status === "Success"){deleteItem(index)}});
    }

    const deleteItem = (index) => {
        let obj = data.filter((dat,ind) => ind !== index)
        setData([...obj]);
    }
    
    const addEvent = (event) => {
        let obj = data;
        setData([...obj,{event_name:event}]);
    }

    const listEvents = (data) => {
        if(data.length === 0 ){return ("NO DATA")}
        const share = (val) => {
        let EVENT_URL = window.location.origin + "/register?event=" + encodeURIComponent(val);
        if (navigator.share) {
            navigator.share({
              title: 'Event Registration URL',
              url: EVENT_URL
            }).then(() => {
              console.log('Thanks for sharing!');
            })
            .catch(console.error);
          } else {
            navigator.clipboard.writeText(EVENT_URL);
            alert('copied to clipboard')
          }

    }

        return (data.map((event,index) => {
            return (<div className="message-box" key={"message"+index}>
                <div className="name">{event.event_name}</div>
                {deleting !== index ?
                <div className="buttons">
                    <div className="button" onClick={() => history.push(`/admin?event=${event.event_name}`)}>View</div>
                    <div className="button delete" onClick={() => deleteEvents(event.event_name,index)}>Delete</div>
                    <div className="button share" onClick={() => share(event.event_name)}><FaShareAlt/> share</div>
                </div>:<Loading/>}
            </div>)
        }))

    }
    return (<>
        <div className="heading-box">
            <div className="heading">Events</div>
            <div className="add" onClick={() => toggle()}><IoIosAddCircle/> add</div>
        </div>
        <div className="messages">
            {data ? listEvents(data):<Loading/>}
        </div>
        <AddEvent
        open={open}
        toggle={toggle}
        add={(event) => addEvent(event)}/>
        </>
    );
};

export default Events;