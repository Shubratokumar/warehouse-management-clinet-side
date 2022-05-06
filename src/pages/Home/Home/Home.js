import React from 'react';
import Banner from '../Banner/Banner';
import FreeTrial from '../FreeTrial/FreeTrial';
import Inventories from '../Inventories/Inventories';
import Services from '../Services/Services';
import Contact from './../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventories/>
            <Services/>
            <FreeTrial/>
            <Contact/>
        </div>
    );
};

export default Home;