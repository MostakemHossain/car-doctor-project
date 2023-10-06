
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DetailCard from "./DetailCard";

import img1 from '../../assets/images/testimonial/Frame.png'
import { FaArrowRight } from "react-icons/fa";

import logo from '../../assets/logo.svg'

const Details = () => {

    const service = useLoaderData();
    const { _id, title, img, facility, price } = service;








    return (
        <div className="mt-5 mb-5">
            <h1 className="text-5xl font-bold mb-2 p-3">{title}</h1>

            <div className="lg:flex gap-24">

                <div className="lg:w-[800px] gap-10" >
                    <div className="text-[#737373] p-3 mb-10">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </div>





                    <div className="grid grid-cols-2 gap-5">



                        {
                            facility.map(f => <DetailCard
                                key={name}
                                f={f}
                            ></DetailCard>)
                        }





                    </div>


                    <div className="text-[#737373] p-3 mt-10">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </div>
                </div>

                <div>

                    <div className="bg-black text-white p-16 rounded-2xl">
                        <p className="text-3xl font-bold">Download</p>
                        <div className="flex gap-2 items-center mt-3">
                            <img src={img1} alt="" />
                            <div>
                                <p className="text-xl">Our Brochure</p>
                                <p className="text-[#A2A2A2]">Download</p>
                            </div>
                            <div className="ml-10 bg-[#FF3811] text-white p-2 rounded">
                                <FaArrowRight></FaArrowRight>
                            </div>
                        </div>
                        <div className="mt-2 flex gap-2 items-center">
                            <img src={img1} alt="" />
                            <div>
                                <p className="text-xl">Our Brochure</p>
                                <p className="text-[#A2A2A2]">Download</p>
                            </div>
                            <div className="ml-10 bg-[#FF3811] text-white p-2 rounded">
                                <FaArrowRight></FaArrowRight>
                            </div>
                        </div>



                    </div>



                    <div className="bg-[#151515] p-10 mt-5 text-white rounded-2xl items-center">


                        <div className="text-center">
                            <img src={logo} className="text-white" alt="" />
                        </div>

                        <p className=" p-3 text-[16px] font-bold text-white">Need Help? We Are Here <br />
                            To Help You</p>


                        <div className="relative mb-5">
                            <div className="bg-white p-10 rounded-xl">
                                <div>
                                    <p className="text-black font-bold"><span className="text-[#FF3811] font-bold">Car Doctor</span> Special</p>

                                    <p className="font-bold mt-2"><span className="text-[#737373]">Save up to</span> <span className="text-[#ff3811]">60% off</span></p>
                                </div>


                            </div>
                            <div className="bg-[#FF3811] left-[50px] -bottom-[20px] absolute text-center w-[180px] p-4 rounded">
                                <p>Get A Quote</p>
                            </div>
                        </div>

                    </div>


                    <div className="mt-5">
                        <p className="text-3xl mb-2 font-bold">Price:${price}</p>

                        <div className="bg-[#FF3811] text-center p-3 rounded-lg">
                            <Link to={`${`/checkout/${_id}`}`} ><p className="text-white">Proceed Checkout</p></Link>
                        </div>

                    </div>

                </div>







            </div>



        </div >
    );
};

export default Details;