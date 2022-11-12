import React, { useState } from 'react';
import AbailableAppointment from '../AbailableAppointment/AbailableAppointment';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState( new Date());

    return (
        <div>

            <AppointmentBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AbailableAppointment
            selectedDate={selectedDate}
            ></AbailableAppointment>

        </div>
    );
};

export default Appointment;