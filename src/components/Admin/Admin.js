import React, { useEffect,useState } from 'react';
import './Admin.scss';
import EventBar from './EventBar/EventBar';
import EventStats from './EventStats/EventStats';
import {getEventsUser , getRegistration} from '../../utilities/api';
import Loading from '../Utilities/Loading/Loading';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';
const Admin = (props) => {
    const [data,setData] = useState();
    const [select,setSelected] = useState();
    const [stats,setStats] = useState([]);
    const [events,setEvents] = useState([]);
    const [message,setMessage] = useState('');
    let history = useHistory();
    
    //check pre-requisite before loading component
    useEffect(()=>{
        if(! localStorage.getItem('token')){history.push('/');}
        getEventsUser((resp) => {if(!resp.message){let obj = resp;setEvents([...obj.map(o => o.event_name)]);}else{setEvents([])}});
        getRegistration((resp) => {if(!resp.message){setData([...resp]);checkURL()}else{setMessage(resp.message)}});
        
    },[])

    //Monitors Select change
    useEffect(()=>{
        if(!data){return;}
        if(!select){return;}
        setStats();
        if(select === 'all'){
            setStats(data);
            return;
        }
        let obj = data;
        let payload = obj.filter(data => data.event_name === select);
        setStats([...payload]);
    },[select])

    //which fields should be shown in registartion table
    let fields = ['registration_number','name','email'];
    
    //check the url for any specific event for which user is looking for
    const checkURL = () => {
        const { event} = queryString.parse(props.location.search);
        if(event !== undefined){
            setSelected(event);
        }else{
            setSelected('all');
        }

    }

    //checks for error in any API call
    const checkError = () => {
        if(message){
            return message;
        }else{
            return <Loading/>
        }
    }

    //function to change current selected event
    const getSelect = () => select;

    
    return (<>
    {data ? 
        <div className="admin">
            <EventBar data={["all",...events]} selected={() => getSelect()} select={(event) => setSelected(event)}/>
            <EventStats data={stats} fields={fields} select={select}/>
        </div> :
        checkError()}
        </>
        
    );
};

export default Admin;