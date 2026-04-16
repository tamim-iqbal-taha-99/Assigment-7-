import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='text-green-900  text-center grid space-y-6 mt-28 px-2'>
                <h1 className='font-extrabold text-8xl'>404</h1>
                <h1 className='text-black font-bold text-4xl'>Page Not Found</h1>
                <h1 className='text-lg opacity-60'>Looks like this friendship link is broken.
                    The page you're looking for doesn't exist or has been moved.</h1>
                <div className='flex justify-center'><NavLink to="/"
                    className='flex items-center border p-1.5 gap-1 font-bold bg-green-900 text-white'>
                    <FaHome></FaHome> Back To Home</NavLink></div>
            </div>
        </div>
    );
};

export default ErrorPage;