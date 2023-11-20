import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { Services } from '../../../../apis/apis';

const handleChangeInput = (setState, inputName, inputValue) => {
    setState(prevState => ({
        ...prevState,
        [inputName]: inputValue
    }));
};

// This Component To Render Add Or Edit Servcies
export default function AddProgramingServices() {

    const [data, setData] = useState({
        name: "",
        image: "",
        url: "",
        department_id: 3,
    });

    const ServciesUtailty = new Services();

    return (
        <section>

            <h2 className='font-medium text-[#CFCFCF] mb-10 capitalize'>view product details</h2>

            <div className='grid grid-cols-12 gap-5'>

                {/* Service inputs */}
                <div className='col-span-8'>

                    <div className='w-full'>

                        <label htmlFor='product-name' className='text-white block mb-2'>Service Name</label>

                        <input onChange={e => handleChangeInput(setData, 'name', e.target.value)} id='product-name' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Newlead Website'></input>

                    </div>

                    <div className='w-full my-5'>

                        <label htmlFor='product-name' className='text-white block mb-2'>Description</label>

                        <textarea onChange={e => handleChangeInput(setData, 'description', e.target.value)} id='product-name' rows={4} type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Newlead Website'></textarea>

                    </div>

                    <div className='my-2'>

                        <label htmlFor='product-call' className='text-white block mb-2'>Link Of Call</label>

                        <input onChange={e => handleChangeInput(setData, 'url', e.target.value)} id='product-call' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='https://www.youtube.com/watch?v=V4qse3ORv0U'></input>

                    </div>

                    <div className='my-10 flex items-center justify-end'>

                        <button onClick={e => ServciesUtailty.addServices(data)} className='p-2 px-5 border-2 border-[var(--min-color)] bg-[var(--min-color)] rounded-[5px] me-4 font-medium text-white'>Submit</button>

                    </div>


                </div>

                <div className='col-span-4 relative rounded-[30px] bg-[#0D2C3E] min-h-[573px] overflow-hidden p-5'>

                    <img src={data.image ? URL.createObjectURL(data.image) : require('../../../../assets/default-add-image.png')} className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ' />


                    <div className='absolute bottom-[20px] left-[50%] translate-x-[-50%] cursor-pointer'>

                        <label htmlFor='uploade-product-img' className='w-[44px] h-[44px] rounded-full text-white bg-[var(--min-color)] flex items-center justify-center'>

                            <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>

                        </label>

                        <input type='file' onChange={e => handleChangeInput(setData, 'image', e.target.files[0])} id='uploade-product-img' className='invisible w-0 h-0 opacity-0 scale-0' />

                    </div>

                </div>

            </div>

        </section>
    )
}
