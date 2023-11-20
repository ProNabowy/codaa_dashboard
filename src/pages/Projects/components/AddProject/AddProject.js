import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import DropDownMnue from '../../../../Components/DropDownMnue/DropDownMnue'
import { Departments, ProjectsData } from '../../../../apis/apis';

const handleChangeInput = (setState, inputName, inputValue) => {
    setState(prevState => ({
        ...prevState,
        [inputName]: inputValue
    }));
};

export default function AddProject() {

    const fetchProjects = new ProjectsData();

    const departmentUtailty = new Departments();

    const [selectedDepartment, setSelectedDepartment] = useState({});

    const [data, setData] = useState({
        name: "",
        image: "",
        url: "",
        department_id: "",
        codaa_service_id: ""
    });
    const [department, setDepartment] = useState();


    useEffect(() => {

        departmentUtailty.getDepartments(setDepartment);

    }, []);

    useEffect(() => {
        handleChangeInput(setData, 'department_id', selectedDepartment?.id);
    }, [selectedDepartment]);


    return (
        <section>

            <h2 className='font-medium text-[#CFCFCF] mb-10 capitalize'>view product details</h2>

            <div className='grid grid-cols-12 gap-5'>

                <div className='col-span-8'>

                    <div className='w-full mb-5'>
                        <label htmlFor='product-name' className='text-white block mb-2'>Product Name</label>
                        <input onChange={e => handleChangeInput(setData, 'name', e.target.value)} id='product-name' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Newlead Website'></input>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='product-name' className='text-white block mb-2'>Service Code</label>
                        <input onChange={e => handleChangeInput(setData, 'codaa_service_id', e.target.value)} id='product-name' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Newlead Website'></input>
                    </div>

                    <div className='flex items-center justify-between my-5 w-full'>
                        <div className='w-full'>
                            <label htmlFor='product-id' className='text-white block mb-2'>Departments</label>
                            <DropDownMnue options={department} selectedOption={setSelectedDepartment} optionLabel={'attributes.name'} placeholder="Select Department" />
                        </div>

                    </div>

                    <div className='my-2'>
                        <label htmlFor='product-price' className='text-white block mb-2'>Link Of Project</label>
                        <input onChange={e => handleChangeInput(setData, 'url', e.target.value)} id='product-price' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='https://www.youtube.com/watch?v=V4qse3ORv0U'></input>
                    </div>

                    <div className='my-10 flex items-center justify-end'>


                        <button onClick={_ => fetchProjects.addProject(data)} className='p-2 px-5 border-2 border-[var(--min-color)] bg-[var(--min-color)] rounded-[5px] me-4 font-medium text-white'>{"Submit"}</button>


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
