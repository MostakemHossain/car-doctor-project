import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    console.log(_id)
    return (
        <div className="card card-compact w-full bg-base-700 shadow-xl">
            <figure><img className="h-60 p-2 rounded-xl" src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl p-4 text-center">{title}</h2>

                <div className="card-actions flex items-center mb-3 p-4">
                    <p className="text-[#FF3811] font-bold text-xl mr-20 md:mr-40">Price: ${price}</p>
                    <Link to={`service-detail/${_id}`}> <p className="text-[#FF3811] text-2xl"><FaArrowRight /></p></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
