import React from 'react';
import './Home.scss';
import Banner from './Banner/Banner';
import Events from './Events/Events';
import About from './About/About';
import Contact from './Contact/Contact';
const Home = () => {
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