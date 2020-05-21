import React,{useRef,useEffect} from 'react';
import './About.scss';
import {IoIosCreate} from 'react-icons/io';
import {FaIdCardAlt} from 'react-icons/fa';
import {FiMonitor} from 'react-icons/fi';
import {TimelineLite,Power2} from 'gsap';
const About = () => {
    let timeline = new TimelineLite();
    let tileRef = useRef({tile:[]});
    useEffect(()=>{
         let observer = new IntersectionObserver(async (obj)=>{
            if(obj[0].intersectionRatio > 0){

                await animation();
                observer.unobserve(document.querySelector('.about'));
            }
               
                
        });
        observer.observe(document.querySelector('.about'));
        
    },[])

    const animation = () => {
        timeline.to(document.querySelector('.about'),0.2,{opacity:1,ease:Power2.easeInOut})
        .staggerFrom(tileRef.current['tile'],0.8,{y:-100,x:-100,opacity:0,ease:Power2.easeInOut},0.2)
        
    }
    
    return (
        <div className="about" id="about">
            <div className="heading">About</div>
            <div className="container">
                <div className="card" ref={el => {tileRef.current.tile[0] = el}}>
                    <div className="icon"><IoIosCreate/></div>
                    <div className="title">Register In An Event</div>
                </div>
                <div className="card" ref={el => {tileRef.current.tile[1] = el}}>
                <div className="icon"><FaIdCardAlt/></div>
                    <div className="title">Get Yourself An ID</div>
                </div>
                <div className="card" ref={el => {tileRef.current.tile[2] = el}}>
                <div className="icon"><FiMonitor/></div>
                    <div className="title">Ready For The Event</div>
                </div>
            </div>
            
        </div>
    );
};

export default About;