import React, { useState, useEffect } from 'react';
import './Register.scss';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import FormReview from './FormReview/FormReview';
import GenerateId from './GenerateId/GenerateId';
import queryString from 'query-string';
import  {registerUser} from '../../utilities/api';
const Register = ({location}) => {
    const [data,setData] = useState({event:"e"});
    const [active,setActive] = useState(1);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        window.scrollTo(0,0);
        const { event} = queryString.parse(location.search);
        let obj = data;
        obj['event']=event;
       setData({...obj})

    },[])
    
    const getView = (val) => {
        switch(val){
            case 1: return <RegistrationForm data={data} submit={(obj)=> {setData({...obj});setError('');setActive(2);} }/>
            case 2: return <FormReview loading={loading} error={error} data={data} back={() => back()} submit={() => {submitData();}}/>
            case 3: return <GenerateId data={data}/>
            default : return;
        }
    }
    const back = () => {
        setActive(1);
    }
    const submitData = async () => {
        setLoading(true);
        let data_form = JSON.parse(JSON.stringify(data));
        data_form['event_name'] = data['event'];
        data_form['image'] = data['id'];
        data_form['no_of_tickets'] = data['tickets'];
        data_form['mobile_number'] = data['mobile'];
        delete data_form['event'];
        delete data_form['id'];
        delete data_form['tickets'];
        delete data_form['mobile'];
        let form = new FormData();
        await Object.keys(data_form).map(key => form.append(key,data_form[key]));
        registerUser(form,(resp) => {setLoading(false);if(resp.message){setError(resp.message);}else{setData({...data,registration_number:resp.registration_number});setActive(3)}});



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