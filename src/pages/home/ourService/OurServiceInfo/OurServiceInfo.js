import React from 'react';

const OurServiceInfo = ({service}) => {

    const {name, icon, info} = service;

    return (
        <div className='text-center p-11 shadow-lg rounded-lg hover:bg-stone-100'>
            <div className='flex justify-center mb-4'>
                <img src={icon} alt="" />
            </div>
            <div>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p>{info}</p>
            </div>
        </div>
    );
};

export default OurServiceInfo;