import React from 'react';
import { NavLink } from 'react-router';

const MyNavLinks = ({to, children}) => {
    return (
        <NavLink to={to} className={({ isActive }) => ` btn ${isActive ? "bg-green-900 text-white" : ""}`} >
            <FaHome></FaHome>
            {children}
        </NavLink>
    );
};

export default MyNavLinks;