
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const MeetCard = ({ meet }) => {
    const { image, name, position } = meet;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-[#737373]">{position}</p>
                <div className="card-actions text-3xl">
                    <FaFacebook className='text-[#0866FF]' />
                    <FaTwitter className='text-[#00acee]' />
                    <FaLinkedin className='text-[#00acee]' />
                    <FaInstagram className='text-[#d62976]' />
                </div>
            </div>
        </div>
    );
};

export default MeetCard;