import { faEllipsisVertical, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'primereact/button';
import React, { useRef, useState } from 'react'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Link } from 'react-router-dom';
import { Products } from '../../apis/apis';


export default function TableActions({ rowData, url, deleteAuction }) {

    const toast = useRef(null);
    const deleteProductService = new Products();

    const [toggleShowBtn, setToggleShowBtn] = useState(false);

    const accept = () => {
        toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        setToggleShowBtn(false);
        console.log(rowData)
        deleteAuction && deleteAuction(rowData?.id);
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        setToggleShowBtn(false);
    }

    const confirm = () => {
        confirmDialog({
            message: 'Are you sure you want to delete this item',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    return (

        <div className='flex items-center justify-between relative'>
            <Toast ref={toast} />

            {toggleShowBtn && <ConfirmDialog />}

            <FontAwesomeIcon className='text-[20px] text-[#CFCFCF] cursor-pointer' onClick={() => setToggleShowBtn(!toggleShowBtn)} icon={faEllipsisVertical}></FontAwesomeIcon>

            <Link to={url}><FontAwesomeIcon className='text-[20px] text-[#CFCFCF] cursor-pointer' icon={faPen}></FontAwesomeIcon></Link>

            <div className={`absolute left-[-60px] bottom-[-30px] transition-all ${toggleShowBtn ? "scale-100 opacity-100 visible" : "scale-0 opacity-0 invisible"}`}>
                <Button onClick={() => confirm()} label="Delete" className='!p-1 !text-[13px]' severity="danger" />
            </div>

        </div>
    )
}
