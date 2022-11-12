import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurServiceBanner from '../ourService/OurServiceBanner/OurServiceBanner';
import ServiceInfo from '../ourService/ServiceInfo/ServiceInfo';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>

            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceInfo></ServiceInfo>
            <OurServiceBanner></OurServiceBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;