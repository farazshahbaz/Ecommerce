import React from 'react'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Hero = () => {
    return (
        <div>
            <section className=' h-[370px] background  w-full overflow-hidden flex justify-center flex-col md:h-[470px] lg:h-[510px] '>
                <div className='w-[67%] ml-2'>
                    <div>
                        <h1 className='  text-2xl sm:text-3xl md:text-4xl font-bold mb-5 '>Digital Shopping Hub
                            Junction</h1>
                        <p className='text-gray-500 text-[15px] sm:text-[16px] md:text-[17px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa nesciunt eaque, eius error, facilis sequi odio quo ipsam quasi excepturi.</p>
                    </div>
                    <div className='flex justify-start items-center gap-1 mb-5'>
                        <div className='flex justify-start items-center gap-1 text-[19px] sm:text-[22px]'>
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                        </div>
                        <div className='text-[16px] sm:text-[20px]  flex gap-1'>
                            <div className='font-bold '>176k</div> <span>Excellent Reviews</span>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                        <NavLink to={""} className={'flexcenter px-7 py-3 font-semibold text-sm  text-white  md:text-md lg:text-lg bg-black transition-all hover:bg-black rounded-full'}> Shop now </NavLink>
                        <NavLink to={""} className={'flexcenter  px-7 py-3 gap-x-1 bg-black text-white transition-all font-semibold text-sm md:text-md lg:text-lg  hover:bg-black rounded-full'}><MdOutlineLocalOffer className=' text-xl md:text-2xl' />Offer</NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
