import React from 'react';
import openingIcon from '../../../assets/icons/clock.svg';
import visitIcon from '../../../assets/icons/marker.svg';
import contactIcon from '../../../assets/icons/phone.svg';

const InfoCards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-28'>

            <div className='flex items-center bg-gradient-to-r from-secondary to-primary py-10 px-10 rounded-lg'>
                <div className='pr-5'>
                    <img src={openingIcon} alt="" />
                </div>

                <div className='text-white'>
                    <h2 className="text-2xl mb-4"> Opening Hours </h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className='flex items-center bg-[#212121] py-10 px-10 rounded-lg'>
                <div className='pr-5'>
                    <img src={visitIcon} alt="" />
                </div>

                <div className='text-white'>
                    <h2 className="text-2xl mb-4"> Visit our location </h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>

            <div className='flex items-center bg-gradient-to-r from-secondary to-primary py-10 px-10 rounded-lg'>
                <div className='pr-5'>
                    <img src={contactIcon} alt="" />
                </div>

                <div className='text-white'>
                    <h2 className="text-2xl mb-4"> Contact us now </h2>
                    <p>+000 123 456789</p>
                </div>
            </div>

        </div>
    );
};

export default InfoCards;