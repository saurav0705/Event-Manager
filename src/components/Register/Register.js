import React, { useState } from 'react';
import './Register.scss';
import RegistrationForm from './RegistrationForm/RegistrationForm';
const Register = () => {
    const [data,setData] = useState({});
    const [active,setActive] = useState(1);
    return (
        <div className="register">
            <div className="steps">
                <div className={active === 1 ? "card active":"card"}>1</div>
                <div className="width"></div>
                <div className={active === 2 ? "card active":"card"}>2</div>
            </div>
            {active === 1 ? 
            <RegistrationForm
            submit = {(obj) => {setActive(2);setData({...obj})}}
            />:null}

            
        </div>
    );
};

export default Register;