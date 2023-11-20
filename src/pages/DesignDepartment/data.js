import TableActions from '../../Components/TableActions/TableActions';
import { Departments } from '../../apis/apis';

const descriptionBodyTemplate = (rowData) => {
    return <h2 className=' text-white p-2 ps-0 mb-2 rounded-[6px]'>{rowData.description}</h2>
};

const servNameBodyTemplate = (rowData) => {

    return (
        <div className="flex items-center gap-2">

            <img alt={rowData?.image_path} src={rowData?.image_path} className='w-[44px] h-[44px]' />

            <p className='mb-1 capitalize text-[#CFCFCF]'>{rowData?.name}</p>

        </div>
    );
};

const linkBodyTemplate = (rowData) => {
    return <h2 className=' p-2 ps-0 mb-2 rounded-[6px]'>{rowData.url}</h2>
};

const statusBodyTemplate = (rowData) => {
    return (
        <div className='bg-[#092f2f] rounded-[6px] text-[#28C76F] text-center p-2'>
            {rowData.status === 1 ? "Active" : "Not Active"}
        </div>
    )
};

const actionsBodyTemplate = (rowData) => {
    const DepartmentsUtailty = new Departments();
    console.log(rowData);
    return <TableActions deleteAuction={DepartmentsUtailty.deleteDepartment} url={`view-services?${rowData.id}`} rowData={rowData}></TableActions>

};

export {
    descriptionBodyTemplate,
    servNameBodyTemplate,
    linkBodyTemplate,
    statusBodyTemplate,
    actionsBodyTemplate
}