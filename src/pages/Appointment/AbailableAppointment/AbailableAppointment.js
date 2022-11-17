import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loader from '../../share/Loader/Loader';
import BookingModal from '../BookingAppointment/BookingModal';
import AppointmentOption from './AppointmentOption';

const AbailableAppointment = ({ selectedDate }) => {

    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');


    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading) {
        return <Loader></Loader>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))
    //         .catch(err => console.error(err))
    // }, [])

    return (
        <div className='mt-64'>
            <p className="text-center text-secondary font-bold mb-24">Your Selected Date : {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
        </div>
    );
};

export default AbailableAppointment;