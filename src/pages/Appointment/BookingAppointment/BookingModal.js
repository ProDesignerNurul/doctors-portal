import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;

    const date = format(selectedDate, 'PP');

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-12">{name}</h3>
                    <form >
                        <input type="text" value={date} disabled className=" mb-6 input input-bordered w-full" />
                        <select className="select select-bordered w-full mb-6">
                            
                            {
                                slots.map( slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" className=" mb-6 input input-bordered w-full" />
                        <input type="text" placeholder="Phone Number" className=" mb-6 input input-bordered w-full" />
                        <input type="text" placeholder="Email" className=" mb-6 input input-bordered w-full" />
                        <br />
                        <input className='btn w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;