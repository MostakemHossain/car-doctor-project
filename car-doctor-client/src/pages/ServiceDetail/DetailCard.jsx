import React from 'react';

const DetailCard = ({ f }) => {
    return (
        <div>
            <div className='p-8  border-t-[#FF3811] border-[2px] bg-[#F3F3F3] rounded-xl'>
                <p className='text-[#444] font-bold text-2xl'>{f.name}</p>
                <p className='text-[#737373]'>{f.details}</p>
            </div>
        </div>
    );
};

export default DetailCard;