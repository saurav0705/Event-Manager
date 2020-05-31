import React, { useEffect,useState } from 'react';
import './Admin.scss';
import Fakerator from 'fakerator';
import EventBar from './EventBar/EventBar';
import EventStats from './EventStats/EventStats';
import {getEventsUser , getRegistration} from '../../utilities/api';
import Loading from '../Utilities/Loading/Loading';
import queryString from 'query-string';
const Admin = (props) => {
    const [data,setData] = useState();
    const [select,setSelected] = useState();
    const [stats,setStats] = useState([]);
    const [events,setEvents] = useState([]);
    const [message,setMessage] = useState('');
    let fake = Fakerator();
    
    useEffect(()=>{
        getEventsUser((resp) => {if(!resp.message){let obj = resp;setEvents([...obj.map(o => o.event_name)]);}else{setEvents([])}});
        getRegistration((resp) => {if(!resp.message){setData([...resp]);checkURL()}else{setMessage(resp.message)}});
        
    },[])

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
    let fields = ['registration_number','name','email'];
    let types = [
        "self","corporate","group","others"
    ]
    const checkURL = () => {
        const { event} = queryString.parse(props.location.search);
        if(event !== undefined){
            setSelected(event);
        }else{
            setSelected('all');
        }

    }
    const payloadGenerator = () => {
       
        return  Array(parseInt(Math.random()*10000)).fill("data").map(data => {
            return {
                "event_name":events[parseInt(Math.random()*100)%events.length],
                "name":fake.names.name(),
                "email":fake.internet.email(),
                "mobile_number":parseInt(Math.random()*10000000000),
                "type":types[parseInt(Math.random()*100)%4],
                "no_of_tickets":parseInt(Math.random()*100),
                "registration_number":parseInt(Math.random()*10000000000),
                "registration_date": new Date().toISOString(),
                "image": "https://picsum.photos/200"


            }
        })
    }

    const print = () => {
        console.log(payloadGenerator());
    }
    const checkError = () => {
        if(message){
            return message;
        }else{
            return <Loading/>
        }
    }
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