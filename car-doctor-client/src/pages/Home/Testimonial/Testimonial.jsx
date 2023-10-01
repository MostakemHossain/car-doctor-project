
import person1 from '../../../assets/images/testimonial/person3.jpeg'
import person2 from '../../../assets/images/testimonial/person4.jpeg'
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import Rating from "react-rating";




const Testimonial = () => {
    const rating = 4.5;
    return (
        <div className="mt-6 mb-6">
            <div className="space-y-3 text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Testimonial</h3>
                <h3 className="text-5xl font-bold">What Customer Says</h3>
                <p className="text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className='md:flex gap-5 p-6'>

                <div className='md:w-1/2 p-12 bg-base-700 relative shadow-xl'>
                    <div className='hidden p-2 sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#ff3811] rounded-full flex justify-center items-center'>
                        <FaArrowLeft className='text-white text-xl' />
                    </div>
                    <div className='flex justify-around'>
                        <div>
                            <img className='w-[50px] h-[50px]  rounded-full' src={person1} alt="" />

                        </div>
                        <div>
                            <p className='font-bold text-xl'>Awlad Hossain</p>
                            <p className='text-[#737373]'>Businessman</p>
                        </div>
                        <div>
                            <FaQuoteRight className='text-5xl text-[#ff3811]' />

                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#737373]'>
                            "I've had the pleasure of working with this company for several years now, and I couldn't be happier with their services. From the moment I engaged with their team, I knew I was in good hands. They are not just a vendor; they are a partner who genuinely cares about my business's success.
                        </p>
                        <div className='flex items-center gap-2'>
                            <Rating
                                emptySymbol={<span className="text-[#D3D3D3] text-2xl">&#9733;</span>}
                                fullSymbol={<span className="text-[#FF912C] text-2xl">&#9733;</span>}
                                initialRating={rating}
                                readonly
                            />
                            <p className="text-[#FF912C] mr-32 font-bold ml-2">{rating.toFixed(1)}</p>
                        </div>
                    </div>

                </div>
                <div className='md:w-1/2 p-12 bg-base-700 relative shadow-xl'>
                    <div className='hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 p-3 translate-x-1/2 w-10 h-10 bg-[#ff3811] rounded-full flex justify-center items-center'>
                        <FaArrowRight className='text-white text-xl' />
                    </div>

                    <div className='flex justify-around'>
                        <div>
                            <img className='w-[50px] h-[50px]  rounded-full' src={person2} alt="" />

                        </div>
                        <div>
                            <p className='font-bold text-xl'>Samsul Haque</p>
                            <p className='text-[#737373]'>Developer</p>
                        </div>
                        <div>
                            <FaQuoteRight className='text-5xl text-[#ff3811]' />

                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#737373]'>
                            "I've had the pleasure of working with this company for several years now, and I couldn't be happier with their services. From the moment I engaged with their team, I knew I was in good hands. They are not just a vendor; they are a partner who genuinely cares about my business's success.
                        </p>
                        <div className='flex items-center gap-2'>
                            <Rating
                                emptySymbol={<span className="text-[#D3D3D3] text-2xl">&#9733;</span>}
                                fullSymbol={<span className="text-[#FF912C] text-2xl">&#9733;</span>}
                                initialRating={rating}
                                readonly
                            />
                            <p className="text-[#FF912C] mr-32 font-bold ml-2">{rating.toFixed(1)}</p>
                        </div>
                    </div>

                </div>


            </div>



        </div>
    );
};

export default Testimonial;