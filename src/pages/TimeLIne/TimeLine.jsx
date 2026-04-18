import React, { useContext } from 'react';
import { FndContext } from '../../context/Fndprovider';

import TimelineCallCards from './TimelineCallCards';
import TimelineTextCard from './TimelineTextCard';
import TimelineVideoCard from './TimelineVideoCard';

// import TimelineVideoCard from './TimelineVideoCard'; (future)

const TimeLine = () => {

    const { storeFndData } = useContext(FndContext);
    console.log(storeFndData);


    return (
        <div className='px-20 py-20'>
            <h1 className='font-extrabold text-5xl'>Timeline</h1>

            <div className='space-y-5'>
                {
                    storeFndData.map(details => {

                        if (details.type === "call") {
                            return (
                                <TimelineCallCards
                                    key={details.id}
                                    details={details}
                                />
                            );
                        }

                        if (details.type === "text") {
                            return (
                                <TimelineTextCard
                                    key={details.id}
                                    details={details}
                                />
                            );
                        }

                        // future support
                        if (details.type === "video") {
                            return <TimelineVideoCard key={details.id} details={details} />
                        }

                        return null;
                    })
                }
            </div>

        </div>
    );
};

export default TimeLine;