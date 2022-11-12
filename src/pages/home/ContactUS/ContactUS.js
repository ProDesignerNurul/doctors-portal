import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary';

const ContactUS = () => {
    return (
        <div className='w-[450px] mx-auto mb-10'>
            <div className='text-center'>
                <p className='text-primary'>Contact Us</p>
                <h2 className="text-4xl">Stay connected with us</h2>
            </div>
            <form>
                <input className='border border-gray-400 mb-5 w-full rounded-lg' type="email" name="email" id="" />
                <br />
                <input className='border border-gray-400 mb-5 w-full' type="text" name="subject" id="" />
                <br />
                <ButtonPrimary type="submit">Submit</ButtonPrimary>
            </form>
        </div>
    );
};

export default ContactUS;