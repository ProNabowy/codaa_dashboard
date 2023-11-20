import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const data = [
    { id: 1, code: "12-HR", price: 10, permissions: "Quasi aliquid ut doloribus fugiat et eos odio consequuntur.", link: 'Qui nihil autem consequuntur totam nesciunt quia enim nemo.', status: "Active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 2, code: "12-HR", price: 10, permissions: "Quasi aliquid ut doloribus fugiat et eos odio consequuntur.", link: 'Qui nihil autem consequuntur totam nesciunt quia enim nemo.', status: "Active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
    { id: 3, code: "12-HR", price: 10, permissions: "Quasi aliquid ut doloribus fugiat et eos odio consequuntur.", link: 'Qui nihil autem consequuntur totam nesciunt quia enim nemo.', status: "Active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, balance: {}, categories: "Programming Department", servName: 'ui-ux design' },
];

const CustomerService = {
    getCustomersMedium: function () {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
};
export default function SecondPage({}) {

    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);



    useEffect(() => {

        const perv = document.querySelector('.p-paginator-prev');
        const next = document.querySelector('.p-paginator-next');

        if (perv) {

            perv.innerHTML = "Previous";
        }

        if (next) {
            next.innerHTML = "Next";
        }

    }, []);

    useEffect(() => {

        CustomerService.getCustomersMedium().then((data) => {

            setCustomers(getCustomers(data));

            setLoading(false);

        });


    }, []);

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };



    const priceBodyTemplate = (rowData) => {
        return (
            <div className='flex items-center justify-between  text-[#CFCFCF]'>
                <h2>{rowData.price}</h2>
                <h2>$</h2>
            </div>
        )
    };


    const packgeBodyTemplate = (rowData) => {
        return (
            <div className="">
                <p className='mb-1 capitalize text-[#CFCFCF]'>{rowData.servName}</p>
                <p className='text-[#CFCFCF] opacity-70'>Systems Administrator</p>

            </div>
        );
    };

    const permissionsBodyTemplate = (rowData) => {
        return <ul style={{ listStyle: 'initial' }}>
            <li className=' text-[#CFCFCF] p-2 ps-0 rounded-[6px]'>{rowData.link}...</li>
            <li className=' text-[#CFCFCF] p-2 ps-0 rounded-[6px]'>{rowData.link}...</li>
            <li className=' text-[#CFCFCF] p-2 ps-0 rounded-[6px]'>{rowData.link}...</li>
        </ul>
    };

    const actionsBodyTemplate = () => {

        return <FontAwesomeIcon className='text-[20px] text-[#CFCFCF] cursor-pointer' icon={faPen}></FontAwesomeIcon >
    };


    return (

        <DataTable value={customers} showGridlines rows={6} loading={loading} dataKey="id"
            filters={filters} className='active-table-head' globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
            emptyMessage="No customers found.">

            <Column header="Package Details" field='service' className='lg:w-[80px] !px-[15px]' body={packgeBodyTemplate} />

            <Column header="Price Per Month" field='price' className='xl:w-[80px] xl:!px-[15px]' filterField="description" body={priceBodyTemplate} />

            <Column field="permissions" header="Permissions" className='lg:w-[350px] !px-[15px]' body={permissionsBodyTemplate} />

            <Column field="ACTION" header="Action" className='lg:w-[50px] !px-3' body={actionsBodyTemplate} />

        </DataTable>

    )
}
