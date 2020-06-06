import React,{useEffect} from 'react';
import './GenerateId.scss';
import QRCode from 'qrcode.react';
import {useHistory} from 'react-router-dom';
import {TimelineLite,Power2} from 'gsap';
import {encrypt} from '../../../utilities/encrypt';
import htmlToImage from 'html-to-image';
import download from 'downloadjs';
const GenerateId = (props) => {
    let timeline = new TimelineLite();
    let history = useHistory();
    
    useEffect(()=>{animation()},[])
    
    const animation = () =>  {timeline.from(document.querySelector('.generate'),1,{opacity:0,ease:Power2.easeInOut})}
    


    const downloadQR = () => {
        const canvas = document.getElementById("qrcode");
        htmlToImage.toPng(canvas)
        .then(function (dataUrl) {
            download(dataUrl, props.data.name+"_registration.png");
        });
      }


    return (
        <div className="generate">
            <div className="id" id="pdf">
                <div className="thank-you">Thank You</div>
                <div className="message">You successfully registered for<span className="event-name"> {props.data.event} </span>and your registration id is <span className="registration-number">{props.data.registration_number}</span> . Please download your ID by clicking download button below.</div>
                <div className="id-card">
                <div className="event-name">{props.data.event}</div>
                <QRCode value={encrypt(props.data)} 
                        size={100}
                        id="qrcode"
                        level={"H"}
                        includeMargin={true}/>
                <div className="username">{props.data.name}</div>
                </div>
                
                <button className="download" onClick={() => downloadQR()}>DOWNLOAD</button>
                
            </div>
            
            <button className="download" onClick={() => history.push('/')}>OK</button>
        </div>
    );
};

export default GenerateId;