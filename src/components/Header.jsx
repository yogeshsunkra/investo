import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
    return (
        <div className='w-[100vw]    foo overflow-y-hidden '>
            <div className='w-full  h-full  backdrop-blur-[0.5px] p-6 pb-0 flex flex-col justify-center  items-center'>
                <Navbar/>
                <Hero/>
            </div>
        </div>
    )
}

export default Header
