import React, { useEffect,useState } from 'react';
import './Admin.scss';
import Fakerator from 'fakerator';
import EventBar from './EventBar/EventBar';
import EventStats from './EventStats/EventStats';
import {getEventsUser , getRegistration} from '../../utilities/api';
const Admin = () => {
    const [data,setData] = useState();
    const [select,setSelected] = useState('all');
    const [stats,setStats] = useState([]);
    const [events,setEvents] = useState([]);
    let fake = Fakerator();
    
    useEffect(()=>{
        getEventsUser((resp) => {if(!resp.message){let obj = resp;setEvents([...obj.map(o => o.event_name)]);}else{setEvents([])}});
        getRegistration((resp) => console.log(resp));
        
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
        let payload = obj.filter(data => data.event === select);
        setStats([...payload]);


    },[select])
    let fields = ['registration_number','name','email'];
    let types = [
        "self","corporate","group","others"
    ]

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
    return (<>
        <div className="admin">
            
            <EventBar data={["all",...events]} select={(event) => setSelected(event)}/>
            <EventStats data={stats} fields={fields} select={select}/>
        </div>
        </>
        
    );
};

export default Admin;