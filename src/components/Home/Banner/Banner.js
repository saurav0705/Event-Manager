import React,{useEffect} from 'react';
import './Banner.scss';
import {IoMdPerson} from 'react-icons/io';
import {AiOutlineQrcode} from 'react-icons/ai';
import {TimelineLite,Power2} from 'gsap';
const Banner = () => {
    let timeline = new TimelineLite();
    useEffect(()=>{
        timeline.from(document.querySelector('#headline'),1,{y:-100,opacity:0,ease:Power2.easeInOut})
                .from(document.querySelector('#card-1'),1,{x:-100,opacity:0,ease:Power2.easeInOut})
                .from(document.querySelector('#card-2'),1,{rotate:0,x:-100,opacity:0,ease:Power2.easeInOut})
                
        

    },[])
    const bannerHeadLines = [
        'Managing Event Made Easier',
        'Get Yourself an event ID',
        'Ready To Attend Event'
    ]
    return (
        <div className="banner" id="banner">
            <div className="headline" id="headline">
            {bannerHeadLines.map((headline,index) => (<div className="text" key={"banner"+index}>{headline}</div>))}
            
            </div>
            <div className="image">
                <div className="card card-1" id="card-1">
                    <div className="title">Event</div>
                    <div className="icon"><IoMdPerson/></div>
                    <div className="qr"><AiOutlineQrcode/></div>
                    <div className="name">Jane Doe</div>
                </div>
                <div className="card card-2" id="card-2">
                <div className="title">Event</div>
                    <div className="icon"><IoMdPerson/></div>
                    <div className="qr"><AiOutlineQrcode/></div>
                    <div className="name">Jane Doe</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;