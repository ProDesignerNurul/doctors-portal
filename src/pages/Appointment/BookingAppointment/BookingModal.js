import { format } from 'date-fns';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;

    const successToast = () => toast("Appointment Successfully !!!");

    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        console.log(booking)
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-12">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className=" mb-6 input input-bordered w-full" />
                        <select name="slot" className="select select-bordered w-full mb-6">

                            {
                                slots.map((slot, idx) => <option
                                    key={idx}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Full Name" className=" mb-6 input input-bordered w-full" />
                        <input name="email" type="text" placeholder="Email" className=" mb-6 input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Phone Number" className=" mb-6 input input-bordered w-full" />
                        <br />
                        <input onClick={successToast} className='btn w-full' type="submit" value="Submit" />
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;