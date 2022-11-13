import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;

    const notify = () => toast("Appointment Successfully");

    return (
            <div className='text-center py-11 shadow-lg rounded-lg hover:bg-slate-100'>
                <h2 className="text-2xl text-primary mb-3 font-semibold">{name}</h2>
                <p className='mb-3'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='mb-3'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Availbe</p>
                
                <label 
                disabled={slots.length === 0}
                onClick={() => (setTreatment(option), notify)} 
                htmlFor="booking-modal" 
                className="btn btn-primary"
                >BOOK APPOINTMET</label>
                <ToastContainer></ToastContainer>
            </div>
    );
};

export default AppointmentOption;