import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import OrderViewContext from '../../context/OrderViewContext/OrderviewContext';
import totalPriceContext from '../../context/totalpriceContext/totalPrice';
function Orders() {
    const navigate = useNavigate();
    const {OrderList} = useContext(OrderViewContext);
    const { totalPrice} = useContext(totalPriceContext);
    return (
        <div className='md:flex mb-1'>
            {

            
           
                 OrderList.length === 0 ? (
                    <div>
                        <h2 className='text-xl text-center pt-10 font-medium '>Your cart is empty</h2>
                    </div>
                ) : (
                    <>
                        <div className='lg:flex-[30%] flex-[40%] lg:w-[50%] w-[100%]'>
                            {
                                OrderList.map((ans, index) => (
                                    <div className=" flex items-center justify-center mt-5">
                                        <div className=" cursor-pointer bg-white product_boxes  ml-10 md:w-250  flex flex-col z-0">
                                            <div className="border-1">
                                                <div className="cart__Details flex  pl-4 mb-7 mt-4">
                                                    <div className="img_section mr-4">
                                                        <img className="w-25" src={ans.image} alt="" />
                                                    </div>
                                                    <div className="product__info mt-2">
                                                        <div className="product__name">
                                                            <h3 className='font-sm text-l'>{ans.product_name}</h3>
                                                        </div>
                                                        <div className="product__price">

                                                            {/* <strong className='font-mono text-[#65503b] font-sm'>{'₹' + ans.price}</strong> */}
                                                        </div>
                                                        <div className="product__price">

                                                            <strong className='font-mono text-[#65503b] font-sm'>{ans.orderedAt}</strong>
                                                        </div>



{/* 
                                                        <button onClick={() => removeItem(index)} className="text-sm rounded-lg text-white border-1 bg-black mb-5 mt-1 border-none w-25 h-8 cursor-pointer">
                                                            Remove Cart
                                                        </button> */}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                        {/* <div className="lg:flex-[30%] flex-[10%] ml-1">
                            <div className="lg:w-[25vw]  border-1 items-center justify-center mt-5">
                                <div className=" p-5 cursor-pointer bg-white product_boxes  z-0">
                                    <h3 className='text-l font-bold'>Price Details</h3>
                                    
                                    <div className=" text-sm flex items-center justify-between">
                                        <div>
                                            <h3>Total Amount-</h3>
                                        </div>
                                        <div className="">
                                            <h3 className='font-bold'>{totalPrice}₹</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </>
                )
            }    
          




        </div>

    )
}

export default Orders
