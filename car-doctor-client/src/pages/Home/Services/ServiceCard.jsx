import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact w-full bg-base-700 shadow-xl">
            <figure><img className="h-60 p-2 rounded-xl" src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl p-4 text-center">{title}</h2>

                <div className="card-actions flex items-center mb-3 p-4">
                    <p className="text-[#FF3811] font-bold text-xl mr-20 md:mr-40">Price: ${price}</p>
                    <p className="text-[#FF3811] text-2xl"><FaArrowRight /></p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
