import React from 'react';
import './Banner.scss';
import {IoMdPerson} from 'react-icons/io';
import {AiOutlineQrcode} from 'react-icons/ai';
const Banner = () => {
    const bannerHeadLines = [
        'Managing Event Made Easier',
        'Get Yourself an event ID',
        'Monitor Your Event'
    ]
    return (
        <div className="banner" id="banner">
            <div className="headline">
            {bannerHeadLines.map((headline,index) => (<div className="text" key={"banner"+index}>{headline}</div>))}
            
            </div>
            <div className="image">
                <div className="card card-1">
                    <div className="title">Event</div>
                    <div className="icon"><IoMdPerson/></div>
                    <div className="qr"><AiOutlineQrcode/></div>
                    <div className="name">Jane Doe</div>
                </div>
                <div className="card card-2">
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