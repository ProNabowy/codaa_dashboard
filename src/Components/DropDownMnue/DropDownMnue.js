import React, { useEffect, useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

// Define a function component named DropDown that accepts options, title, moreClasses, and any other props passed in via spread syntax
export default function DropDownMnue({ options, optionLabel, placeholder, selectedOption, moreClasses, state, ...moreOptions }) {
    // Set up state to track the selected city

    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        selectedOption && selectedOption(selectedItem)
    }, [selectedItem]);

    // Render a div with custom classes and a CascadeSelect component with options, custom styling, and a placeholder
    return (
        <div className={`card flex justify-content-center ${moreClasses}`}>

            <CascadeSelect value={selectedItem} onChange={e => {

                setSelectedItem(e.value);

            }} options={options} optionLabel={optionLabel || 'name'} optionGroupLabel="name" optionGroupChildren={['states', 'cities']} className="w-full md:w-14rem"

                breakpoint="767px" placeholder={placeholder || 'Select Option'} {...moreOptions} />

        </div>
    )
}