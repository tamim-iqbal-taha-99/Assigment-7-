import React from 'react';
import text from "../../assets/text.png"

const TimelineTextCard = ({ details }) => {
    return (
        <div className='py-6  shadow-lg rounded-xl mt-4  '>
            {/* call cards */}
            <div className='flex items-center gap-11 px-6  '>
                <img src={text} alt="" />
                <div>
                    <h1 className='font-semibold text-2xl opacity-75'>{details.type} to</h1>
                    <h1 className='font-bold text-3xl'>{details.name}</h1>
                </div>
            </div>

        </div>
    );
};

export default TimelineTextCard;