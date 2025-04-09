import React from 'react'
const ProductDescription = () => {
    return (
        <div className='mt-20'>
            <div className='text-white text-[15px] flex mb-4 gap-3'>
                <button className='bg-black py-2 px-15 font-bold  cursor-pointer '>Description</button>
                <button className=' font-bold border-1 bg-transparent px-15 py-1 text-green-90 transition-all text-black hover:bg-black hover:text-white   cursor-pointer '> Cart Guide</button>
                <button className=' font-bold border-1 bg-transparent px-15 py-1 text-green-90 transition-all text-black hover:bg-black hover:text-white   cursor-pointer  '>Size Guide</button>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod voluptas sunt amet quibusdam eius est debitis beatae id sit, ipsam fuga soluta nostrum, corrupti nobis praesentium magnam deserunt deleniti? Eligendi voluptatum quod repellat exercitationem cupiditate reprehenderit accusantium voluptates nemo, non dignissimos illum. Nihil obcaecati provident veritatis magni ratione hic reprehenderit, ipsam sequi facilis mollitia dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum esse unde quo, quisquam autem magni consectetur animi quam necessitatibus.</p>
            </div>
        </div>
    )
}

export default ProductDescription
