'use client'
import React, { useState } from 'react';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShow, setIsShow] = useState(true);
    const router = useRouter()

    const handelRegister = async (data) => {
        const { name, photoUrl, email, password } = data;
        // console.log(name,photoUrl,email,password)

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photoUrl,
        });
        // console.log("response",{res,error})
        if (res) {
            toast.success("Welcome! Your account has been created successfully.", { theme: "dark", position: "top-center" })
            router.push("/login")
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
        <div className='h-[90vh] p-20 flex justify-center items-center bg-slate-200 '>
            <div className='bg-white p-16 rounded-2xl py-10'>
                <h2 className='text-4xl font-semibold text-[#403F3F] mb-12'>Register your account</h2>
                <div >
                    <button className="btn border-blue-500 text-blue-500 w-full" onClick={signIn} >
                        <FaGoogle />
                        Sign up with google
                    </button>
                </div>
                <div className="divider mt-10">OR EMAIL</div>

                <form onSubmit={handleSubmit(handelRegister)}>
                    <fieldset className="fieldset mb-2">
                        <legend className="fieldset-legend text-xl font-semibold text-[#403F3F]">Your Name</legend>
                        <input type="text" className="input w-full rounded-md"
                            {...register("name", { required: "write your name" })} placeholder="Enter your name" />
                        {errors.name && (<p className='text-[#eb4a0a] font-bold mt-1'>{errors.name.message}</p>)}
                    </fieldset>
                    {/* photo url */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl font-semibold text-[#403F3F]">Photo URL</legend>
                        <input type="text" className="input w-full rounded-md"
                            {...register("photoUrl")} placeholder="Enter your photo url" />
                    </fieldset>
                    {/* email */}
                    <fieldset className="fieldset mt-2">
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
                    <button className='btn bg-[#403F3F] mt-5 w-full text-white text-lg font-bold'>Register</button>
                </form>
                <p className='text-[#706F6F] font-semibold my-4 text-center'>Already have an account? <Link href={'/login'} className='text-blue-600'>Log in</Link></p>

            </div>
        </div>
    );
};

export default RegisterPage;