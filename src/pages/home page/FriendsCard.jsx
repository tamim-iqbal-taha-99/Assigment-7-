import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    const { picture, name, days_since_contact, tags, status, id } = friend

    console.log(friend);

    return (

        <Link to={`/details/${id}`}>
            <section className=' text-center py-3 px-4 shadow-md rounded-lg'>
                <div className=' space-y-4'>
                    <div className=' flex justify-center '>
                        <img className='w-[80px] rounded-full' src={picture} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl '>{name}</h1>
                    <p className='text-lg opacity-75 font-semibold'>{days_since_contact} days</p>
                    <div className='flex gap-2 justify-center '>
                        {
                            tags.map((tag, index) => (
                                <button className='border px-3 rounded-4xl items-center bg-green-300' key={index}>{tag}</button>
                            ))
                        }
                    </div>
                    <div >

                        <button className={`'border rounded-4xl px-3 py-3' ${status == "overdue" ? "bg-red-500 text-white" : status === "on-track" ? "bg-amber-500 text-white" : "bg-green-500 text-white"}`}>{status}</button>
                    </div>
                </div>
            </section>

        </Link>
    );
};

export default FriendsCard;