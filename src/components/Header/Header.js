import React, { useState,useEffect } from 'react';
import './Header.scss';
import {FaBars,FaUserCircle} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import Login from './Login/Login';
const Header = () => {
    const [open,setOpen] = useState(false);
    const [login,setLogin] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setLogin(true);
            var diff =(new Date().getTime() - new Date(localStorage.getItem('time')).getTime()) / 1000;
            diff /= 60;
            if(Math.abs(Math.round(diff)) > 48){
                logout();
            }

        }
    },[])
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
         window.scrollTo({ top: scrollDiv - 30, behavior: 'smooth'});
        }
    const logout = () => {
        history.push('/');
        localStorage.clear();
        setLogin(false);
    }
    return (
        <>
        <div className="header">
            <div className="header-left">
                <div className="header-item"><span className="sidebar" onClick={() => toggleNav()}><FaBars/></span> <span onClick={() => {goTo('banner')}}>Event Handler</span></div>
                <div className="header-item" onClick={() => goTo('events')}>Events</div>
                <div className="header-item" onClick={() => goTo('about')}>About</div>
                <div className="header-item" onClick={() => goTo('contact')}>Contact</div>
            </div>
            {login ? <div className="header-right" >
                <div className="icon" onClick={() => history.push('/user')}><FaUserCircle/></div>
                <div className="btn-login" onClick={() => logout()}>logout</div>
                </div>:
            <div className="header-right" onClick={() => {toggle()}}>
                <div className="btn-login">login</div>
            </div>}
            
        </div>
        <Login
        open={open}
        toggle={() => toggle()}
        success = {() => {setLogin(true);history.push('/user')}}
        />
        </>
    );
};

export default Header;