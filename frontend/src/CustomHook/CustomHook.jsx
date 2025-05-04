import { useEffect, useState } from "react"

const useStorageHook = () =>
{
    const[value, setvalue] = useState(()=>
    {
        
        let info = localStorage.getItem("items");
        let ans;
        if(info)
        {
            ans = JSON.parse(info);
        }
        else
        {
            ans = [];
        }
        return ans;        
    })

    useEffect(()=>{
        const item = localStorage.setItem("items", JSON.stringify(value))
    },[value])

    return [value, setvalue];
}
export default useStorageHook;
