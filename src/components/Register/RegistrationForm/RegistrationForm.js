import React, { useState, useEffect } from 'react';
import './RegistrationForm.scss';
import {FiUpload} from 'react-icons/fi';
import {TimelineLite,Power2} from 'gsap';
const RegistrationForm = (props) => {
    const [data,setData] = useState({name:"",email:"",mobile:"",type:"self",tickets:"",id:""});
    const [error,setError] = useState({name:"",email:"",mobile:"",type:"",tickets:"",id:""});
    const [active,setActive] = useState(false);
    let timeline = new TimelineLite();
    useEffect(()=>{
        
        setData({...data,...props.data});
        checkActive();
    //    animation();
    },[props.data])
    useEffect(()=>{
        animation();
    },[])
    const animation = () => {
        timeline.from(document.querySelector('.register'),1,{opacity:0,ease:Power2.easeInOut})
        // .staggerFrom(tileRef.current['tile'],0.8,{y:-100,x:-100,opacity:0,ease:Power2.easeInOut},0.2)
        
    }
    const selectFile = () => {
        document.querySelector('.file').click();
    }
    const validate = (event) => {
        let obj = error;
        // eslint-disable-next-line default-case
        switch(event.target.name){
            case 'name':{
                console.log(/[0-9-/:-@[-`{-~]/gi.test(event.target.value));
                if(/[0-9-/:-@[-`{-~]/gi.test(event.target.value)){
                    obj["name"] = "No special character or number is allowed"
                }else{
                    obj["name"]=""
                }   
                setError({...obj}) 
            }
            // eslint-disable-next-line no-fallthrough
            case 'email':{
                if(event.target.value.length === 0){ obj["email"]="";setError({...obj});return;}    
                if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/gi.test(event.target.value)){
                        obj["email"] = "Not  a valid email"
                    }else{
                        obj["email"]=""
                    }   

            }
        }
    }
    const handleChange = (event) => {
        if(event.target.value === undefined){return;}
        checkActive();
        if(event.target.name === "id"){
            validateFileType(event.target.value);
        }
        if(event.target.name === "mobile" || event.target.name === "tickets"){
            if(event.target.value.length === 0 ){
                let obj = data;
                obj[event.target.name] = "";
                setData({...obj})
                return;
            }
            if(! isNaN(parseInt(event.target.value))){
                if(event.target.value.length < 11){
                    let obj = data;
                    obj[event.target.name] = event.target.value;
                    setData({...obj})
                    if(event.target.name === "mobile"){
                        let obj=error;
                        if(event.target.value.length!== 10){
                            obj["mobile"] = "10 digits required"
                        }else{
                            obj["mobile"] = ""
                        }
                        setError({...obj})
                    }
                }
            }
            return;
        }

        
        let obj = data;
        validate(event);
        obj[event.target.name] = event.target.value;
        setData({...obj});
        if(event.target.name === "id"){
            let obj = data;
            validate(event);
            obj[event.target.name] = event.target.files[0];
            setData({...obj});
        }
        checkActive();
    }

    const checkActive = () => {
        let ls = Object.keys(data).filter(key => data[key].length === 0);
        if(ls.length !== 0 ){setActive(false);return;}

        ls = Object.keys(error).filter(key => error[key].length !== 0);
        if(ls.length !== 0 ){setActive(false);return;}


        setActive(true);
    }
    function validateFileType(fileName){
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile==="jpg" || extFile==="jpeg" || extFile==="png"){
            let obj = error;
            obj['id'] ="";
            setError({...obj})
        }else{
            let obj = error;
            obj['id'] ="only JPG/PNG are allowed";
            setError({...obj})
        }   
    }
    return (
        <div className="register">
        <div className="heading">{data.event}</div>   
        <div className="form">
            <table>
                <tr>
                    <td><div className="label">name</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text" value={data.name} name="name" onChange={(event) => handleChange(event)}/></div>
                                            <div className="error">{error.name}</div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">email</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text" value={data.email} name="email" onChange={(event) => handleChange(event)}/></div>
                                            <div className="error">{error.email}</div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">mobile</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text"  value={data.mobile} name="mobile" onChange={(event) => handleChange(event)}/></div>
                        <div className="error">{error.mobile}</div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">Registration Type</div></td>
                    <td><div className="input">
                        <div className="box"><select  name="type" onChange={(event) => handleChange(event)}>
                                            <option value="self">Self</option>
                                            <option value="group">Group</option>
                                            <option value="corporate">Corporate</option>
                                            <option value="others">Others</option>
                                            </select>
                        </div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">Number Of Tickets</div></td>
                    <td><div className="input">
                        <div className="box"><input type="text"  value={data.tickets} name="tickets" onChange={(event) => handleChange(event)}/></div>
                        <div className="error"></div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td><div className="label">Upload ID</div></td>
                    <td><div className="input">
                        <div className="box">
                            <input type="file" className="file" name="id" accept="image/x-png,image/gif,image/jpeg" onChange={(event) => handleChange(event)}/>
                            <label for="file" onClick={() => selectFile()}><FiUpload/>{data.id.length === 0 ? " UPLOAD ID":" UPLOADED"}</label>
                            </div>
                                <div className="error">{error.id}</div>
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td></td>
                    <td><button className={active ? "":"disable"} onClick={() => props.submit(data)}>Submit</button></td>
                </tr>
            </table>
        </div> 
            
                    
        </div>
    );
};

export default RegistrationForm;