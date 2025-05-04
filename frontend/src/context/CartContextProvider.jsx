import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import useStorageHook from "../CustomHook/CustomHook";

const CartContextProvider = ({children}) =>
    {
    const [cartItem, setCartItem] = useStorageHook([]);
   
    
    useEffect(()=>{
        localStorage.setItem("items", JSON.stringify(cartItem));
    },[cartItem])

    return (
        <CartContext.Provider value={{cartItem, setCartItem}}>
            {children}
        </CartContext.Provider>
        
    )
}
export default CartContextProvider;