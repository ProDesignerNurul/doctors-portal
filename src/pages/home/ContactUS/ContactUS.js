import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';
import appointment from '../../../assets/images/appointment.png';

const ContactUS = () => {
    return (

        <section className='py-12 mt-36' style={{background: `url(${appointment})`}}>
            <div className='w-[450px] mx-auto mb-10'>
            <div className='text-center mb-10'>
                <p className='text-primary font-bold text-xl'>Contact Us</p>
                <h2 className="text-4xl text-white font-semibold">Stay connected with us</h2>
            </div>
            <form>
                <input className='border border-gray-400 mb-5 w-full rounded-lg py-4 pl-5' type="email" name="email" id="" placeholder='Email Address' />
                <br />
                <input className='border border-gray-400 mb-5 w-full rounded-lg py-4 pl-5' type="text" name="subject" id="" placeholder='Subject' />
                <br />
                <input className='border border-gray-400 mb-5 w-full rounded-lg pl-5 h-32' type="text" name="message" id="" placeholder='Your Message' />
                <br />
                <ButtonPrimary type="submit">Submit</ButtonPrimary>
            </form>
        </div>
        </section>
    );
};

export default ContactUS;