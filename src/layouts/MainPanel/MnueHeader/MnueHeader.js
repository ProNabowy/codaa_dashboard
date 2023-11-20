import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageLogo from "../../../assets/logo.png";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


export default function MnueHeader({ isExpanded, setIsExpanded }) {
    return (
        <div className={`flex my-5 items-center ${isExpanded ? "justify-around" : "justify-center flex-col"} p-3`} style={{ borderBottom: '0.5px solid rgba(34, 41, 47, 0.05)' }}>

            <img src={ImageLogo} alt='' className={`${isExpanded ? "w-[88px]" : "w-[55px]"}`} />


            <div onClick={() => setIsExpanded(!isExpanded)} className={`${isExpanded ? "" : "my-5"} cursor-pointer w-[33px] h-[33px] bg-[var(--min-color)] rounded-full flex items-center justify-center text-white`}>
                <FontAwesomeIcon icon={(isExpanded) ? faAngleLeft : faAngleRight}></FontAwesomeIcon>
            </div>

        </div>
    )
}
