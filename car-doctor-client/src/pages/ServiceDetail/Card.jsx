

import { FaArrowRight } from 'react-icons/fa';

const Card = ({ img }) => {
    return (
        <div className='lg:flex gap-3 lg:gap-10 justify-around mb-10'>
            <div>
                <img src={img} className="w-full lg:w-[800px]" alt="" />
            </div>

            <div className='bg-[#F3F3F3] p-14 rounded-2xl'>
                <h1 className='font-bold text-2xl mb-3 '>Services</h1>
                <div className='space-y-4 font-bold'>
                    <div className='flex justify-between rounded-lg  bg-[#FF3811] items-center text-white p-4 gap-16'>
                        <p>Full Car Repair</p>
                        <FaArrowRight className='text-white'></FaArrowRight>

                    </div>
                    <div className='flex justify-between rounded-lg  bg-[#ffffff] items-center text-black p-4 gap-16'>
                        <p>Engine Repair</p>
                        <FaArrowRight className='text-[#ff3811]' ></FaArrowRight>

                    </div>
                    <div className='flex justify-between rounded-lg  bg-[#ffffff] items-center text-black p-4 gap-16'>
                        <p>Automatic Services</p>
                        <FaArrowRight className='text-[#ff3811]' ></FaArrowRight>

                    </div>
                    <div className='flex justify-between rounded-lg  bg-[#ffffff] items-center text-black p-4 gap-16'>
                        <p>Engine Oil Change</p>
                        <FaArrowRight className='text-[#ff3811]' ></FaArrowRight>

                    </div>
                    <div className='flex justify-between rounded-lg  bg-[#ffffff] items-center text-black p-4 gap-16'>
                        <p>Battery Charge</p>
                        <FaArrowRight className='text-[#ff3811]' ></FaArrowRight>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default Card;