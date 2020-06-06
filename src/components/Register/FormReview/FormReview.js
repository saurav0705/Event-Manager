import React, { useEffect, useState } from 'react';
import './FormReview.scss';
import {MdCall,MdEvent,MdEmail,MdPerson} from 'react-icons/md';
import {FaTicketAlt} from 'react-icons/fa';
import {TimelineLite,Power2} from 'gsap';
import Loading from '../../Utilities/Loading/Loading';
const FormReview = (props) => {
    let timeline = new TimelineLite();
    
    useEffect(()=>{
        PreviewImage(props.data.id);
        animation();
    },[])


    const animation = () =>   {timeline.from(document.querySelector('.form-view'),1,{opacity:0,ease:Power2.easeInOut})}

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
            <div className="event"><MdEvent/>{props.data.event}</div>
            <div className="name"><MdPerson/>{props.data.name}</div>
            <div className="email"><MdEmail/>{props.data.email}</div>
            <div className="mobile"><MdCall/> {props.data.mobile}</div>
            <div className="tickets"><FaTicketAlt/> {props.data.tickets}</div>
            <div className="type">Category : {props.data.type}</div>
            </div>    
        </div>
        <div className="error">{props.error}</div>
        {props.loading ? <Loading/>:
        <div className="buttons">
        <button onClick={() => props.back()}>back</button>
        <button onClick={() => props.submit()}>Submit</button>
        </div>}
        </div>
    );
};

export default FormReview;