import React, { useEffect, useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useCustomEffect from '../../hooks/useCustomEffect/useCustomEffect';
import { renderHeader } from '../../Components/utlis/utlis';
import {
    data, cities, idBodyTemplate, codeBodyTemplate,
    productBodyTemplate, categoriesBodyTemplate, selesBodyTemplate,
    priceBodyTemplate, statusBodyTemplate, actionsBodyTemplate, getCustomers
} from './data';
import { Products } from '../../apis/apis';



export default function ProductsPage() {

    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const fetchProducts = new Products();
    const [products, setProducts] = useState([]);

    const { useReplacePagnitToText, useFetchData } = useCustomEffect();

    useReplacePagnitToText();
    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
        setGlobalFilterValue('');
    };

    useEffect(() => {
        fetchProducts.getProducts(setProducts);
    }, []);


    useFetchData(initFilters);

    const header = renderHeader(
        filters,
        setFilters,
        setGlobalFilterValue,
        globalFilterValue,
        selectedCity,
        setSelectedCity,
        cities,
        "addProduct",
        "Add Product"
    );

    return (

        <DataTable value={products} paginator showGridlines rows={5} loading={loading} dataKey="id"
            filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
            emptyMessage="No Products Found.">

            <Column field="id" header="ID" className='lg:w-[75px] !px-[15px]' body={idBodyTemplate} />

            <Column field='code' header="CODE" className='lg:w-[75px] !px-[15px]' body={codeBodyTemplate} />

            <Column field='representative' header="PRODUCT NAME" className='lg:w-[250px] !px-[15px]' body={productBodyTemplate} />

            <Column field='categories' header="CATEGORIES" className='lg:w-[200px] !px-[15px]' body={categoriesBodyTemplate} />

            <Column field='seles' header="SALES STATSES" className='lg:w-[150px] !px-[15px]' body={selesBodyTemplate} />

            <Column field="PRICE" header="PRICE" className='lg:w-[80px] !px-[15px]' body={priceBodyTemplate} />

            <Column field="STATUS" header="STATUS" className='lg:w-[120px] !px-[15px]' body={statusBodyTemplate} />

            <Column field="ACTION" header="ACTION" className='lg:w-[30px] !px-[15px]' body={actionsBodyTemplate} />

        </DataTable>

    );
}
