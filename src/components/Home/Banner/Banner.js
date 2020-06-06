import React,{useEffect, useRef} from 'react';
import './Banner.scss';
import {IoMdPerson} from 'react-icons/io';
import {AiOutlineQrcode} from 'react-icons/ai';
import {TimelineLite,Power2} from 'gsap';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;
const Banner = () => {
    let references = useRef({headline:"",card1:"",card2:""});
    let timeline = new TimelineLite();
    useEffect(()=>  {timeline.from(references.current.headline,1,{y:-100,opacity:0,ease:Power2.easeInOut})
                            .from(references.current.card1,1,{x:-100,opacity:0,ease:Power2.easeInOut})
                            .from(references.current.card2,1,{rotate:0,x:-100,opacity:0,ease:Power2.easeInOut})},[])
    
    const bannerHeadLines = [
        'Managing Events Made Easier',
        'Register for an Event',
        'Host Your Own Event'
    ]

    return (
        <div className="banner" id="banner">
            <div className="headline" id="headline" ref = {(el)=>{references.current.headline = el}}>
            {bannerHeadLines.map((headline,index) => (<div className="text" key={"banner"+index}>{headline}</div>))}
            
            </div>
            <div className="image">
                <div className="card card-1" ref = {(el)=>{references.current.card1 = el}}>
                    <div className="title">Event</div>
                    <div className="icon"><IoMdPerson/></div>
                    <div className="qr"><AiOutlineQrcode/></div>
                    <div className="name">Jane Doe</div>
                </div>
                <div className="card card-2" ref = {(el)=>{references.current.card2 = el}}>
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