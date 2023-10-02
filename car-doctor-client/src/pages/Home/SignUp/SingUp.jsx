import { Link } from 'react-router-dom';
import signUp from '../../../assets/images/login/login.svg'

const SingUp = () => {
    const handleSignUp = (event) => {
        event.preventDefault();

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="lg:mr-12 lg:w-1/2">
                    <img src={signUp} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <h1 className='font-bold text-center text-3xl'>SignUp</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn text-white hover:bg-[#ff3811] bg-[#FF3811]" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-[#737373] my-4 text-center'>Already Have an Account? <Link to="/login" className='text-[#FF3811]'>SignIn</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;