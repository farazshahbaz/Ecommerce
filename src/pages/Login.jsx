import React from 'react'
const Login = () => {
    return (
        <section className='mx-auto max-w-[1440px] bg-primary pt-20 bg-pr flexcenter flex-col px-6 lg:px-20;'>
            <div className='max-w-[555px] h-[500px] bg-white px-14 py-10 m-auto'>
                <h3 className='font-bold text-[35px]'></h3>
                <div className='flex flex-col gap-4 mt-7'>
                    <input type="text" placeholder='Your Name:' className='h-14 w-full pl-5
                    outline-none rounded-xl bg-slate-900/15' />
                    <input type="email" placeholder='Emai Address:' className='h-14 w-full pl-5
                    outline-none rounded-xl bg-slate-900/15' />
                    <input type="password" placeholder='Password' className='h-14 w-full pl-5
                    outline-none rounded-xl bg-slate-900/15'/>
                </div>
                <button className='px-3 w-full py-3 bg-black text-white font-semibold text-md
                my-5 rounded-md'>Continue</button>
                <p className='text-black font-bold'>Already have an account? <span className='text-secondary underline
                cursor-pointer'>Login</span></p>
                <div className='flexcenter mt-6 gap-3'>
                    <input type="Checkbox" />
                    <p>By Cobtinuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </section>

    )
}

export default Login
