import { faTrashAlt, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FirstPage({ isEditPage, setData, data, product }) {

    const handleChangeInput = (setState, inputName, inputValue) => {
        setState(prevState => ({
            ...prevState,
            [inputName]: inputValue
        }));
    };

    return (
        <div className='grid grid-cols-12 gap-5'>

            <div className='col-span-8'>
                <div className='flex items-center justify-between mb-5 w-full'>

                    <div className='w-[48%]'>
                        <label htmlFor='product-name' className='text-white block mb-2'>Product Name</label>
                        <input id='product-name' defaultValue={product?.name} onChange={e => handleChangeInput(setData, 'name', e.target.value)} type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Hr - ERP System'></input>
                    </div>
                    <div className='w-[48%]'>
                        <label htmlFor='product-code' className='text-white block mb-2'>Code</label>
                        <input onChange={e => handleChangeInput(setData, 'codaa_service_id', e.target.value)} id='product-code' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Hr-12'></input>
                    </div>

                </div>
                <div className='flex items-center justify-between mb-5 w-full'>
                    <div className='w-[48%]'>
                        <label htmlFor='product-price' className='text-white block mb-2'>Price</label>
                        <input defaultValue={product?.price} onChange={e => handleChangeInput(setData, 'price', e.target.value)} id='product-price' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='122$'></input>
                    </div>

                    <div className='w-[48%]'>
                        <label htmlFor='product-old-price' className='text-white block mb-2'>Old Price</label>
                        <input id='product-old-price' defaultValue={product?.old_price} onChange={e => handleChangeInput(setData, 'old_price', e.target.value)} type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Hr-12'></input>
                    </div>

                </div>

                <label htmlFor='product-desc' className='text-white block mb-2'>Description</label>
                <textarea onChange={e => handleChangeInput(setData, 'description', e.target.value)} id='product-desc' defaultValue={product?.description} type='text' rows={7} className='bg-[#0D2C3E] resize-none w-full p-2 px-5 text-white rounded-[6px]' placeholder='Description' />

                <div className='my-2'>
                    <label htmlFor='product-demo' className='text-white block mb-2'>Link Of Demo</label>
                    <input defaultValue={product?.demo} onChange={e => handleChangeInput(setData, 'demo', e.target.value)} id='product-demo' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='https://www.youtube.com/watch?v=V4qse3ORv0U'></input>
                </div>


                <label htmlFor='product-features' className='text-white block mb-2'>Features</label>
                <textarea defaultValue={product?.features} rows={5} onChange={e => handleChangeInput(setData, 'features', e.target.value)} id='product-features' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder=''></textarea>

            </div>

            <div className='col-span-4 relative rounded-[30px] overflow-hidden p-5'>

                {isEditPage
                    ?
                    < img src={data.image ? URL.createObjectURL(data.image) : product?.image ? product?.image : require('../../../../assets/product-image.png')} className='absolute left-0 top-0 w-full h-full ' />
                    :
                    <img src={data.image ? URL.createObjectURL(data.image) : require('../../../../assets/default-add-image.png')} className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ' />
                }

                <div className='absolute bottom-[20px] left-[50%] translate-x-[-50%] cursor-pointer'>
                    <label htmlFor='uploade-product-img' className='w-[44px] h-[44px] rounded-full text-white bg-[var(--min-color)] flex items-center justify-center'>
                        <FontAwesomeIcon icon={isEditPage ? faTrashAlt : faUpload}></FontAwesomeIcon>
                    </label>
                    <input onChange={e => handleChangeInput(setData, 'image', e.target.files[0])} type='file' id='uploade-product-img' className='invisible w-0 h-0 opacity-0 scale-0' />
                </div>

            </div>

        </div>
    )
}
