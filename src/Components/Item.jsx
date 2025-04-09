import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Item = ({ id, name, image, old_price, new_price }) => {
    return (
        <div className='rounded-xl overflow-hidden shadow-lg '>
            <div className='relative flexcenter group overflow-hidden transition-all duration-100'>
                <Link to={`/product/${id}`} className='h-12 w-12 bg-white rounded-full flexcenter
                absolute z-20 scale-0 group-hover:scale-125 transition-all duration-700
                 '><FaSearch className='hover:rotate-90 hover:scale-125 transition-all
                 duration-200' /> </Link>
                <img src={image} onClick={window.scrollTo(0, 0)} alt="productimage" className='w-full object-cover mr-2 group-hover:scale-110 transition-all duration-1000' />
            </div>
            <div className='p-4 overflow-hidden'>
                <h4 className='my-[6px] text-gray-600 font-semibold'>{name}</h4>
                <div className='flex gap-5'>
                    <div className='text-lg font-bold text-black'> {new_price}</div>
                    <div className='text-secondary font-bold text-lg line-through'> {old_price}.00</div>
                </div>
            </div>
        </div>
    )
}

export default Item
