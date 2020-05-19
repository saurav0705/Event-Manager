import React from 'react';
import './Header.scss';
const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-item">Event Handler</div>
                <div className="header-item">Events</div>
                <div className="header-item">About</div>
                <div className="header-item">Contact</div>
            </div>
            <div className="header-right">
                <div className="header-item btn">Login</div>
                <div className="header-item btn">Sign up</div>
            </div>
        </div>
    );
};

export default Header;