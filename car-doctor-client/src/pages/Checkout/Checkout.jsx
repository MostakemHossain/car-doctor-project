import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import banner from '../../assets/images/services/3.jpg'
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    console.log(service)
    const { title, price, _id, img } = service;


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const date = form.date.value;
        const message = form.message.value;


        const order = {
            service_id: _id,
            service: title,
            img,
            name, email, price, phone, location, date, message
        }
        console.log(order)

        fetch('http://localhost:4000/bookings',
            {
                method: 'POST',
                headers: {

                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)

            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Booking successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
            .catch(error => {
                // If there's an error, show an error message
                toast.error('Booking not successful.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                console.log(error)
            })



    };

    return (
        <div>


            <div>
                <div className='relative mb-16'>
                    <img className='absulute h-96 w-full rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]' src={banner} alt="" />
                    <h1 className='absolute bottom-0 left-[20%] md:left-[30%] lg:left-[43%]  bg-[#FF3811] p-2 w-[200px] text-center text-white'
                        style={{
                            clipPath: 'polygon(12% 7%, 90% 6%, 100% 100%, 0% 100%)',
                        }}
                    >Service/Checkout</h1>
                </div>


            </div>

            <div>
                <h1 className='text-5xl font-bold text-center p-4'>Service Name : <span className='text-[#ff3811]'>{title}</span></h1>
            </div>



            <div className="container mx-auto mt-5 bg-[#F3F3F3] p-10 rounded-2xl mb-5">
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {/* First Name Field */}
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"

                                defaultValue={user?.displayName}


                                placeholder="Enter your first name"
                                className="w-full px-4 py-4 border rounded-xl focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                                Price
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="price"

                                defaultValue={price}

                                disabled
                                placeholder=""
                                className="w-full px-4 py-4 border rounded-xl focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"

                                defaultValue={user?.email}
                                placeholder="Enter your email"
                                className="w-full px-4 py-4  border rounded-xl focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"

                                placeholder="Enter your phone number"
                                className="w-full px-4 py-4 border rounded-xl focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Location Field */}
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"

                                placeholder="Enter your location"
                                className="w-full px-4 py-4 border rounded-xl focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Date Field */}
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"

                                className="w-full px-4 py-4 border rounded-xl focus:outline-none focus:border-blue-500 custom-date-input" // Added custom CSS class
                                required
                                // Set the defaultValue to today's date
                                defaultValue={new Date().toISOString().substr(0, 10)}
                            />
                        </div>
                    </div>

                    {/* Message Box (Full Width) */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"

                            placeholder="Enter your message"
                            className="w-full px-4 py-6 border rounded-xl focus:outline-none focus:border-blue-500"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Checkout Button (Full Width) */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-[#ff3811] text-white px-4 py-4 rounded-xl w-full  focus:outline-none focus:bg-green-600"
                        >
                            Checkout
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Checkout;
