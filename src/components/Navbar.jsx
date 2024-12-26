import React from 'react'
import Logo from '/logo.svg';
import MenuLogo from '/menu_logo.svg';


const Navbar = () => {
  return (
    <div className='w-full md:w-[90%] lg:w-[90%] h-fit py-2 md:py-3 pl-6 rounded-full bg-ui-3  flex items-center justify-between '>
      <div className='  flex items-center'>
        <img src={Logo} />
        <span className='mx-4 p1 md:h6 font-Manrope font-[500]'>Investo</span>
      </div>
      <div className='hidden md:flex justify-between w-[50%] xl:w-[30%] font-Inter p2 lg:p1 font-[300] items-center '>

        <a className='text-center'>
          About
        </a>
        <a>
          Services
        </a>
        <a>
          Pricing
        </a>
        <a>
          Contact
        </a>

      </div>
      <div className='bg-ui-1  p-2  overflow-hidden rounded-full mx-2'>
        <img className='md:hidden' src={MenuLogo} width='100%' />
        <span className='hidden md:block font-Inter font-[400] text-text-2'>Download App</span>
      </div>
    </div>
  )
}

export default Navbar
