import React, { useState } from 'react';
import './Register.scss';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import FormReview from './FormReview/FormReview';
import GenerateId from './GenerateId/GenerateId';
const Register = () => {
    const [data,setData] = useState({event:"event"});
    const [active,setActive] = useState(1);
    const getView = (val) => {
        switch(val){
            case 1: return <RegistrationForm data={data} submit={(obj)=> {setActive(2);setData({...data,...obj})} }/>
            case 2: return <FormReview data={data} back={() => back()} submit={() => setActive(3)}/>
            case 3: return <GenerateId data={data}/>
            default : return;
        }
    }
    const back = () => {
        setActive(1);
    }
    return (
        <div className="register">
            <div className="steps">
                <div className={active === 1 ? "card active":"card"}>1</div>
                <div className="width"></div>
                <div className={active === 2 ? "card active":"card"}>2</div>
                <div className="width"></div>
                <div className={active === 3 ? "card active":"card"}>3</div>
            </div>
            {getView(active)}

            
        </div>
    );
};

export default Register;