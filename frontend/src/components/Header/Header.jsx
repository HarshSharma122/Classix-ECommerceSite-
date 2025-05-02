import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, SearchIcon, ShoppingCart, User } from 'lucide-react'
import Hero from '../Hero/Hero'

function Header() {

    return (
        <>
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="bg-navbar border-gray-200 px-4 lg:px-4 py-1">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center text-white">
                        <h1 className='text-black font-medium text-2xl'>Classix</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                       
                        <NavLink
                            to="/search"
                            className="text-[#737373] focus:ring-gray-300 font-medium w-[35px] flex items-center justify-center  rounded-lg text-[14px] focus:outline-none px-1 py-1 mr-1"
                        >
                            <Search/>
                        </NavLink>
                        <NavLink
                            to="/account"
                            className="text-[#737373]  focus:ring-gray-300 font-medium w-[35px] flex items-center justify-center  rounded-lg text-[14px] focus:outline-none px-1 py-1 mr-1"
                        >
                            <User />
                        </NavLink>
                        
                        <NavLink
                            to="/cartItem"
                            className="flex items-center justify-center  text-[#737373]  focus:ring-gray-300 font-medium  rounded-lg text-sm px-4 lg:px-1 py-2 lg:py-2.5 mr-1 focus:outline-none">
                            {/* <img className="w-9"  alt="" /> */}
                            <div className="flex items-center flex-col">
                                <span className='leading-1'>3</span>
                                <ShoppingCart />
                                {/* <h1 className="ml-1 text-l">Cart</h1> */}
                            </div>
                        </NavLink>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2">
                        <ul className="flex ml-6 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={`text-[#737373] block py-2 pr-1 pl-2 duration-200 text-base border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-zinc-400 lg:p-0 font-bold`
                                    }
                                >
                                    Men
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className={`text-[#737373] block py-2 pr-1 pl-2 duration-200 text-base border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-zinc-400 lg:p-0 font-bold`
                                    }
                                >
                                    Women
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className={`text-[#737373] block py-2 pr-1 pl-2 duration-200 text-base border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-zinc-400 lg:p-0 font-bold`
                                    }
                                >
                                    Accessiories
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bg-[#F5F0EB] h-10  justify-between items-center w-full lg:flex">

            </div>
        </header>
        <Hero/>
        </>

    )
}
export default Header
