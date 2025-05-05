import React, { useEffect, useState } from "react";
import totalPriceContext from "./totalPrice";
import useStorageHook from "../../CustomHook/CustomHook";
const TotalPriceProvider = ({ children }) => {
    const [totalPrice, settotalprice] = useState(() => {
        let value = localStorage.getItem("TotalPrice");
        let data;
        if (value) {
            data = JSON.parse(value);
        }
        else {
            data = 0;
        }
        return data;
    });
    useEffect(() => {
        localStorage.setItem("TotalPrice", JSON.stringify(totalPrice));
    }, [totalPrice])
    return (
        <totalPriceContext.Provider value={{ totalPrice, settotalprice }}>
            {children}
        </totalPriceContext.Provider>

    )
}
export default TotalPriceProvider;