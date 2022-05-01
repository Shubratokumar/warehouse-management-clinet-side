import React from 'react';
import Banner from '../Banner/Banner';
import FreeTrial from '../FreeTrial/FreeTrial';
import Inventories from '../Inventories/Inventories';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventories/>
            <Services/>
            <FreeTrial/>
        </div>
    );
};

export default Home;