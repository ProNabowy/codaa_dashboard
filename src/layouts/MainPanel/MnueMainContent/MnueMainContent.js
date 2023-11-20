import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PanelMenu } from 'primereact/panelmenu';
import React, { Fragment } from 'react'
import { items , handelMnueScroll } from "./data"
import { NavLink } from 'react-router-dom';



export default function MnueMainContent({ isExpanded }) {

    const linkStyle = `w-full rounded-[6px] flex items-center ${isExpanded ? "justify-between" : "justify-center"} p-3`;
    const liStyle = 'px-2';

    return (

        <div className={`main-menu-content relative overflow-y-auto ${isExpanded ? "" : "max-h-[100%] !h-[82%]"}`} style={{ height: 'calc(100vh - 105px)' }}>

            <ul>

                {

                    isExpanded &&

                    <li className='px-3 mb-6 cursor-pointer text-[#a2a0a9]'>

                        <div className='bg-[var(--min-color)] px-3 py-2 border-4 border-[#202831] text-center !rounded-[100px] text-white w-full'> Admin </div>

                    </li>

                }
                {

                    isExpanded &&

                    <li className={`${liStyle} relative mb-8`}>

                        <div className='absolute top-[29%] left-[6%] z-10 !w-fit '>

                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path d="M14.927 15.0401L18.4001 18.4001M9.4001 5.2001C11.3883 5.2001 13.0001 6.81187 13.0001 8.8001M17.2801 9.4401C17.2801 13.77 13.77 17.2801 9.4401 17.2801C5.11018 17.2801 1.6001 13.77 1.6001 9.4401C1.6001 5.11018 5.11018 1.6001 9.4401 1.6001C13.77 1.6001 17.2801 5.11018 17.2801 9.4401Z" stroke="#CFCFCF" stroke-width="1.5" stroke-linecap="round" />

                            </svg>

                        </div>

                        <input
                            className="bg-transparent border border-[#384857] w-full ps-[15px] pe-3 h-[45px] rounded-[100px] text-white indent-[25px] relative"
                            type="search" placeholder="Search" aria-label="Search" />

                    </li>

                }

                <li className={liStyle}>

                    <NavLink to={''} className={linkStyle}>

                        <div className={`rounded-[6px] text-white flex items-center`}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path d="M6.50059 14.0002L10.7006 9.8002L13.7006 12.8002L17.3006 9.2002M4.4 21.2C3.07451 21.2 2 20.1255 2 18.8V4.4C2 3.07452 3.07452 2 4.4 2H18.8C20.1255 2 21.2 3.07452 21.2 4.4V18.8C21.2 20.1255 20.1255 21.2 18.8 21.2H4.4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

                            </svg>

                            {isExpanded && <span className='ms-3'>Dashboard</span>}
                        </div>

                    </NavLink>

                </li>

                <li className={liStyle}>

                    <NavLink to={'/products'} className={linkStyle}>

                        <div className={`rounded-[6px] text-white flex items-center ${isExpanded ? "" : "justify-center"}`}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path d="M11.4352 21.8826C16.4252 21.8826 20.4705 17.8373 20.4705 12.8473H11.4352L11.4352 3.81195C6.44517 3.81192 2.3999 7.8572 2.3999 12.8473C2.3999 17.8373 6.44514 21.8826 11.4352 21.8826Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

                                <path d="M15.3881 2.11768V8.80727H21.5999V8.32944C21.5999 4.89878 18.8188 2.11768 15.3881 2.11768Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

                            </svg>


                            {isExpanded && <span className='ms-3'>Products</span>}

                        </div>

                        {isExpanded && <div className='w-[24px] h-[24px] bg-[var(--min-color)] rounded-[2px] flex items-center justify-center text-white'>12</div>}

                    </NavLink>

                </li>

                <li className={liStyle}>

                    <NavLink to={'/projects'} className={linkStyle}>

                        <div className={`rounded-[6px] text-white flex items-center ${isExpanded ? "" : "justify-center"}`}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4999 21.5998H4.49984C3.17436 21.5998 2.09984 20.5253 2.09985 19.1998L2.09995 4.79989C2.09995 3.47441 3.17447 2.3999 4.49995 2.3999H15.3002C16.6257 2.3999 17.7002 3.47442 17.7002 4.7999V9.5999M6.30023 7.1999H13.5002M6.30023 10.7999H13.5002M6.30023 14.3999H9.90023M15.3428 20.3999L12.9002 17.9456M12.9002 17.9456L15.2324 15.5999M12.9002 17.9456H20.1274C21.1065 17.9456 21.9002 17.1519 21.9002 16.1728C21.9002 15.1936 21.1065 14.3999 20.1274 14.3999H17.7002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>



                            {isExpanded && <span className='ms-3'>Projects</span>}

                        </div>

                        {isExpanded && <div className='w-[24px] h-[24px] bg-[var(--min-color)] rounded-[2px] flex items-center justify-center text-white'>12</div>}

                    </NavLink>

                </li>

                <li className={liStyle}>

                    {isExpanded && <PanelMenu model={items} multiple={true} className="w-full" />}

                    {
                        !isExpanded &&
                        <NavLink to={'/services'} className={linkStyle}>

                            <div className='flex items-center justify-between'>

                                <div className={`rounded-[6px] text-white flex items-center ${isExpanded ? "" : "justify-center"}`}>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.39974 5.32959V3.52959C5.39974 2.86685 5.937 2.32959 6.59974 2.32959H17.9997C18.6625 2.32959 19.1997 2.86685 19.1997 3.52959V8.32959M2.40068 19.2706L2.40077 10.1463C2.40078 9.23235 2.40044 7.93062 2.40015 6.98807C2.39994 6.32515 2.93728 5.78838 3.60019 5.78838H9.31841L12.0834 8.74202H20.3997C21.0625 8.74202 21.5997 9.2793 21.5997 9.94205L21.5994 19.2707C21.5994 20.5962 20.5249 21.6707 19.1994 21.6707L4.80068 21.6706C3.47519 21.6706 2.40067 20.5961 2.40068 19.2706Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>

                            </div>
                        </NavLink>

                    }

                </li>

                <li className={liStyle}>

                    <NavLink to={'/users'} className={linkStyle}>

                        <div className={`rounded-[6px] text-white flex items-center ${isExpanded ? "" : "justify-center"}`}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1999 13.6855C20.4672 14.6324 21.5999 17.0165 21.5999 18.4855C21.5999 18.9431 21.266 19.3141 20.8541 19.3141H20.3999M15.5999 9.80432C16.4197 9.33006 16.9713 8.44365 16.9713 7.4284C16.9713 6.41316 16.4197 5.52675 15.5999 5.05249M3.14567 19.3141H16.2827C16.6946 19.3141 17.0285 18.9431 17.0285 18.4855C17.0285 15.6089 14.6252 13.2769 9.71419 13.2769C4.80317 13.2769 2.3999 15.6089 2.3999 18.4855C2.3999 18.9431 2.7338 19.3141 3.14567 19.3141ZM12.457 7.4284C12.457 8.94324 11.229 10.1713 9.71419 10.1713C8.19935 10.1713 6.97133 8.94324 6.97133 7.4284C6.97133 5.91357 8.19935 4.68555 9.71419 4.68555C11.229 4.68555 12.457 5.91357 12.457 7.4284Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>

                            {isExpanded && <span className='ms-3'>Users</span>}

                        </div>

                    </NavLink>

                </li>

                <li className={liStyle}>

                    <NavLink to={'/profile'} className={linkStyle}>

                        <div className='rounded-[6px] text-white flex items-center'>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.23779 19.5C4.5632 17.2892 7.46807 15.7762 12.0001 15.7762C16.5321 15.7762 19.4369 17.2892 20.7623 19.5M15.6001 8.1C15.6001 10.0882 13.9883 11.7 12.0001 11.7C10.0118 11.7 8.40007 10.0882 8.40007 8.1C8.40007 6.11177 10.0118 4.5 12.0001 4.5C13.9883 4.5 15.6001 6.11177 15.6001 8.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>


                            {isExpanded && <span className='ms-3'>Profile</span>}

                        </div>

                    </NavLink>

                </li>

                <div className={`${isExpanded ? "mb-10" : "absolute left-0 bottom-5"}`}>

                    <li className={`flex items-center ${isExpanded ? "my-5" : ""} px-3 cursor-pointer text-[#a2a0a9]`}>

                        <NavLink to={'/settings'} className={linkStyle}>



                            <div className={`rounded-[6px] text-white flex items-center ${isExpanded ? "" : "justify-center"}`}>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75602 4.25546L10.0271 2.42882C10.214 2.16017 10.5206 2 10.8479 2H12.653C12.9791 2 13.2847 2.15898 13.4719 2.426L14.7297 4.22032M8.75602 4.25546C8.40917 4.75031 7.83262 4.99279 7.22068 4.94956M8.75602 4.25546C8.40748 4.74912 7.83262 4.9948 7.22068 4.94956M7.22068 4.94956L4.97158 4.80836C4.65073 4.78821 4.33977 4.92355 4.13585 5.17208L2.99534 6.56208C2.77914 6.82557 2.71204 7.18104 2.8173 7.50522L3.47315 9.52504M3.47315 9.52504C3.56207 9.81338 3.57345 10.1223 3.50981 10.414M3.47315 9.52504C3.56334 9.81286 3.5743 10.1211 3.50939 10.417M3.50981 10.414C3.44533 10.7023 3.3071 10.9745 3.10185 11.1949M3.50981 10.414L3.50939 10.417M3.10185 11.1949L1.61575 12.7933C1.38735 13.0389 1.29732 13.3827 1.376 13.7088L1.77856 15.377C1.85699 15.702 2.09263 15.9663 2.40653 16.0813L4.44838 16.8297C4.73328 16.9399 4.97941 17.1191 5.16569 17.3449M3.10185 11.1949C3.30836 10.9763 3.44533 10.705 3.50939 10.417M5.16569 17.3449C5.35071 17.5713 5.47672 17.8445 5.52561 18.1404M5.16569 17.3449C5.35239 17.5713 5.47883 17.8438 5.52561 18.1404M5.16569 17.3449L5.16274 17.3416C5.15052 17.3268 5.13745 17.3114 5.12481 17.297M5.52561 18.1404L5.87327 20.2759C5.92654 20.6031 6.13849 20.8827 6.43917 21.0223L8.0671 21.7781C8.35817 21.9132 8.6964 21.9005 8.97646 21.7438L10.8902 20.6731M10.8902 20.6731C11.1553 20.5242 11.4512 20.4495 11.747 20.4491M10.8902 20.6731C10.9952 20.6134 11.1052 20.5657 11.2181 20.5299C11.3897 20.4756 11.5684 20.4488 11.747 20.4491M11.747 20.4491C11.9009 20.4495 12.0547 20.4698 12.2047 20.51C12.3442 20.5474 12.48 20.6018 12.6085 20.6731M11.747 20.4491C12.0442 20.4487 12.3417 20.5234 12.6085 20.6731M12.6085 20.6731L14.612 21.7576C14.8932 21.9099 15.2304 21.9185 15.519 21.7806L17.1391 21.0068C17.4387 20.8637 17.6478 20.5812 17.6971 20.2529L18.0085 18.178M18.0085 18.178C18.0553 17.8805 18.1796 17.6052 18.3642 17.3768M18.0085 18.178C18.0536 17.8798 18.1788 17.6049 18.3642 17.3768M18.3642 17.3768C18.5476 17.1508 18.7907 16.9707 19.074 16.8593M18.3642 17.3768C18.5471 17.1499 18.7895 16.9693 19.074 16.8593M19.074 16.8593L21.1369 16.0508C21.4449 15.9301 21.6733 15.6649 21.7469 15.3425L22.1326 13.6539C22.2061 13.3323 22.1162 12.9952 21.8924 12.7528L20.3973 11.134M20.3973 11.134C20.1883 10.9128 20.0424 10.6485 19.9716 10.3677M20.3973 11.134C20.2991 11.0307 20.2148 10.9177 20.1461 10.798C20.0677 10.662 20.0092 10.5173 19.9716 10.3677M19.9716 10.3677C19.9021 10.0889 19.9063 9.79349 19.9944 9.50752L20.641 7.43487C20.7414 7.11307 20.6729 6.76235 20.4588 6.50196L19.3464 5.14894C19.1401 4.89805 18.8249 4.76298 18.5009 4.7867L16.2776 4.94956M16.2776 4.94956C15.9733 4.97104 15.6741 4.91308 15.4078 4.78839M16.2776 4.94956C15.9729 4.97228 15.6741 4.91385 15.4078 4.78839M15.4078 4.78839C15.1397 4.6621 14.9046 4.4679 14.7297 4.22032M15.4078 4.78839C15.1393 4.66256 14.9037 4.46888 14.7297 4.22032M3.50939 10.417L3.51024 10.4126M15.1359 12.0106C15.1359 13.8756 13.59 15.3874 11.6834 15.3874C9.77677 15.3874 8.23089 13.8756 8.23089 12.0106C8.23089 10.1457 9.77677 8.63386 11.6834 8.63386C13.59 8.63386 15.1359 10.1457 15.1359 12.0106Z" stroke="white" stroke-width="1.5" />
                                </svg>

                                {isExpanded && <span className='ms-3'>Settings</span>}

                            </div>

                        </NavLink>

                    </li>

                    <li className={`flex items-center ${isExpanded ? "my-5" : ""} px-3 cursor-pointer text-[#a2a0a9] w-full`}>

                        <div className='flex items-center justify-between w-full'>

                            <div className={`rounded-[6px] text-white justify-between w-full flex p-3 items-center ${isExpanded ? "bg-[#202831]" : "justify-center"}`}>

                                <div className='relative'>

                                    <img src={require('../../../assets/nabowy.PNG')} className={`${isExpanded ? "w-[40px] h-[40px] rounded-full" : "w-[30px] h-[30px] rounded-full"}`} />

                                    <div className='absolute right-0 bottom-0 w-[10px] h-[10px] bg-[#14A34D] rounded-full'></div>

                                </div>

                                {
                                    isExpanded &&
                                    <Fragment>
                                        <div className='text-[12px]'>

                                            <h2 className='text-white font-medium mb-1'>Mahmoud Nabowy</h2>

                                            <p className='text-[#CFCFCF]'>nabowy.work@gm...</p>

                                        </div>

                                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>

                                    </Fragment>
                                }

                            </div>

                        </div>
                    </li>
                </div>

            </ul>

            {
                isExpanded &&
                <div onClick={handelMnueScroll} className='scroll-btn w-[30px] h-[30px] cursor-pointer rounded-full bg-[var(--min-color)] flex items-center justify-center fixed bottom-3 left-[220px] text-white'>
                    <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </div>
            }

        </div >
    )
}
