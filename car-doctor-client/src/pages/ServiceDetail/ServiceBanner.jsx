import banner from '../../assets/images/services/3.jpg'

const ServiceBanner = () => {
    return (
        <div>
            <div className='relative mb-10'>
                <img className='absulute h-96 w-full rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]' src={banner} alt="" />
                <h1 className='absolute bottom-0 left-[20%] md:left-[30%] lg:left-[40%]  bg-[#FF3811] p-2 w-[200px] text-center text-white'
                    style={{
                        clipPath: 'polygon(12% 7%, 90% 6%, 100% 100%, 0% 100%)',
                    }}
                >Home/Service Details</h1>
            </div>
        </div>
    );
};

export default ServiceBanner;