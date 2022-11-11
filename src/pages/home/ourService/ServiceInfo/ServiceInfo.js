import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import teeth from '../../../../assets/images/whitening.png';
import OurServiceInfo from '../OurServiceInfo/OurServiceInfo';

const ServiceInfo = () => {

    const serviceInfo = [
        {
            id: 1,
            icon: fluoride,
            name: 'Fluoride Treatment',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            icon: cavity,
            name: 'Cavity Filling',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            icon: teeth,
            name: 'Teeth Whitening',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        }
    ];

    return (
        <div className='mb-36'>
            <div className='text-center mb-16'>
                <h3 className='text-5'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    serviceInfo.map( service => <OurServiceInfo
                    key={service.id}
                    service={service}
                    ></OurServiceInfo>)
                }
            </div>
        </div>
    );
};

export default ServiceInfo;