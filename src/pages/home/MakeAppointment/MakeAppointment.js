import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section className='mt-20 md:mt-32 lg:mt-44' 
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img  src={doctor} alt="" className=" -mb-4 -mt-36 lg:w-1/2 hidden md:block lg:block rounded-lg" />
                    <div>
                        <h4 className='text-primary'>Appointment</h4>
                        <h1 className="text-5xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;