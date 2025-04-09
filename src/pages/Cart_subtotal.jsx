import React from 'react'
import { useSelector } from 'react-redux'
const Cart_subtotal = () => {
    let items = useSelector(state => state.cart)
    let Subtotal = items.reduce((total, item) => total + (item.qty * item.price), 0);
    let Taxes = Math.floor(Subtotal * (0.5 / 100));
    let Total = Math.floor(Subtotal + Taxes);
    return (
        <div>
            <div className='flex flex-col  my-16 p-8 rounded-md bg-white max-w-[666px] shadow-lg'>
                <div>
                    <h4 className='font-bold text-2xl sm:text-3xl lg:text-4xl'>Summary</h4>
                </div >
                <div className='mt-8'>
                    <div className='flex justify-between py-4 '>
                        <h4 className='font-semibold'>Subtotal:</h4>
                        <h4>${Subtotal}</h4>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4'>
                        <h4 className='font-semibold'>Taxes:</h4>
                        <h4>${Taxes}</h4>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4'>
                        <h4 className='font-semibold'>Shipping fee:</h4>
                        <h4>Free</h4>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4 mt-1 mb-1'>
                        <h4 className='font-bold text-xl'>Total:</h4>
                        <h4>${Total}</h4>
                    </div>
                    <button className='px-10 py-3 rounded-full cursor-pointer
                     bg-black text-white font-semibold text-md sm:text-lg md:px-13
                    '>Checkout</button>
                    {/* <div className='flex flex-col py-4 gap-2'>
                        <h4 className='font-semibold text-[20px]'>Your Coupon code enter here:</h4>
                        <div className='bg-primary h-12 flex justify-between items-center rounded-full
                        pl-5 ring-1 ring-slate-900/15'>
                            <input type="text" placeholder='Coupon ode' className=' border-none outline-none' />
                            <button type="button" className='px-6 py-3 rounded-full cursor-pointer
                     bg-black text-white font-semibold text-md sm:text-lg md:px-8'>Submit</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Cart_subtotal
