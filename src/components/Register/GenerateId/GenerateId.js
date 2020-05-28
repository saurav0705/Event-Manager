import React,{useEffect} from 'react';
import './GenerateId.scss';
import QRCode from 'qrcode.react';
import {useHistory} from 'react-router-dom';
import {TimelineLite,Power2} from 'gsap';
const GenerateId = (props) => {
    let timeline = new TimelineLite();
    let history = useHistory();
      useEffect(()=>{
        PreviewImage(props.data.id);
        animation();
    },[])
    const animation = () => {
        timeline.from(document.querySelector('.generate'),1,{opacity:0,ease:Power2.easeInOut})
        // .staggerFrom(tileRef.current['tile'],0.8,{y:-100,x:-100,opacity:0,ease:Power2.easeInOut},0.2)
        
    }
      function PreviewImage(image) {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(image);

        oFReader.onload = function (oFREvent) {
            document.getElementById("image").src = oFREvent.target.result;
        };
    };
    const downloadQR = () => {
        const canvas = document.getElementById("qrcode");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = props.data.name+"_registration_id.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
    return (
        <div className="generate">
            <div className="id" id="pdf">
                <div className="event">{props.data.event}</div>
                <div className="image"><img id="image" alt="profile" align="center"/></div>
                <div className="name">{props.data.name}</div>
                <QRCode value={JSON.stringify(props.data)} 
                        id="qrcode"
                        size={200}
                        level={"H"}
                        includeMargin={true}/>
                <button className="download" onClick={() => downloadQR()}>DOWNLOAD</button>
                
            </div>
            
            <button className="download" onClick={() => history.push('/')}>OK</button>
        </div>
    );
};

export default GenerateId;