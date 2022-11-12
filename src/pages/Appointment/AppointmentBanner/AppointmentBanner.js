import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header style={{background: `url(${bgChair})`}}>
            <div className="hero mt-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                    <div className='lg:mr-10'>
                        <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        ></DayPicker>

                        <p className='text-center'> Your Date is Now : {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;