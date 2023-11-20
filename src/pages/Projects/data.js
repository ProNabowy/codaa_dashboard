import TableActions from '../../Components/TableActions/TableActions';
import { ProjectsData } from '../../apis/apis';
const fetchProjcets = new ProjectsData();


export const data = [
    { id: 1, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 2, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 3, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 4, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 5, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 6, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 7, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 8, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 9, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 10, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 11, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 12, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 13, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 14, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 15, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 16, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 17, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 18, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 19, code: "12-HR", link: 'Voluptates...', status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
];

export const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export const idBodyTemplate = (rowData) => {
    return (
        <div className="flex align-items-center gap-2">
            <h2 className='text-white'>{rowData.id}</h2>
        </div>
    );
};

export const representativeBodyTemplate = (rowData) => {
    const project = rowData.attributes;

    return (
        <div className="flex items-center gap-2">
            <img alt={project?.name} src={project?.image} className='w-[44px] h-[44px]' />

            <div>

                <p className='mb-1 capitalize text-[#CFCFCF]'>{project?.name}</p>
                <p className='mb-1 text-[10px] capitalize text-[#CFCFCF]'>{project?.department_name}</p>

            </div>

        </div>
    );
};

export const dateBodyTemplate = (rowData) => {
    const project = rowData.attributes;
    return <h2 className=' text-white p-2 ps-0 mb-2 rounded-[6px]'>{project?.department_name}</h2>

};

export const servNameBodyTemplate = (rowData) => {
    const project = rowData.attributes;
    return <h2 className=' text-white p-2 ps-0 mb-2 rounded-[6px]'>{project?.serivce_name}</h2>
};

export const linkBodyTemplate = (rowData) => {
    const project = rowData.attributes;
    return <h2 className=' text-white p-2 ps-0 mb-2 rounded-[6px]'>{project?.url}</h2>
};

export const statusBodyTemplate = (rowData) => {
    return (
        <div className='bg-[#092f2f] rounded-[6px] text-[#28C76F] text-center p-2'>
            active
        </div>
    )
};


export const actionsBodyTemplate = (rowData) => {


    return <TableActions deleteAuction={fetchProjcets.deleteProject} url={`edit-project?id=${rowData?.id}`} rowData={rowData}></TableActions>

};