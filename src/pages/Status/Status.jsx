import React, { useContext } from 'react';
import { FndContext } from '../../context/Fndprovider';
import PiChart from './PiChart';

const Status = () => {
    const { storeFndData } = useContext(FndContext);

    const callCount = storeFndData.filter(i => i.type === "call").length;
    const textCount = storeFndData.filter(i => i.type === "text").length;
    const videoCount = storeFndData.filter(i => i.type === "video").length;

    const chartData = [
        { name: "Call", value: callCount },
        { name: "Text", value: textCount },
        { name: "Video", value: videoCount },
    ];
    return (
        <div className='pt-10'>
            <h1 className="text-3xl font-bold mb-5">Friendship Analytics</h1>
            <div className=' flex justify-center my-7'>
                <PiChart chartData={chartData}></PiChart>
            </div>

        </div>
    );
};

export default Status;