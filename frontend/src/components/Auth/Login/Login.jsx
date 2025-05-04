import React, { useState } from 'react'
import signupImg from '../../../assets/authImg.jpg'
import { NavLink } from 'react-router-dom'
import apiClient from '../../../library/api_client'
import { LOGIN_ROUTES } from '../../../util/constants.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useAppStore } from '../../../store/index.js'

function Login() {
    const {setUserInfo}= useAppStore();

    const navigate = useNavigate();
    const [Inputvalue, setInputValue] = useState({
        email: "",
        password: "",
    })
    function validateLogin()
    {
        if(!Inputvalue.email.length)
        {
            toast.error("Email is required");
            return false;
        }
        if(!Inputvalue.password.length)
        {
            toast.error("Password is Required");
            return false;
        }
        return true;
    }
    const handleLogin = async ()=>
    {
        if(validateLogin())
        {
            const response = await apiClient.post(LOGIN_ROUTES, {
                email:Inputvalue.email,
                password:Inputvalue.password
            }, {withCredentials:true})
            console.log(response);
            if(response.status ===  202)
            {
                setUserInfo(response.data.user)
                navigate('/profile');
            }
        }
    }






    const changeValue = (e) => {
        setInputValue({ ...Inputvalue, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex'>
            <div className='flex-50 lg:block md:block hidden  w-100 h-200'>
                <img src={signupImg} className='w-[100%] h-[100%]' alt="" />
            </div>
            <div className='flex-50 flex items-center justify-center w-100 h-[100vh]'>
                <div className='items-center justify-center'>
                    <h2 className='lg:flex items-center justify-center text-3xl font-bold mb-1'>Login</h2>
                    <div className='w-[34vw] h-[70vh] lg:w-[30vw] lg:h-[50vh]'>

                        <div className="grid grid-col-1 gap-x-5 gap-y-1">
                            <div className='sm:col-span-2'>
                            
                                <div className="mt-2.5">
                                    <input
                                        id="full-name"
                                        name="email"
                                        type="email"
                                        autoComplete="given-number"
                                        required
                                        value={Inputvalue.email}
                                        onChange={changeValue}
                                        placeholder='Email'
                                        className="block w-[30vw]  rounded bg-white px-3.5 py-2 ml-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                                    />
                                </div>

                            </div>
                            <div className='sm:col-span-2'>

                                <div className="mt-2.5">
                                    <input
                                        id="full-name"
                                        name="password"
                                        type="password"
                                        autoComplete="given-number"
                                        required
                                        value={Inputvalue.password}
                                        onChange={changeValue}
                                        placeholder='Password'
                                        className="block w-[30vw]  rounded-md bg-white px-3.5 py-2 ml-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                                    />
                                </div>

                            </div>
                            <button onClick={handleLogin} className='bg-black text-white cursor-pointer rounded text-sm p-2 float-right mt-[20px] ml-[15px] w-[30vw] h-10'>Login</button>
                           

                        </div>
                        <NavLink to='/auth/signup'>
                                <h4 className='flex mt-10 ml-3'>Create a Account. signup</h4>

                        </NavLink>



                    </div>


                </div>

            </div>


        </div>
    )
}

export default Login