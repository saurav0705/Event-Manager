import React,{useEffect, useRef, useState} from 'react';
import './Event.scss';
import {useHistory}  from 'react-router-dom';
import {TimelineLite,Power2} from 'gsap';
import {getEvents} from '../../../utilities/api';
import Loading from '../../Utilities/Loading/Loading';
const Events = () => {
    let timeline = new TimelineLite();
    let tileRef = useRef({tile:[]});
    const [data,setData] = useState([]);
    const [error,setError] = useState('');
    const [active,setActive] = useState(false);
    useEffect(()=>{
        setTimeout(() => {getEvents((response)=>{
            if(response['error']){
                setError(response['error']);
            }
            setData([...response]);
            setActive(true);
        });},2000);
         let observer = new IntersectionObserver(async (obj)=>{
            if(obj[0].intersectionRatio > 0.002){

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
    const showMore = () => {
        document.querySelector('.event-list').style.height = "auto";
        document.querySelector('.show-more').style.opacity = "0";
    }
    let history = useHistory();
    return (
        <div className="events" id="events">
            <div className="heading">Events</div>
             
            <div className="event-list">
            {error.length !==0 ? <div className="event-tile error">{error}</div> :
                <>
                {!active ? <Loading/>:null}
                {data.length === 0 && active ? <div className="event-tile">No Events Are Going On</div>:null}
                {data.map((card,index) => {
                    return (<div className="event-tile" ref={el => {tileRef.current.tile[index] = el}} key={"event "+index} >
                            <div className="title">{card.event_name}</div>
                            <div className="button" onClick={() => history.push(`/register?event=${card.event_name}`)}>register</div>
                            </div>)
                })}</>}
            </div>
            <div className="show-more" onClick={() => showMore()}>Show more</div>
        </div>
    );
};

export default Events;