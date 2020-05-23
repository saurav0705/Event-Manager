import React, { useEffect,useState } from 'react';
import './Admin.scss';
import Fakerator from 'fakerator';
import EventBar from './EventBar/EventBar';
import EventStats from './EventStats/EventStats';
const Admin = () => {
    const [data,setData] = useState([]);
    const [select,setSelected] = useState();
    const [stats,setStats] = useState([]);
    let fake = Fakerator();
    
    useEffect(()=>{
        setData(payloadGenerator());
        setStats(payloadGenerator());
        // setTimeout(()=>setSelected("all"),2000);
        
    },[])

    useEffect(()=>{
        if(!select){return;}
        if(select === 'all'){
            setStats(data);
            return;
        }
        let obj = data;
        let payload = obj.filter(data => data.event === select);
        setStats([...payload]);


    },[select])
    let events = [
        "hackit","hack.com","meetuup","quit","tesing-again"
    ]
    let types = [
        "self","corporate","group","others"
    ]

    const payloadGenerator = () => {
       
        return  Array(parseInt(Math.random()*100)).fill("data").map(data => {
            return {
                "event":events[parseInt(Math.random()*100)%5],
                "name":fake.names.name(),
                "email":fake.internet.email(),
                "number":fake.phone.number(),
                "type":types[parseInt(Math.random()*100)%4],
                "tickets":parseInt(Math.random()*100),
                "id":parseInt(Math.random()*10000000000)

            }
        })
    }
    return (
        <div className="admin">
            <EventBar data={["all",...events]} select={(event) => setSelected(event)}/>
            <EventStats data={stats}/>
        </div>
    );
};

export default Admin;