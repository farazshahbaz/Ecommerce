import React from 'react'
import Cart_item from './Cart_item'
import { useSelector } from 'react-redux'
import Cart_empty from './Cart_empty'
import Cart_subtotal from './Cart_subtotal'
const Cart = () => {
    let items = useSelector(state => state.cart)
    console.log(items)
    return (
        <section className=' mx-auto sm:max-w-[1440px] px-6 py-10 pt-25 lg:px-20 bg-primary'>
            <div>
                {items.length <= 0 ? <Cart_empty /> : <table className='m-auto w-full bg-white'>
                    <thead>
                        <tr className='bg-slate-900/15 text-start py-12 text-[10px] sm:text-[18px] '>
                            <th className='p-1 py-2 '>Product</th>
                            <th className='p-1 py-2 '>Title</th>
                            <th className='p-1 py-2 '>Price</th>
                            <th className='p-1 py-2 '>Quantity</th>
                            <th className='p-1 py-2 '>Total</th>

                            <th className='p-1 py-2 '>Remove</th>
                        </tr>
                    </thead>
                    <tbody>{items.map((item) => <Cart_item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}
                        qty={item.qty} />)}</tbody>
                </table>}
                {/* {items.map((item) => <Cart_item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}
                qty={item.qty} />)} */}
            </div>
            <div>
                {items.length > 0 ? <Cart_subtotal /> : null}
            </div>
        </section>
    )
}

export default Cart
