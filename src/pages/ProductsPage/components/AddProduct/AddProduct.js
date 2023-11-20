import React, { useEffect, useState } from 'react'
import FirstPage from '../FirstPage/FirstPage';
import SecondPage from '../SecondPage/SecondPage';
import { Products } from '../../../../apis/apis';
import { Link } from 'react-router-dom';

export default function AddProduct() {

    const [paginator, setPaginator] = useState(1);
    const fetchProducts = new Products();

    const [data, setData] = useState({
        codaa_service_id: "",
        name: "",
        price: "",
        old_price: "",
        image: "",
        description: "",
        demo: "",
        features: "",
    });

    return (
        <section>

            <h2 className='font-medium text-[#CFCFCF] mb-10 capitalize'>view product details</h2>

            {paginator === 1 && <FirstPage setData={setData} data={data} />}
            {paginator === 2 && <SecondPage />}

            <div className='flex items-center justify-between mt-7'>

                <div className='flex items-center'>

                    <button onClick={() => setPaginator(1)} className={`${paginator === 1 ? "bg-[var(--min-color)]" : "bg-[#0D2C3E]"} transition-all text-white p-2 px-7 font-medium rounded-[5px] me-2`}>1</button>
                    <button onClick={() => setPaginator(2)} className={`${paginator === 2 ? "bg-[var(--min-color)]" : "bg-[#0D2C3E]"} transition-all text-white p-2 px-7 font-medium rounded-[5px] me-2`}>2</button>

                </div>

                {
                    paginator === 1 &&
                    <div className='flex items-center'>

                        <Link to={'/products'} className='p-2 px-5 border-2 border-white rounded-[5px] me-4 font-medium text-white'>Dimiss Changes</Link>
                        <button className='p-2 px-5 border-2 border-[var(--min-color)] bg-[var(--min-color)] rounded-[5px] me-4 font-medium text-white' onClick={_ => {
                            fetchProducts.addProducts(data);
                            console.log(data);
                        }}>Submit</button>

                    </div>
                }

            </div>

        </section>
    )
}
