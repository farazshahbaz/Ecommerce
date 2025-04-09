import React from 'react'
import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'
import { MdStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { AddItem } from '../Redux/CartSlice'
const ProductDisplay = (props) => {
    const { product } = props;
    let dispatch = useDispatch();
    return (
        <section className='mb-20' >
            <div className='flex flex-col gap-6 lg:flex-row' >
                {/* left side */}
                <div className='flex gap-x-2'>
                    <div className='flex flex-col flex-wrap gap-[7px]'>
                        <img src={product_rt_1} alt="product_img" className='max-h-[99px]' />
                        <img src={product_rt_2} alt="product_img" className='max-h-[99px]' />
                        <img src={product_rt_3} alt="product_img" className='max-h-[99px]' />
                        <img src={product_rt_4} alt="product_img" className='max-h-[99px]' />
                    </div>
                    <div>
                        <img src={product.image} alt="Product_image" />
                    </div>
                </div>
                {/* Right side */}
                <div className='flex flex-col'>
                    <div className='flex-col'>
                        <h3 className='font-bold text-[25px]'>{product.name}</h3>
                        <div className='flex items-center gap-x-2 text-[20px] '>
                            <MdStar className='text-secondary' />
                            <MdStar className='text-secondary' />
                            <MdStar className='text-secondary' />
                            <MdStar className='text-secondary' />
                            <MdStar className='text-secondary' />
                            <p>(111)</p>
                        </div>

                    </div>
                    <div className='flex gap-x-3 text-[22px] font-semibold '>
                        <div className='line-through'>{product.old_price}</div>
                        <div className='text-secondary'>{product.new_price}</div>
                    </div>
                    <div className='mb-4'>
                        <h4 className='text-[16px] font-bold'>Select Size:</h4>
                        <div className='flex gap-3 my-3'>
                            <div className='ring-2 ring-slate-900/30 h-10 w-10 cursor-pointer flexcenter transition-all hover:ring-slate-900
                    '>S</div>
                            <div className='ring-2 ring-slate-900/30 h-10 w-10 cursor-pointer flexcenter  hover:ring-slate-900
                    '>M</div>
                            <div className='ring-2 ring-slate-900/30 h-10 w-10 cursor-pointer flexcenter  hover:ring-slate-900
                    '>L</div>
                            <div className='ring-2 ring-slate-900/30 h-10 w-10 cursor-pointer flexcenter  hover:ring-slate-900
                    '>XL</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mb-4 text-white'>
                        <button className=' font-semibold border-1 bg-transparent px-3 py-3 w-[95%] rounded-md transition-all text-black hover:bg-black
                         hover:text-white  cursor-pointer lg:w-[70%]' onClick={() => dispatch(AddItem({
                            name: product.name, image: product.image, price: product.new_price, qty: 1, id: product.id
                        }))}> Add to Cart</button>
                        <button className='bg-black py-3 px-3 font-semibold rounded-md 
                        cursor-pointer w-[95%] lg:w-[70%]'>Buy it now</button>
                    </div>
                    <p><span className='text-[18px] text-tertiary font-semibold'>Category:</span> {product.category} | Jacket | Winter</p>
                    <p><span className='text-[18px] text-tertiary font-semibold'>Tags:</span>Modern | Latest</p>
                </div>
            </div >
        </section >
    )
}

export default ProductDisplay
