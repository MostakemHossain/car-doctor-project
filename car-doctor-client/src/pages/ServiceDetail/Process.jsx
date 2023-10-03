import logo from '../../assets/images/team/Frame.png'
import img from '../../assets/images/banner/2.jpg'


const Process = () => {
    return (
        <div className="mb-10 w-full lg:w-[800px]">
            <h1 className="text-4xl text-[#151515] font-bold">3 Simple Steps to Process</h1>


            <div className="text-[#737373] p-3 mb-10">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </div>

            <div className="w-full lg:w-[800px] grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-10 shadow-2xl">
                    <span className="font-bold p-3 text-white shadow-2xl shadow-[#ff3811] text-2xl bg-[#ff3811] rounded-[50%]">01</span>
                    <p className="font-bold text-xl mt-4">STEP ONE</p>
                    <p className="mt-4 text-[#737373]">
                        It uses a dictionary <br /> of over 200 .
                    </p>
                </div>
                <div className="p-10 shadow-2xl items-center text-center">
                    <span className="font-bold p-3  text-white shadow-2xl shadow-[#ff3811] text-2xl bg-[#ff3811] rounded-[50%]">02</span>
                    <p className="font-bold text-xl mt-4">STEP TWO</p>
                    <p className="mt-4 text-[#737373]">
                        It uses a dictionary <br /> of over 200 .
                    </p>
                </div>
                <div className="p-10 shadow-2xl">
                    <span className="font-bold p-3 text-white shadow-2xl shadow-[#ff3811] text-2xl bg-[#ff3811] rounded-[50%]">03</span>
                    <p className="font-bold text-xl mt-4">STEP THREE</p>
                    <p className="mt-4 text-[#737373]">
                        It uses a dictionary <br /> of over 200 .
                    </p>
                </div>
            </div>


            <div className='mt-10 relative'>

                <div className='text-center'>
                    <img className='' src={img} alt="" />

                </div>
                <div className='absolute top-[30%] left-[30%] lg:top-[50%] lg:left-[40%]'>
                    <img src={logo} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Process;