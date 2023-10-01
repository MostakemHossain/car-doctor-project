
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:gap-5 ">
                <div className='lg:w-1/2 relative '>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-2 lg:space-y-5 sm:mt-16'>
                    <h3 className='text-3xl text-bold text-[#FF3811]'>About us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience <br /> in this field</h1>
                    <p className="py-2 lg:py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-[#737373]'>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-outline hover:border-none text-[#FF3811] hover:text-white  hover:bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;