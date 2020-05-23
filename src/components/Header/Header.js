import React from 'react';
import './Header.scss';
import {FaBars} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
const Header = () => {
    let history = useHistory();
    const toggleNav = () => {
        let height = document.querySelector('.header-left').offsetHeight;
        if(height === 50){
        document.querySelector('.header-left').style.height = "auto";}
        else{
            document.querySelector('.header-left').style.height = "50px";
        }
    }
    const goTo = async (val) => {
        await history.push('/');
        if(val !== 'banner'){toggleNav();}
        scrollToComponent(val);
    }
    const scrollToComponent = (val) => {
    let scrollDiv = document.getElementById(val).offsetTop;
         window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
        }
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-item"><span className="sidebar" onClick={() => toggleNav()}><FaBars/></span> <span onClick={() => {goTo('banner')}}>Event Handler</span></div>
                <div className="header-item" onClick={() => goTo('events')}>Events</div>
                <div className="header-item" onClick={() => goTo('about')}>About</div>
                <div className="header-item" onClick={() => goTo('contact')}>Contact</div>
            </div>
            <div className="header-right" onClick={() => history.push('/admin')}>
                <div className="btn">login</div>
            </div>
        </div>
    );
};

export default Header;