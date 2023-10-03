import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/services').then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-6 mb-6">
            <div className="space-y-3 text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Our Services</h3>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)

                }
            </div>

        </div>
    );
};

export default Services;