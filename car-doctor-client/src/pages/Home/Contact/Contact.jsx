import { FaCalendarDay, FaPhoneVolume } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";

const Contact = () => {
    return (
        <div className="mt-5 mb-4">
            <div className="md:flex md:justify-between p-8 gap-5 md:p-16 lg:p-24 rounded-xl bg-black text-white">
                <div className="flex items-center gap-2 text-center md:text-left">
                    <p className="text-3xl text-[#FF3811]"><FaCalendarDay /></p>
                    <div>
                        <p className="text-lg md:text-xl">We are open Monday-Friday</p>
                        <p className="text-lg md:text-xl font-bold">Hours: 9:00 AM - 5:00 PM</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-center md:text-left mt-5 md:mt-0">
                    <p className="text-3xl text-[#FF3811]"><FaPhoneVolume /></p>
                    <div>
                        <p className="text-lg md:text-xl">Have a question?</p>
                        <p className="text-lg md:text-xl font-bold">Contact us at: +1 (123) 456-7890</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-center md:text-left mt-5 md:mt-0">
                    <p className="text-3xl text-[#FF3811]"><BiCurrentLocation /></p>
                    <div>
                        <p className="text-lg md:text-xl">Our Address</p>
                        <p className="text-lg md:text-xl font-bold">123 Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
