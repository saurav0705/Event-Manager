import React, { useEffect } from 'react';
import './FormReview.scss';
import {MdCall} from 'react-icons/md';
import {FaTicketAlt} from 'react-icons/fa';
import {TimelineLite,Power2} from 'gsap';
const FormReview = (props) => {
    let timeline = new TimelineLite();
    useEffect(()=>{
        PreviewImage(props.data.id);
        animation();
    },[])
    const animation = () => {
        timeline.from(document.querySelector('.form-view'),1,{opacity:0,ease:Power2.easeInOut})
       
        
    }
    function PreviewImage(image) {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(image);

        oFReader.onload = function (oFREvent) {
            document.getElementById("image").src = oFREvent.target.result;
        };
    };
    return (
        <div className="form-view">
        <div className="view">
            <div className="image">
            <img id="image" alt="profile"/>
            </div>
            <div className="info">
            <div className="event">{props.data.event}</div>
            <div className="name">{props.data.name}</div>
            <div className="email">{props.data.email}</div>
            <div className="type">Type : {props.data.type}</div>
            <div className="mobile"><MdCall/> {props.data.mobile}</div>
            <div className="tickets"><FaTicketAlt/> {props.data.tickets}</div>
            </div>    
        </div>
        <div className="buttons">
        <button onClick={() => props.back()}>back</button>
        <button onClick={() => props.submit()}>Submit</button>
        </div>
        </div>
    );
};

export default FormReview;