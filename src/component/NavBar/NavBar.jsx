import React from 'react';
import logo from "../../assets/logo.png"
import { FaHome } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm  container px-8 ">
                <div className="navbar-start   ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className=" space-y-1.5 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/" className={"btn "}>
                                <FaHome></FaHome>
                                Home
                            </NavLink>
                            <NavLink to="/timeline" className={"btn"}>
                                <RiTimeLine></RiTimeLine>
                                TimeLine
                            </NavLink>
                            <NavLink to="/status" className={"btn"}>
                                <MdTimeline></MdTimeline>
                                Status
                            </NavLink>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
                </div>

                <div className="navbar-end hidden  lg:flex gap-3.5">
                    <NavLink to="/" className={({isActive}) => ` btn ${isActive? "bg-green-900 text-white":""}`} >
                        <FaHome></FaHome>
                        Home
                    </NavLink>
                    
                    <NavLink to="/timeline" className={({isActive}) => ` btn ${isActive? "bg-green-900 text-white":""}`}>
                        <RiTimeLine></RiTimeLine>
                        TimeLine
                    </NavLink>
                    <NavLink to="/status" className={({isActive}) => ` btn ${isActive? "bg-green-900 text-white":""}`}>
                        <MdTimeline></MdTimeline>
                        Status
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default NavBar;