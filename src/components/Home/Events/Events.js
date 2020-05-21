import React,{useEffect, useRef, useState} from 'react';
import './Event.scss';
import {useHistory}  from 'react-router-dom';
import {TimelineLite,Power2} from 'gsap';
const Events = () => {
    let timeline = new TimelineLite();
    let tileRef = useRef({tile:[]});
    useEffect(()=>{
         let observer = new IntersectionObserver(async (obj)=>{
            if(obj[0].intersectionRatio > 0){

                await animation();
                observer.unobserve(document.querySelector('.event-list'));
            }
               
                
        });
        observer.observe(document.querySelector('.event-list'));
        
    },[])

    const animation = () => {
        timeline.to(document.querySelector('.event-list'),0.2,{opacity:1,ease:Power2.easeInOut})
        .staggerFrom(tileRef.current['tile'],0.3,{y:-100,x:-100,opacity:0,ease:Power2.easeInOut},0.2)
        
    }
    let history = useHistory();
    return (
        <div className="events" id="events">
            <div className="heading">Events</div>
            <div className="event-list">
                {Array(7).fill("EVENT").map((card,index) => {
                    return (<div className="event-tile" ref={el => {tileRef.current.tile[index] = el}} key={"event"+index} onClick={() => history.push(`/register?event=${card+(index+1)}`)}>{card + (index+1)}</div>)
                })}
            </div>
        </div>
    );
};

export default Events;