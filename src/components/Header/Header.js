import React, { useState,useEffect } from 'react';
import './Header.scss';
import {FaBars,FaUserCircle} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import Login from './Login/Login';
import AddUser from '../UserDetails/components/AddUser';
const Header = () => {
    const [open,setOpen] = useState(false);
    const [login,setLogin] = useState(false);
    const [options,setOptions] = useState(false);
    const [register,setRegister] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    useEffect(()=>{
        if(localStorage.getItem('deleted')){
            logout();
            return;
        }
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
    const toggleOpacity = () => {
        setOptions(!options);
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
            {login ? <div className="header-right" onMouseLeave={() => toggleOpacity()}>
                <div className="icon" onMouseEnter={() => toggleOpacity()} ><FaUserCircle/></div>
                {options ? <div className="login-options">
                <div className="item" onClick={() => history.push('/user')}>DashBoard</div>
                <div className="item" onClick={() => history.push('/admin')}>Events Stats</div>
                <div className="item" onClick={() => logout()}>logout</div>
                </div>:null}
                </div>:
            <div className="header-right" >
                <div className="btn-login" onClick={() => {document.querySelector('.header-left').style.height = "50px";toggle()}}>login</div>
                <div className="btn-login" onClick={() => {document.querySelector('.header-left').style.height = "50px";setRegister(!register);}}>Sign Up</div>
            </div>}
            
        </div>
        <Login
        open={open}
        toggle={() => toggle()}
        success = {() => {setLogin(true);history.push('/user')}}
        />
        <AddUser
        open={register}
        toggle={() => setRegister(!register)}/>
        </>
    );
};

export default Header;