import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../assets/data'
const Footer = () => {
    return (
        <footer >
            <div className='bg-primary'>
                <div className=' m-auto w-[97%] h-[500px] gap-3 sm:h-[440px] md:h-[400px] p-8'>

                    <Link to={"/"} className='text-[24px] font-bold font-sans'>shoppee</Link>
                    <div className='flex flex-wrap  pt-2 justify-between '>
                        {FOOTER_LINKS.map((col) => (
                            <div className='pt-4'>
                                <h1 className='text-[18px] font-bold text-gray-900'>{col.title}:</h1>
                                <ul className='text-gray-500 flex flex-col gap-2'>
                                    {col.links.map((link) => (
                                        <li><Link to={"/"}>{link}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className='flex flex-col pt-4'>
                            <h1 className='text-[18px] font-bold text-gray-900'>{FOOTER_CONTACT_INFO.title}:</h1>
                            <br />
                            {FOOTER_CONTACT_INFO.links.map((link) => (
                                <div className='text-gray-500 flex flex-col mb-2 gap-0.5'>
                                    <p>{link.label}:</p>
                                    <p>{link.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className='text-[18px] font-bold text-gray-900 gap-1 pt-4'>
                            <h1>{SOCIALS.title}:</h1>
                            <ul className='flex items-center justify-between gap-2'>
                                {SOCIALS.links.map((link) => (
                                    <Link to={"/"}><img src={link} className='h-[22px] w-[22px]' alt='socialIcon' /></Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-gray-300 bg-gray-400'>
                    <p className='text-center text-gray-700 p-3 text-lg'>2024 Shoppee | All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
