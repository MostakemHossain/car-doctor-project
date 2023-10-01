import expert from '../../../../assets/icons/group.svg'
import delivery from '../../../../assets/icons/delivery.png'
import person from '../../../../assets/icons/person.svg'
import eqivment from '../../../../assets/icons/Wrench.svg'
import check from '../../../../assets/icons/check.svg'
import ddl from '../../../../assets/icons/deliveryt.svg'


export default function WhyChooseUs() {
    return (
        <div className="mt-6 mb-6">
            <div className="space-y-3 text-center p-2 ">
                <h3 className="text-2xl font-bold text-[#FF3811]">Core Features</h3>
                <h3 className="text-5xl font-bold">Why Choose Us</h3>
                <p className="text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.
                </p>
            </div>


            <div className='mt-5 mb-4 grid grid-cols-2 md:grid-cols-3 md:mx-auto p-4 lg:grid-cols-6 gap-2'>


                <div className="card w-48 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <figure><img src={expert} /></figure>
                        <p className='text-md font-bold mx-auto'>Expert Team</p>
                    </div>


                </div>
                <div className="card w-48 bg-base-100 shadow-xl text-white rounded-xl">
                    <div className="card-body bg-[#ee2e08]">
                        <figure><img src={delivery} className="text-white" /></figure>
                        <p className='text-md font-bold mx-auto'>Timely Delivery</p>
                    </div>


                </div>
                <div className="card w-48 bg-base-100 shadow-xl  mx-auto">
                    <div className="card-body">
                        <figure><img src={person} /></figure>
                        <p className='text-md font-bold mx-auto'>24/7 Support</p>
                    </div>


                </div>
                <div className="card w-48 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure><img src={eqivment} alt="Shoes" /></figure>
                        <p className='text-md font-bold mx-auto'>Best Equipment</p>
                    </div>


                </div>
                <div className="card w-48 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure><img src={check} alt="Shoes" /></figure>
                        <p className='text-md font-bold mx-auto'>100% Guranty</p>
                    </div>


                </div>
                <div className="card w-48 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure><img src={ddl} alt="Shoes" /></figure>
                        <p className='text-md font-bold mx-auto'>Timely Delivery</p>
                    </div>


                </div>




            </div>



        </div>

    )
}
