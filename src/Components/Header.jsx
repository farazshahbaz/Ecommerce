import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo.svg"
import Navbar from '../Components/Navbar'
import { MdClose, MdMenu } from 'react-icons/md'
import user from '../assets/user.svg'
import { Link } from 'react-router-dom'
import { GrCart } from "react-icons/gr";
import { useSelector } from 'react-redux'
const Header = () => {
    let [menuopen, setmenuopen] = useState(false);
    let items = useSelector(state => state.cart)
    return (
        <header >
            <div className='w-[100%] gap-x-8 md:w-full flex justify-between px-2 py-2  shadow-lg'>
                {/* logo */}
                <div className='w-[15%]'>
                    <Link to={"/"}><img src={Logo} alt="Logo" className=' mt-4 md:mt-4 w-[65px] pt-2 ' /></Link>
                </div>
                {/* Navbar */}
                <div className='w-[50%]'>
                    <Navbar Containerstyle={'hidden  md:flex pt-2 mt-4 gap-x-5 xl:gap-x-10 lg:gap-x-7 font-semibold transition-all '} />
                    <Navbar Containerstyle={`${menuopen ? "flex flex-col item-center gap-y-7 py-8 font-semibold transition-all text-gray-600 text-md   w-[100%] mt-7 md:hidden" : "hidden "}`} />
                </div>
                <div className='w-[35%] flex justify-center gap-3 mr-3'>
                    <div>
                        {menuopen ? (<MdClose className='text-[26px] m-auto transition-all mt-5 border-1 rounded-4xl md:hidden cursor-pointer hover:text-[#ff813f] ' onClick={() => setmenuopen(!menuopen)} />)
                            : (<MdMenu className='    text-[26px] m-auto md:hidden transition-all border-1 rounded-4xl  mt-5 cursor-pointer hover:text-[#ff813f]' onClick={() => setmenuopen(!menuopen)} />)}
                    </div>
                    <div className='flex gap-x-6 relative mr-2'>
                        <span className=' text-orange-500  rounded-full font-bold absolute top-1  left-5 text-[19px] '>{items.length}</span>
                        <NavLink to={"cart-page"} className={"text-[25px] m-auto md: transition-all  mt-5 cursor-pointer hover:text-[#ff813f]"}><GrCart /></NavLink>
                    </div>
                    <div className='flex justify-center gap-1 transition-all'>
                        {/* <NavLink to={"login"} className='mt-3 md: px-3 cursor-pointer font-semibold text-sm md:text-md lg:text-lg text-white w-[90px] bg-orange-500 flex justify-center items-center gap-1 h-[40px] rounded-full transition-all hover:bg-orange-700'>
                            <img src={Logout} className='w-[17px] h-[17px]' />Logout</NavLink> */}
                        <NavLink to={"login"} className='mt-3 md: px-3 cursor-pointer font-semibold text-sm md:text-md lg:text-lg text-white w-[90px] bg-orange-500 flex justify-center items-center gap-1 h-[40px] rounded-full transition-all hover:bg-orange-700'>
                            <img src={user} className='w-[17px] h-[17px]' /> Login</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
