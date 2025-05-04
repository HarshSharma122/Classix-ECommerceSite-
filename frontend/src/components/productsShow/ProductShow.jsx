import React, { useEffect, useState } from 'react'

import MenClothes from './productCategory/MenClothes';
import SideNavbar from './SideNavbar/SideNavbar';
import apiClient from '../../library/api_client';
import { PRODUCT_SHOW } from '../../util/constants';
function ProductShow() {
    const [value, setValue] = useState([]);
    useEffect(()=>{
        const show = async ()=>
        {
            try{
                const response = await apiClient.get(PRODUCT_SHOW, {withCredentials:true});
                setValue(response.data);
            }catch(error)
            {
                console.log("Client side error");
            }
        }
        show();
    },[value, setValue])

    return (
        <div className='flex'>
            <div className='flex-[85%]'>
                <div className='grid grid-cols-4 gap-1 z-0 mt-10 mr-1'>
                    {
                        value.map((ans) => (
                            <MenClothes product_id={ans._id} product_name={ans.ProductName} price={ans.ProductPrice} description={ans.ProductDesc} image={ans.ProductImg} />
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default ProductShow
