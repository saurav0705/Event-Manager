import React, { useState, useEffect } from 'react';
import './EventBar.scss';
const EventBar = (props) => {
    const [selected,setSelected] = useState();

    // Listening to selected event change
    useEffect(()=>{
        setSelected(props.selected());
    },[props.selected])

    return (<>
        <div className="event-bar-proxy">
        </div>
        {/* rendering event list */}
        <div className="event-bar">
            {props.data.map(data => 
                (<div className={selected === data ? "event active":"event"} key={data} onClick={() => {setSelected(data);props.select(data)}}>{data}</div>))}
            
        </div>
        </>
    );
};

export default EventBar;