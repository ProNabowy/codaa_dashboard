import TableActions from '../../Components/TableActions/TableActions';
import { Products } from '../../apis/apis';
const fetchProducts = new Products();

export const data = [
    { id: 1, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 2, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 3, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 4, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 5, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 6, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 7, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 8, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 9, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 10, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 11, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 12, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 13, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 14, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 15, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 16, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 17, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 18, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
    { id: 19, code: "12-HR", price: 110, status: "Success", representative: { name: "Edgar Jones", role: "Systems Administrator" }, categories: [{ name: "Mobile Application" }, { name: "Web Application" }], seles: [{ name: "Subscribe" }, { name: "Buy" }] },
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

export const codeBodyTemplate = (rowData) => {
    const product = rowData?.attributes;
    return (
        <div className="flex align-items-center gap-2">
            <h2 className='text-[#FFFFFF]'>{product?.codaa_service_id}</h2>
        </div>
    );
};

export const productBodyTemplate = (rowData) => {
    const product = rowData.attributes;

    return (
        <div className="flex  gap-2">
            <img alt={product?.image} src={product?.image} className='w-[44px] h-[44px]' />
            <div>

                <p className='mb-1 capitalize'>{product?.name}</p>
                <p className='text-[#CFCFCF] capitalize'>{product?.features?.slice(0, 21)}...</p>

            </div>
        </div>
    );
};

export const categoriesBodyTemplate = (rowData) => {
    return <h2 className='bg-[var(--min-color)] text-white p-2 px-4 mb-2 text-center w-fit rounded-[6px]'>Programing</h2>
};

export const selesBodyTemplate = (rowData) => {
    const seles = rowData.seles;
    return seles?.map((categ, index) => {
        return (
            <h2 className='bg-[#0D2C3E] text-white p-2 px-4 mb-2 text-center w-fit rounded-[6px]' key={index}>{categ?.name}</h2>
        )
    })
};

export const priceBodyTemplate = (rowData) => {
    const product = rowData.attributes;
    return (
        <div className='flex items-center justify-between'>

            <h2 className=''>{product.price}$</h2>

        </div>
    )
};

export const statusBodyTemplate = (rowData) => {
    return (
        <div className='bg-[#092f2f] rounded-[6px] text-[#28C76F] text-center p-2'>
            active
        </div>
    )
};

export const actionsBodyTemplate = (rowData) => {

    return <TableActions deleteAuction={fetchProducts.deleteProduct} url={`editProduct?${rowData.id}`} rowData={rowData}></TableActions>

};
