import React from 'react';
import './Event.scss'
const Events = () => {
    return (
        <div className="events">
            <div className="heading">Events</div>
            <div className="event-list">
                {Array(20).fill("EVENT").map((card,index) => {
                    return (<div className="event-tile" key={"event"+index}>{card + (index+1)}</div>)
                })}
            </div>
        </div>
    );
};

export default Events;