import React from 'react'
import { useAppStore } from '../../store'
import { NavLink, Link } from 'react-router-dom'
import { Box, BookUser } from 'lucide-react'
import { Button } from "@/components/ui/button"
import apiClient from '../../library/api_client'
import { useNavigate } from 'react-router-dom'
import { DELETE_TOKEN } from '../../util/constants'

function Profile() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore();
  const deleteToken = async()=>
  {
    try{
      const response = await apiClient.post(DELETE_TOKEN, {}, {withCredentials:true});
      if(response.status === 200)
      {
        setUserInfo(null);
      }
      console.log(response);
      
    }catch(error)
    {
      console.log(error);
      
    }
  }
  return (
    <div>
      <div className='pt-14 pl-10 mb-10 border-b-0'>
        <h1 className='flex text-3xl font-bold'>Welcome back,  <h1 className='text-[#65503b]'> { userInfo.username}</h1></h1>
      </div>

      <div className='mt-8 lg:ml-60 flex flex-col ml-20 mb-50 mr-10'>
        <div className='mt-10 grid md:grid-cols-3 grid-cols-2 gap-10 '>

          {/* for orders components start here*/}
          <NavLink to='/profile/Orders'>
            <div className="border-1 shadow-[#65503b] border-t-4 hover: border-[#65503b] rounded p-3 md:pb-10 h-30 md:h-[40] hover:scale-105 transition-all hover:shadow-md ">
              <div className='flex'>
                <div className="">
                  <Box />
                </div>
                <div className="">
                  <h2 className='font-bold text-xl'>Your Orders</h2>
                  <span>
                    <p className='text-gray-500'>Track, return, or buy things again</p>
                  </span>
                </div>

              </div>
            </div>
          </NavLink>

          <NavLink to='/profile/Address'>
            <div className="border-1 shadow-[#65503b] border-t-4 hover: border-[#65503b] rounded p-3 md:pb-10 h-30 md:h-[40] hover:scale-105 transition-all hover:shadow-md">
              <div className='flex'>
                <div className="">
                  <BookUser />
                </div>
                <div className="">
                  <h2 className='font-bold text-xl'>Your Addresses</h2>
                  <span>
                    <p className='text-gray-500'>Edit addresses for orders and gifts</p>
                  </span>
                </div>

              </div>
            </div>
          </NavLink>

        </div>

      </div>
      <button onClick={deleteToken} className='bg-black text-white cursor-pointer rounded text-sm ml-1 p-2 w-[14vw] h-10'>Logout</button>
    </div>
  )
}

export default Profile
