import React, { useState } from 'react';
import{IoIosSend} from 'react-icons/io';
import {validate,checkActive} from '../../../../utilities/validation';
const ContactForm = () => {
    const [data,setData] = useState({name:"",email:"",message:""});
    const [error,setError] = useState({name:"",email:""});
    const [active,setActive] = useState(false);

    const changeHandler = (event) => {
        let obj = data;
        setError({...error,...validate(event)});
        obj[event.target.name] = event.target.value;
        setData({...obj});
        setActive(checkActive(data,error))
    }
    
    return (
        <div className="form">
                    <div className="heading">
                        Reach Out to us
                    </div>
                    <div className="table-container">
                            <div className="label">Name</div>
                            <div className="input">
                                <input placeholder="Enter Name..." name="name"  onChange={(event)=>changeHandler(event)}/>
                                <div className='error'>{error.name}</div>
                                </div>
                            
                            <div className="label">Email</div>
                            <div className="input">
                                <input placeholder="Enter Email..." name="email"  onChange={(event)=>changeHandler(event)}/>
                                <div className='error'>{error.email}</div>
                                </div>
                            
                            <div className="label">Message</div>
                            <div className="input"><textarea placeholder="Enter Message..." name="message"  onChange={(event)=>changeHandler(event)}></textarea></div>
                            
                    </div>
                    <div className={active ? "button":"button disabled"} onClick={()=>{ console.log(data);}}>
                    <button>Submit <IoIosSend/></button>
                    </div>

                </div>
    );
};

export default ContactForm;