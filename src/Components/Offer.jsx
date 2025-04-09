import React from 'react'
const Offer = () => {
    return (
        <section className='bg-banneroffer h-[145px] bg-cover bg-center w-full px-4 sm:h-[200px] md:[230px]  '>
            <div className='container mx-auto  flex-col'>
                <h2 className='text-2xl pt-3 sm:text-3xl md:text-4xl font-bold mb-2'>Summer Sale 50% </h2>
                <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-3'>Men's Leather Formal Wear Shoes</h3>
                <div className='pb-3'>
                    <button type='button' className='flexcenter px-7 py-3  font-semibold text-sm  text-white  md:text-md lg:text-lg bg-black transition-all hover:bg-black rounded-full'>Go to Store</button>
                </div>

            </div>
        </section>
    )
}

export default Offer
