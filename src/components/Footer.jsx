import React from 'react';
import { IoMailOutline } from "react-icons/io5";
import Button from '../components/Button';

const Footer = () => {
  return (
    <div className='w-full footer-bg relative h-full flex flex-col px-0 md:px-20 xl:px-40'>


      <div className=' flex justify-center items-center w-full  md:rounded-[4rem] h-full overflow-hidden footer 
         -top-1/2  z-10 my-8 mx-auto  px-10 md:px-24 lg:px-48 py-12 bg-radial-[at_25%_25%] from-ui-1 to-ui_2'>

          <div className=' text-center drop-shadow-2xl'>
            <h1 className='font-Manrope font-[600] h4 md:h3 xl:h2  leading-snug '>
              Download Our App Free and Enjoy Exclusive Features!

            </h1>
            <p className='p3  xl:p1 font-Inter font-[300] text-text-1/80'> Enjoy seamless navigation, exclusive content, and personalized experiences right at your fingertips. Don't miss out on this opportunity
            to enhance your daily routine with our user-friendly, free mobile app.</p>
            <div className='my-4 flex gap-4 justify-center items-center w-full'>


                     <div className='flex bg-ui-5 px-4 py-1 rounded-full items-center gap-2'>
                      
                        <img src='/google-play.svg' width={30}/>
                      
                      <div className=''>
                        <p className='text-text-2 font-inter font-[400] p3 leading-none text-start'>Get it on</p>
                        <h1 className='text-text-2 font-Manrope font-[600] p2 leading'>Google Play</h1>
                      </div>
                     </div>

                     <div className='flex bg-ui-5 px-4 py-1 rounded-full items-center gap-2'>
                      
                        <img src='/apple.svg' width={30}/>
                      
                      <div className=''>
                        <p className='text-text-2 font-inter font-[400] p3 leading-none text-start'>Get it on</p>
                        <h1 className='text-text-2 font-Manrope font-[600] p2 leading'>Apple Store</h1>
                      </div>
                     </div>


              
            </div>
          </div>

      </div>


      <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-40 xl:gap-60 my-8 px-8 border-b-[1px] border-text-4'>

        <div>
          <div className='flex items-center '>
            <span className=''>
              <img src='/logo_black.svg' />
            </span>
            <span className='h6 text-text-2 font-Manrope font-[600] px-2'>Investo</span>
          </div>
          <div className='py-6 '>
            <p className='font-Manrope text-text-2 p2 font-[600]'>Subscribe</p>
            <p className='font-Inter text-text-4 p2 font-[300] leading-8'>Join our newsletter to stay up to date on features and releases.</p>

            <div className='bg-white px-4 py-2 rounded-full items-center my-2'>
              <div className='flex items-center '>
                <div className='bg-text-3 rounded-full p-1  text-text-2'>
                  <IoMailOutline/>
                </div>
                <div className='w-full'>
                  <input className='outline-none font-Manrope font-[400] p3 px-2 py-1 text-text-4'  placeholder='Enter your message'/>
                </div>
                <Button className="bg-ui-3 rounded-full p3 py-2 text-text-1 font-Manrope">
                  Subscribe
                </Button>
              </div>
            </div>

            <p className='font-Inter text-text-4 p3 font-[300]'>By subscribing you agree to with our <a className='text-text-2 font-[600]  underline cursor-pointer'>Privacy Policy</a> </p>

          </div>

        </div>

        <div className='py-8 w-full' >
          <div className='flex  items-center justify-between h-full '>
            <div className='flex flex-col gap-2 font-Inter text-text-4 font-[300] p3 xl:p2'>
              <p className='font-[700] font-Manrope text-text-2 p2'>Quick Links</p>
              <a>Home</a>
              <a>About</a>
              <a>Services</a>
              <a>Contact</a>
            </div>

            <div className='flex flex-col gap-2 font-Inter text-text-4 font-[300] p3 xl:p2  '>
              <p className='font-[700] font-Manrope text-text-2 p2'>Products</p>
              <a>Ai Assistant</a>
              <a>Mobile App </a>
              <a>Account</a>
              <a>Credit Card</a>
            </div>

            <div className='flex flex-col gap-2 font-Inter text-text-4 font-[300] p3 xl:p2 '>
              <p className='font-[700] font-Manrope text-text-2 p2'>Company</p>
              <a>About</a>
              <a>Privacy Policy</a>
              <a>Support</a>
              <a>Terms of Service</a>
            </div>


          </div>

        </div>

      </div>

      <div>
        
      </div>

    </div>
  )
}

export default Footer
