import React, { useEffect } from 'react';
import './Home.scss';
import Banner from './Banner/Banner';
import Events from './Events/Events';
import About from './About/About';
import Contact from './Contact/Contact';
const Home = () => {
    useEffect(()=>{
        setTimeout(() => window.scrollTo(0,0),300);
    },[])
    return (
        <div className="home">
           <Banner/>
           <Events/>
           <About/>
           <Contact/>
        </div>
    );
};

export default Home;