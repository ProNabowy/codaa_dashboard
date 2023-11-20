import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import DropDownMnue from '../../../../Components/DropDownMnue/DropDownMnue'
import { Departments, ProjectsData } from '../../../../apis/apis';
import { useLocation } from 'react-router-dom';

const handleChangeInput = (setState, inputName, inputValue) => {
    setState(prevState => ({
        ...prevState,
        [inputName]: inputValue
    }));
};

const convartProjectFormat = (project) => {

    return {
        codaa_service_id: project?.codaa_service_id || 1,
        name: project?.name || project?.attributes?.name,
        department_id: project?.department_id || project?.attributes?.department_id,
        url: project?.url || project?.attributes?.url,
        image: project?.image || project?.attributes?.image,
    }

}

export default function EditProjectroject() {

    const fetchProjects = new ProjectsData();
    const location = useLocation().search;
    const ProjectId = location.slice(4);
    const departmentUtailty = new Departments();
    const [project, setProject] = useState({});
    const [selectedDepartment, setSelectedDepartment] = useState({});
    const [department, setDepartment] = useState();

    useEffect(() => {

        departmentUtailty.getDepartments(setDepartment);

    }, []);

    useEffect(() => {
        handleChangeInput(setProject, 'department_id', selectedDepartment?.id);
    }, [selectedDepartment]);

    useEffect(() => {

        fetchProjects.getSingleProject(ProjectId, setProject);

    }, []);

    console.log(project);

    return (
        <section>

            <h2 className='font-medium text-[#CFCFCF] mb-10 capitalize'>view product details</h2>

            <div className='grid grid-cols-12 gap-5'>

                <div className='col-span-8'>

                    <div className='w-full mb-5'>
                        <label htmlFor='product-name' className='text-white block mb-2'>Product Name</label>
                        <input defaultValue={project?.attributes?.name} onChange={e => handleChangeInput(setProject, 'name', e.target.value)} id='product-name' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Newlead Website'></input>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='product-service-id' className='text-white block mb-2'>Service Id</label>
                        <input defaultValue={project?.attributes?.service_id} onChange={e => handleChangeInput(setProject, 'codaa_service_id', e.target.value)} id='product-service-id' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='Newlead Website'></input>
                    </div>

                    <div className='flex items-center justify-between my-5 w-full'>

                        <div className='w-full'>
                            <label htmlFor='product-id' className='text-white block mb-2'>Department</label>
                            <DropDownMnue options={department} selectedOption={setSelectedDepartment} optionLabel={'attributes.name'} placeholder={project?.attributes?.department_name} />
                        </div>

                    </div>

                    <div className='my-2'>
                        <label htmlFor='product-price' className='text-white block mb-2'>Link Of Project</label>
                        <input defaultValue={project?.attributes?.url} onChange={e => handleChangeInput(setProject, 'url', e.target.value)} id='product-price' type='text' className='bg-[#0D2C3E] w-full p-2 px-5 text-white rounded-[6px]' placeholder='https://www.youtube.com/watch?v=V4qse3ORv0U'></input>
                    </div>

                    <div className='my-10 flex items-center justify-end'>


                        <button onClick={_ => fetchProjects.editProject(convartProjectFormat(project), ProjectId)} className='p-2 px-5 border-2 border-[var(--min-color)] bg-[var(--min-color)] rounded-[5px] me-4 font-medium text-white'>{"Submit"}</button>


                    </div>


                </div>

                <div className='col-span-4 relative rounded-[30px] bg-[#0D2C3E] min-h-[573px] overflow-hidden p-5'>

                    <img src={project.image ? URL.createObjectURL(project.image) : project?.attributes?.image} className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full' />

                    <div className='absolute bottom-[20px] left-[50%] translate-x-[-50%] cursor-pointer'>
                        <label htmlFor='uploade-product-img' className='w-[44px] h-[44px] rounded-full text-white bg-[var(--min-color)] flex items-center justify-center'>
                            <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                        </label>
                        <input type='file' onChange={e => handleChangeInput(setProject, 'image', e.target.files[0])} id='uploade-product-img' className='invisible w-0 h-0 opacity-0 scale-0' />
                    </div>

                </div>

            </div>

        </section>
    )
}
