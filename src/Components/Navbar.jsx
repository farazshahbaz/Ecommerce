import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdCategory, MdContacts, MdHomeFilled, MdShop2, MdShoppingCart } from 'react-icons/md'
const Navbar = ({ Containerstyle }) => {
    return (
        <div className={`${Containerstyle}`}>
            <NavLink to={"/"} className='hover:text-orange-400'><div className='flexcenter gap-x-1'><MdHomeFilled />Home</div></NavLink>
            <NavLink to={"/mens"} className='hover:text-orange-400'  ><div className='flexcenter gap-x-1'><MdCategory />Mens</div></NavLink>
            <NavLink to={"/womens"} className='hover:text-orange-400'><div className='flexcenter gap-x-1'><MdShop2 />Womens</div></NavLink>
            <NavLink to={"/kids"} className='hover:text-orange-400'><div className='flexcenter gap-x-1'><MdContacts />Kids</div></NavLink>
            <NavLink to={"/cart-page"} className='hover:text-orange-400'><div className='flexcenter gap-x-1'><MdShoppingCart />Cart</div></NavLink>
        </div>
    )
}

export default Navbar
