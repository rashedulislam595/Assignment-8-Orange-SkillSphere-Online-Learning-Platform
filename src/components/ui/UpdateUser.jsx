import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CiSettings } from 'react-icons/ci';
import { GiCancel } from 'react-icons/gi';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleUpdate = async (data) => {
        const { name, photoUrl } = await data;
        console.log(await data)

        await authClient.updateUser({
            name,
            image: photoUrl,
        })
        toast.success("Profile Update successful!", { theme: "dark", position: 'top-center' })
        reset();
        document.getElementById('my_modal_5').close()

    }

    return (
        <div>
            <button onClick={() => document.getElementById('my_modal_5').showModal()} className='flex gap-2 btn btn-primary items-center ' ><CiSettings className='text-xl' />Update Information</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='text-end'>
                        <button className='h-7 w-7 rounded-full bg-gray-300  ' onClick={() => document.getElementById('my_modal_5').close()}>
                        <GiCancel className='mx-auto text-red-500'/>
                    </button>
                    </div>
                    <div className='text-center mb-4'>
                        <h3 className="font-bold text-2xl">Update Profile</h3>
                        <p className="py-1 text-[#11111190]">Change your display name and profile picture</p>
                    </div>

                    <div className="">
                        <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
                            <fieldset className="fieldset mb-2">
                                <legend className="fieldset-legend text-xl font-semibold text-[#403F3F]">Your Name</legend>
                                <input type="text" className="input w-full rounded-md"
                                    {...register("name")} placeholder="Enter your name" />
                            </fieldset>
                            {/* photo url */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-xl font-semibold text-[#403F3F]">Photo URL</legend>
                                <input type="text" className="input w-full rounded-md"
                                    {...register("photoUrl")} placeholder="Enter your photo url" />
                            </fieldset>
                            <div className='text-center mt-5'>
                                <button className='btn btn-primary font-bold'>Update Information</button>
                            </div>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateUser;