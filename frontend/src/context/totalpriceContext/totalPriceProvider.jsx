import React, { useEffect, useState } from "react";
import totalPriceContext from "./totalPrice";

const TotalPriceProvider = ({children}) =>
    {
    const [totalPrice, settotalprice] = useState(0);
   
    
    // useEffect(()=>{
    //     localStorage.setItem("items", JSON.stringify(cartItem));
    // },[cartItem])

    return (
        <totalPriceContext.Provider value={{totalPrice, settotalprice}}>
            {children}
        </totalPriceContext.Provider>
        
    )
}
export default TotalPriceProvider;