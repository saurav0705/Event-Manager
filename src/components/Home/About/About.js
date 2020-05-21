import React from 'react';
import './About.scss';
import {IoIosCreate} from 'react-icons/io';
import {FaRegistered} from 'react-icons/fa';
import {FiMonitor} from 'react-icons/fi';
const About = () => {
    return (
        <div className="about" id="about">
            <div className="heading">About</div>
            <div className="container">
                <div className="card">
                    <div className="icon"><IoIosCreate/></div>
                    <div className="title">Create An Event</div>
                </div>
                <div className="card">
                <div className="icon"><FaRegistered/></div>
                    <div className="title">Register user</div>
                </div>
                <div className="card">
                <div className="icon"><FiMonitor/></div>
                    <div className="title">Monitor stats</div>
                </div>
            </div>
            
        </div>
    );
};

export default About;