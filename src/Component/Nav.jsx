import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

    const { user  , logOut} = useContext(AuthContext)

    const ul = <>

        <NavLink
            to="/foods"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Foods
        </NavLink>
        <NavLink
            to="/addFoods"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Add Foods
        </NavLink>
        <NavLink
            to="/myOrder"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            My Orders 
        </NavLink>
        <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Services
        </NavLink>
      

    </>
    return (
        <div>
            <div className="navbar inset-0 bg-black bg-opacity-50 backdrop-blur-md text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {ul}
                        </ul>
                    </div>
                    <Link to="/" className="btn outline-none btn-ghost text-xl">Cafeteria Corner</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-4 text-lg menu-horizontal px-1">
                       {ul}
                    </ul>
                </div>
                <div className="navbar-end">
                   { user?.email ? <button onClick={() =>   logOut()} className='btn bg-red-600 hover:bg-red-700 outline-none border-none  rounded-sm text-white px-8'>Logout</button> : <Link to="/login" className="btn bg-red-600 hover:bg-red-700 outline-none border-none  rounded-sm text-white px-8">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Nav;