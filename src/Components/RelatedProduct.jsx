import React from 'react'
import Item from './Item'
import { POPULAR } from '../assets/data'
const RelatedProduct = () => {
    return (
        <div className='container m-auto py-12 xl:py-25'>
            <h1 className='pb-5 text-3xl font-semibold font-sans text-center text-black'>Popular Products</h1>
            {/* container */}
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                {POPULAR.map((item) => (
                    <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price}
                        old_price={item.old_price} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProduct
