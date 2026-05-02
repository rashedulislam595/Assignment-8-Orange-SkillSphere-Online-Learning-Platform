'use client'
import Link from 'next/link';
import React from 'react';
import { IoSchoolSharp } from 'react-icons/io5';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import userAvatar from '@/assets/user.png'
import { CiLogout } from 'react-icons/ci';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { data: session,isPending } = authClient.useSession()
    const users = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
        toast.success("You've been logged out successfully.", { theme: "dark", position: "top-center" })
    }

    const links = <>
        <li><NavLink href={"/"} className=''>Home</NavLink></li>
        <li><NavLink href={"/all-courses"}>Courses</NavLink></li>
        <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
    </>
    return (
        <div className=' bg-base-100 shadow-sm sticky top-0 z-10'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                            {links}
                            {
                                users?<button onClick={handleLogout} className='btn btn-error btn-soft border-error sm:hidden mt-3'>Logout</button>:""
                            }
                        </ul>
                    </div>
                    <h2 className="text-2xl md:text-3xl flex gap-1.5 font-bold items-center  text-blue-700"><IoSchoolSharp />SkillSphere</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" gap-4 flex px-1  font-bold ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        isPending?<span className="loading loading-infinity loading-xl"></span>:
                        <>
                        {
                        users ? <>
                            <Link href={'/my-profile'}>
                                <Image src={users?.image|| userAvatar} alt="User avatar" width={50} height={50} className="rounded-full" />
                            </Link>
                            <button onClick={handleLogout} className='btn btn-error btn-soft border-error hidden sm:inline'>Logout</button>
                        </> : <>
                            <Link href={"/login"}>
                                <button className='btn btn-primary btn-soft border-blue-600'>Login</button>
                            </Link>
                            <Link href={"/register"}>
                                <button className='btn btn-neutral btn-soft border-black hidden sm:inline'>Register</button>
                            </Link></>
                    }</>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;