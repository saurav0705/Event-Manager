import React from 'react';
import './Event.scss';
import {useHistory}  from 'react-router-dom';
const Events = () => {
    let history = useHistory();
    return (
        <div className="events" id="events">
            <div className="heading">Events</div>
            <div className="event-list">
                {Array(20).fill("EVENT").map((card,index) => {
                    return (<div className="event-tile" key={"event"+index} onClick={() => history.push(`/register?event=${card+(index+1)}`)}>{card + (index+1)}</div>)
                })}
            </div>
        </div>
    );
};

export default Events;