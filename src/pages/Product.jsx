import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import ProductHd from '../Components/ProductHd'
import ProductDisplay from '../Components/ProductDisplay'
import ProductDescription from '../Components/ProductDescription'
import RelatedProduct from '../Components/RelatedProduct'
const Product = () => {
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));
    // console.log(all_products)
    // console.log(productId)
    // console.log(product)
    if (!product) {
        return <div>Page Not Found!</div>
    }

    return (
        <section className='mx-auto max-w-[1440px] px-6 py-10 lg:px-20 '>
            <div>
                <ProductHd product={product} />
                <ProductDisplay product={product} />
                <ProductDescription />
                <RelatedProduct />
            </div>
        </section>
    )
}

export default Product
