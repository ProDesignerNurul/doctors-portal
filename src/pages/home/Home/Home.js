import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import OurServiceBanner from '../ourService/OurServiceBanner/OurServiceBanner';
import ServiceInfo from '../ourService/ServiceInfo/ServiceInfo';


const Home = () => {
    return (
        <div className='mx-5'>

            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceInfo></ServiceInfo>
            <OurServiceBanner></OurServiceBanner>

        </div>
    );
};

export default Home;