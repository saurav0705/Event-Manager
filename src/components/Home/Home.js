import React from 'react';
import './Home.scss';
import Banner from './Banner/Banner';
import Events from './Events/Events';
const Home = () => {
    return (
        <div className="home">
           <Banner/>
           <Events/>
        </div>
    );
};

export default Home;