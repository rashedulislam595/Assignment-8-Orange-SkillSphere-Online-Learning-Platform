'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [isShow, setIsShow] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelLogin = async (data) => {
        // console.log(data);
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (res) {
            toast.success("Welcome back! You're now logged in.", { theme: "dark", position: "top-center" })
        } else {
            toast.error(error.message, { theme: "dark", position: "top-center" })
        }

    }

    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        toast.success("Welcome! Your account has been created successfully.", { theme: "dark", position: "top-center" })
    };

    return (
        <div className='py-10 px-5 md:p-20 flex justify-center items-center bg-slate-200'>
            <div className='bg-white md:p-16 rounded-2xl p-5'>
                <h2 className='text-4xl font-semibold text-[#403F3F] md:mb-12 mb-6 text-center'>Login your account</h2>

                <form onSubmit={handleSubmit(handelLogin)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl font-semibold text-[#403F3F]">Email Address</legend>
                        <input type="email" className="input w-full rounded-md"
                            {...register("email", { required: "Password filed is required!" })} placeholder="Enter your email address" />
                        {errors.email && (<p className='text-[#eb4a0a] font-bold mt-1'>{errors.email.message}</p>)}
                    </fieldset>

                    <fieldset className="fieldset mt-2 relative">
                        <legend className="fieldset-legend text-xl font-semibold text-[#403F3F]">Password</legend>
                        <input type={isShow ? "password" : "text"} className="input w-full rounded-md"
                            {...register("password", { required: "Password filed is required!" })} placeholder="Enter your Password" />
                        <span className='absolute right-2 top-3.5 text-lg' onClick={() => setIsShow(!isShow)}>
                            {isShow ? <IoEyeOff /> : <FaEye />
                            }
                        </span>
                        {errors.password && (<p className='text-[#eb4a0a] font-bold mt-1'>{errors.password.message}</p>)}
                    </fieldset>
                    <button className='btn bg-[#403F3F] mt-5 w-full text-white text-lg font-bold'>Login</button>
                </form>
                <p className='text-[#706F6F] font-semibold my-4 text-center'>Do not Have An Account ? <Link href={'/register'} className='text-blue-600'>Register</Link></p>
                <div >
                    <button className="btn border-blue-500 text-blue-500 w-full" onClick={signIn} >
                        <FaGoogle />
                        Login with google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;