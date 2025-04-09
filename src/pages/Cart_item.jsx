import React from 'react'
import p1_img from '../assets/product_1.png'
import { TbTrash } from 'react-icons/tb'
import { useDispatch } from 'react-redux';
import { DeleteItem } from '../Redux/CartSlice';
const Cart_item = ({ name, price, qty, image, id }) => {
    let total = price * qty;
    let dispatch = useDispatch();
    return (
        <tr className='border-b border-slate-900/20 text-center p-6 text-[10px]
                         sm:text-[17px] shadow-md font-semibold '>
            <td className='flexcenter'>{<img src={image} alt="cart-image" className='rounded-lg  my-1 ring-1 ring-slate-900/5'
                height={45} width={45} />}</td>
            <td className='w-30 h-16 sm:w-60 text-black'>{name}
            </td>
            <td className='text-black'>${price}</td>
            <td className=' text-black'>{qty}</td>
            <td className='text-black'>${total}</td>
            <td className='font-bold text-lg cursor-pointer text-red-600 sm:text-xl lg:text-2xl pl-20'><TbTrash onClick={() => dispatch(DeleteItem(id))} /></td>
        </tr>

    )
}
export default Cart_item
