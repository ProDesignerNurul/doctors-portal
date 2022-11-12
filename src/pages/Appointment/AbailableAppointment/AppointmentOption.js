import React from 'react';


const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
            <div className='text-center py-11 shadow-lg rounded-lg hover:bg-slate-100'>
                <h2 className="text-2xl text-primary mb-3 font-semibold">{name}</h2>
                <p className='mb-3'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='mb-3'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Availbe</p>
                
                <label onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary">BOOK APPOINTMET</label>
            </div>
    );
};

export default AppointmentOption;