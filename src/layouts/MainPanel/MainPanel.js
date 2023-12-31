import React, { Fragment, useEffect } from 'react'
import "./index.css"
import MnueHeader from './MnueHeader/MnueHeader'
import MnueMainContent from './MnueMainContent/MnueMainContent';


export default function MainPanel({ isExpanded, setIsExpanded }) {

    // ** Function to handle window resize
    const hendlResize = () => {

        if (window.innerWidth <= 1024) {

            setIsExpanded(false);

        } else {

            setIsExpanded(true);

        }
    }


    useEffect(() => {

        window.addEventListener('resize', hendlResize);

        hendlResize();

        return () => window.removeEventListener('resize', hendlResize);

    }, []);

    return (
        <Fragment>

            <div className={`main-menu menu-fixed menu-accordion bg-[#070A13] ${isExpanded ? "expanded" : ""}`} >

                <MnueHeader isExpanded={isExpanded} setIsExpanded={setIsExpanded}></MnueHeader>

                <MnueMainContent isExpanded={isExpanded}></MnueMainContent>

            </div>

        </Fragment>
    )
}
