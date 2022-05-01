import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventories/>
            <Services/>
        </div>
    );
};

export default Home;