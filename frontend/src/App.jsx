import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

import { Toaster } from 'sonner'
import { useAppStore } from './store'
import apiClient from './library/api_client'
import { GET_USER_INFO } from './util/constants'
function App() {
  const [loading, setLoading] = useState(true)
  const {userInfo, setUserInfo} = useAppStore();
  useEffect(()=>{
    const getUserData = async()=>
    {
      try{
        const response = await apiClient.get(GET_USER_INFO, {withCredentials:true,})
        if(response.status === 202 && response.data.id)
        {
          setUserInfo(response.data);
        }else
        {
          setUserInfo(undefined)
        }
      }
      catch(error)
      {
        setUserInfo(undefined)
      }finally{
       setLoading(false) 
      }

    }
    if(!userInfo)
    {
      getUserData()
    }else
    {
      setLoading(false);
    }
  },[userInfo, setUserInfo])
  if(loading){
    return <div>Loading.....</div>
  }
  return (
    <>
     <Header/>
     <Toaster closeButton/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
