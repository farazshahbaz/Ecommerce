import React from 'react'
import empty_cart from '../assets/emptycart.png'
const Cart_empty = () => {
    return (
        <div className='flex flex-col items-center '>
            <img src={empty_cart} className='h-[270px] md:h-[330px] lg:h-[350px]' alt="empty_cart" />
            <h1 className='mt-6 font-bold text-2xl md:text-3xl lg:text-4xl '>Empty Cart...</h1>
        </div>
    )
}

export default Cart_empty
