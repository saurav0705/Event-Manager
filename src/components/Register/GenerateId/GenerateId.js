import React from 'react';
import './GenerateId.scss';
import QRCode from 'qrcode.react';
import {useHistory} from 'react-router-dom';

const GenerateId = (props) => {
    let history = useHistory();
    const data = {
        event:"event",
        "name": "saurav aggarwal",
        "email": "aggarwalsaurav98@gmail.com",
        "mobile": "1234567890",
        "type": "self",
        "tickets": "123456",
        "id": "https://drive.google.com/uc?id=10QFET3vVxDFZdSUaL0IfXILS53tL3Nfc"
      }
    return (
        <div className="generate">
            <div className="card" id="pdf">
                <div className="event">{data.event}</div>
                <div className="image"><img src={data.id} alt="profile" align="center"/></div>
                <div className="name">{data.name}</div>
                <QRCode value={JSON.stringify(data)} size={70}/>
            </div>
            <button className="download" onClick={() => history.push('/')}>OK</button>
        </div>
    );
};

export default GenerateId;