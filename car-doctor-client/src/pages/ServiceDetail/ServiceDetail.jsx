


import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Details from "./Details";
import Process from "./Process";
import ServiceBanner from "./ServiceBanner";

const ServiceDetail = () => {
    const service = useLoaderData();
    const { title, img, facility } = service;
    return (
        <div>

            <ServiceBanner />
            <Card img={img} ></Card>
            <Details title={title} facility={facility} />
            <Process />




        </div>
    );
};

export default ServiceDetail;