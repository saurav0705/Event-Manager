import React, { useState, useEffect } from 'react';
import './Register.scss';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import FormReview from './FormReview/FormReview';
import GenerateId from './GenerateId/GenerateId';
import queryString from 'query-string';
const Register = ({location}) => {
    const [data,setData] = useState({event:"e"});
    const [active,setActive] = useState(1);
    useEffect(()=>{
        window.scrollTo(0,0);
        const { event} = queryString.parse(location.search);
        let obj = data;
        obj['event']=event;
       setData({...obj})

    },[])
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
                <div className={active === 1 ? "card-step active":"card-step"}>1</div>
                <div className="width"></div>
                <div className={active === 2 ? "card-step active":"card-step"}>2</div>
                <div className="width"></div>
                <div className={active === 3 ? "card-step active":"card-step"}>3</div>
            </div>
            {getView(active)}

            
        </div>
    );
};

export default Register;