import React from 'react';
import './Contact.scss';
import{IoIosSend} from 'react-icons/io';
import {FaGithubSquare,FaPhone,FaFacebookSquare,FaLinkedin,FaSnapchatSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
const Contact = () => {
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
        <div className="contact" id="contact">
            <div className="heading">Contact</div>
            <div className="container">
                <div className="form">
                    <div className="heading">
                        Reach Out to us
                    </div>
                    <div className="table-container">
                            <div className="label">Name</div>
                            <div className="input">
                                <input placeholder="Enter Name..."/>
                                <div className='error'></div>
                                </div>
                            
                            <div className="label">Email</div>
                            <div className="input">
                                <input placeholder="Enter Email..."/>
                                <div className='error'></div>
                                </div>
                            
                            <div className="label">Message</div>
                            <div className="input"><textarea placeholder="Enter Message..."></textarea></div>
                            
                    </div>
                    <div className="button">
                    <button>Submit <IoIosSend/></button>
                    </div>

                </div>
                <div className="social">
                    <div className="heading">Social</div>
                    <div className="tile-container">
                {Object.keys(social).map((social,index) => {
                    return(<div  className="tile" onClick={()=>window.open(social === 'email' ? "mailto:"+social[social]:social[social])}>{icon(social)}</div>)
                })}
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;