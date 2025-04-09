import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import All_products from '../assets/all_products';
import Item from '../Components/Item';
const Category = ({ Category, banner }) => {
    return (
        <section>
            <div className='mx-auto max-w-[1440px] px-6 py-1 lg:px-20; xl:py-2'>
                <div>
                    <img src={banner} className='block my-7 m-auto rounded-lg ' />
                </div>
                <div className='flexbetween my-6 mx-2'>
                    <h5><span className='font-bold'>Showing 1-12 </span> out of 36 products</h5>
                    <div className='flexbetween ring-1 ring-slate-900/15 px-6 py-2.5 rounded-full gap-2 '>Sort by <MdOutlineKeyboardArrowDown /> </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {All_products.map((item) => {
                        if (Category === item.category) {
                            return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price}
                                old_price={item.old_price} />
                        }
                    })}
                </div>
                <div className='mt-16 text-center mb-10'>
                    <button type='button' className=' px-7 py-2.5 font-semibold text-sm  text-white  md:text-md lg:text-lg bg-black transition-all hover:bg-black rounded-full'>Load more</button>
                </div>
            </div>
        </section>

    )
}

export default Category
