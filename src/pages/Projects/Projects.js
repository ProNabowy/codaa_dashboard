import React, { useEffect, useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { renderHeader } from '../../Components/utlis/utlis';
import { data, cities, idBodyTemplate, representativeBodyTemplate, dateBodyTemplate, servNameBodyTemplate, linkBodyTemplate, statusBodyTemplate, actionsBodyTemplate } from './data';
import useCustomEffect from '../../hooks/useCustomEffect/useCustomEffect';
import { ProjectsData } from '../../apis/apis';


export default function Projects() {

    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const fetchProjects = new ProjectsData();
    const [projects, setProjects] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        fetchProjects.getProjects(setProjects);
    }, []);
    console.log(projects);


    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
        setGlobalFilterValue('');
    };
    const { useReplacePagnitToText, useFetchData } = useCustomEffect();

    useReplacePagnitToText();

    useFetchData(initFilters);

    const header = renderHeader(filters,
        setFilters,
        setGlobalFilterValue,
        globalFilterValue,
        selectedCity,
        setSelectedCity,
        cities,
        'add-project',
    );

        console.log(projects);
    return (

        <DataTable value={projects} paginator showGridlines rows={7} loading={loading} dataKey="id"
            filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
            emptyMessage="No customers found.">

            <Column header="ID" className='lg:w-[35px] !px-[15px]' body={idBodyTemplate} />

            <Column header="PROJECT NAME" className='xl:w-[150px] xl:!px-[15px]' filterField="representative" body={representativeBodyTemplate} />

            <Column header="DEPARTEMNT NAME" field='categories' dataType="date" className='xl:w-[200px]' body={dateBodyTemplate} />

            <Column header="SERVICE NAME" field='servName' className='lg:w-[130px]' body={servNameBodyTemplate} />

            <Column field="link" header="LINK" className='lg:w-[60px] !px-[15px]' body={linkBodyTemplate} />

            <Column field="STATUS" header="STATUS" className='lg:w-[50px]' body={statusBodyTemplate} />

            <Column field="ACTION" header="ACTION" className='lg:w-[50px] !px-3' body={actionsBodyTemplate} />

        </DataTable>

    )
}
