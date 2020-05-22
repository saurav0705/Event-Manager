import React from 'react';
import {FaGithubSquare,FaPhone,FaFacebookSquare,FaLinkedin,FaSnapchatSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
const Social = () => {
    const icon = (key) => {
        switch(key.toUpperCase()){
            case 'EMAIL' : return <MdEmail/>
            case 'FACEBOOK': return <FaFacebookSquare/>
            case 'TWITTER' : return <FaTwitterSquare/>
            case 'LINKEDIN' : return <FaLinkedin/>
            case 'SNAPCHAT' : return <FaSnapchatSquare/>
            case 'INSTAGRAM' : return <FaInstagram/>
            case 'GITHUB' : return <FaGithubSquare/>
            case 'PHONE' : return <FaPhone/>
            default : return 'none'; 
        }

    }
    const social = {
        email:"",
        facebook:"",
        twitter:"",
        snapchat:"",
        instagram:"",
        linkedin:"",

    }
    return (
        <div className="social">
                    <div className="heading">Social</div>
                    <div className="tile-container">
                {Object.keys(social).map((social,index) => {
                    return(<div  className="tile" key={social} onClick={()=>window.open(social === 'email' ? "mailto:"+social[social]:social[social])}>{icon(social)}</div>)
                })}
                </div>
                </div>
    );
};

export default Social;