import OrderViewContext from "./OrderviewContext";

import React, { useEffect, useState } from "react";


const OrderViewContextProvider = ({ children }) =>
{
    const[OrderList, setOrderList] = useState([]);
    console.log(OrderList);    
    useEffect(()=>{
        localStorage.setItem("orderList",JSON.stringify(OrderList));
    },[OrderList])


    return(
        <OrderViewContext.Provider value={{OrderList, setOrderList}}>
            {children}
        </OrderViewContext.Provider>
    )
}
export default OrderViewContextProvider;