// Import necessary dependencies
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useHref } from 'react-router-dom';

// Define the BreadcrumbNav component
export default function BreadcrumbNav() {

    // Set initial state of the `getLocation` variable to the current window location pathname
    const [getLocation, setLocation] = useState('');

    // Get the current location using the `useHref` hook
    const location = useHref();

    // Split the `getLocation` variable into an array called `improvePathname`
    const improvePathname = getLocation.split('/');


    // Update the `getLocation` state variable when the `location` variable changes
    useEffect(() => {
        setLocation(window.location.pathname);
    }, [location]);

    // Render the breadcrumb navigation and login section
    return (
        <div className="flex h-[72px] shadow-sm mb-6">

            <div className="flex items-center justify-between w-full">

                <div className="text-[14px] font-[600]">


                    {/* Render pathnames using the `improvePathname` variable */}
                    {improvePathname.map((path, index) => {

                        // If the current `path` element is not empty:
                        return path.length ? (

                            // Wrap the JSX element in a <Fragment> component to group elements together
                            <Fragment key={index}>

                                {index !== 1 && <span className="px-3 text-[#32404D] text-[30px]">/</span>}

                                {/* Create a clickable link to the URL constructed by concatenating a forward slash with the current `path` element */}
                                <Link Link to={path === (improvePathname[improvePathname.length - 1]) ? window.location.path : "/" + path} className="text-[#FCDAD5] inline-block capitalize text-[20px]">

                                    {/* Replace any hyphens in the `path` element with spaces */}
                                    {path.replace("-", " ")}

                                </Link>

                            </Fragment>

                        ) : (
                            // If the current `path` element is empty, return null
                            null
                        );

                    })}

                </div>


            </div >

        </div >
    )
}