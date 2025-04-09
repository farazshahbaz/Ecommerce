import React from 'react'
const Newletter = () => {
    return (
        <section className='py-12 xl:py-25 bg-white shadow-xl'>
            <div className='mx-auto xl:w-[80%] flex flexcenter flex-col w-full'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-5'>Exclusive offers on Your Email</h3>
                <h4 className='text-gray-500 text-[18px] sm:text-[22px] md:text-[25px] mb-5 font-semibold uppercase' >Subscribe to your newletter and stay updated</h4>
                <div className='flex items-center justify-between ring-1  ring-slate-900/15 rounded-full hover:ring-slate-900/15 text-black w-full max-w-[588px]'>
                    <input type="email" placeholder='Your email address' className='w-full bg-transparent ml-7 border-none outline-none text-[16px] ' />
                    <button type="button" className='flexcenter px-7 py-3 font-semibold text-sm  text-white  md:text-md lg:text-lg bg-black transition-all hover:bg-black rounded-full'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Newletter
