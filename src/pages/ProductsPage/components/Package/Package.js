import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const Permissions = [
    { name: "Advanced analytics and custom branding,", status: "Success" },
    { name: "Advanced analytics and custom branding,", status: "Success" },
    { name: "Advanced analytics and custom branding,", status: "Success" },
    { name: "Advanced analytics and custom branding,", status: "Success" },
    { name: "Advanced analytics and custom branding,", status: "Success" },
]
export default function Package({ isEditPage }) {

    const renderPermissions = isEditPage ? Permissions : [{ name: "", status: "Success" }];

    return (
        <section>

            <h2 className='font-medium text-[#CFCFCF] mb-10 capitalize'>view Package details</h2>

            <div className='my-10'>

                <div className='flex items-center justify-between flex-wrap'>

                    <div className='w-[48%]'>
                        <label htmlFor='product-name' className='text-white block mb-2'>Package Name</label>
                        <input id='product-name' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='FREE TRIAL  -   3 DAYS'></input>
                    </div>

                    <div className='flex items-center justify-between w-[48%]'>
                        <div className='w-[48%]'>
                            <label htmlFor='product-name' className='text-white block mb-2'>Price Per Month</label>
                            <input id='product-name' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='110 $'></input>
                        </div>
                        <div className='w-[48%]'>
                            <label htmlFor='product-name' className='text-white block mb-2'>Price Per Month Discount</label>
                            <input id='product-name' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='250 $'></input>
                        </div>
                    </div>

                    <div className='w-full my-3'>
                        <label htmlFor='product-name' className='text-white block mb-2'>Description</label>
                        <textarea rows={5} id='product-name' type='text' className='bg-[#0D2C3E] resize-none w-full p-2 px-5 text-white rounded-[6px]' placeholder='Est incidunt omnis dolorem et provident nemo architecto voluptatibus. Excepturi et explicabo libero suscipit molestiae praesentium. Molestiae velit dolorem quia'></textarea>
                    </div>

                    <div className='w-full'>

                        <h2 className='font-medium text-[#CFCFCF] mb-10 capitalize'>Permissions</h2>

                        {renderPermissions.map((perm, index) => {
                            return (
                                <div key={index} className='flex items-center justify-between mb-5'>

                                    <div className='w-[82%] bg-[#0D2C3E] min-h-[40px] text-white p-2 px-5 rounded-[5px]'>
                                        {perm.name}
                                    </div>

                                    <div className='border border-[#CFCFCF] text-white p-2 px-5 rounded-[5px] w-fit'>{perm.status}</div>

                                    <FontAwesomeIcon icon={faEllipsis} className='text-[30px] text-white rotate-[90deg] cursor-pointer'></FontAwesomeIcon>
                                </div>
                            )
                        })}

                    </div>

                    <div className='flex items-center justify-between w-full'>

                        <button className='bg-[var(--min-color)] p-2 px-5 text-white rounded-[5px] capitalize'>add permision item </button>
                        <button className='bg-[var(--min-color)] p-2 px-5 text-white rounded-[5px] capitalize'>Submit </button>

                    </div>
                </div>

            </div>
        </section>
    )
}
