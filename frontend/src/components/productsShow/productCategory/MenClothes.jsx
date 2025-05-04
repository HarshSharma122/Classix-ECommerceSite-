import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../../context/CartContext';
import totalPriceContext from '../../../context/totalpriceContext/totalPrice';
function MenClothes({ product_id, product_name, price, description, image }) {
    const { cartItem, setCartItem } = useContext(CartContext);
   const {totalPrice, settotalprice} = useContext(totalPriceContext);
    const ItemAdded = () => {

        const items = {
            product_id,
            product_name,
            price,
            description,
            image,   
        }
        setCartItem([...cartItem, items])
        settotalprice(totalPrice + parseInt(items.price))
       

    }


    return (
        <div className=" cursor-pointer  mb-7 ml-1 flex flex-col z-0">
            <div className="border-1 img_section h-[82vh] w-[100%]">
                <img className="w-100 h-[100%] object-fill" src={image} alt="" />
            </div>
            <div className="product__info mt-4 ml-2 flex-[40%]">
                <div className="product__name">
                    <h3 className='font-sm text-l'>{product_name}</h3>
                </div>
                <div className="mt-0 product__price text-l font-mono font-sm text-[#65503b]">
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>


                <button onClick={ItemAdded} className="text-sm rounded-lg text-white border-1 bg-black mb-5 mt-5  border-none w-25 h-8 cursor-pointer">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
export default MenClothes;