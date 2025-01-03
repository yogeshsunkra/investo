import React from 'react';
import { useState , useEffect } from 'react';
import iPhoneServ from '/iphone_content.svg';
import World from '/world_connect.svg';
import Partners from '../components/Partners';
import { RiBankLine } from "react-icons/ri";
import { LiaHeadsetSolid } from "react-icons/lia";
import { TfiTarget } from "react-icons/tfi";
import { IoMdCheckmark } from "react-icons/io";
import { SiAmazon } from "react-icons/si";
import { SiUber } from "react-icons/si";
import { SiPaypal } from "react-icons/si";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";

import { faq } from '../constants/data';

import Button from './Button';

import gsap from 'gsap';

import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Content = () => {

  useGSAP(()=>{
    
    const tl = gsap.timeline(
      {
        scrollTrigger:{
          trigger:".two",
          start:"top 50%",
          
          
        }
      }
    );

      tl.from(".notification" , {x:-400 , opacity:0,stagger:0.5,delay:0.3});
  
})

 

const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full  relative shadow-3xl  shadow-ui-5 z-40 py-8 px-6 md:px-12 lg:px-16 xl:px-48 '>
      <Partners />

      <section className='w-full  flex flex-col gap-4 justify-center items-center mb-24  md:flex-row'>
        <div className='md: px-8 '>
          <div className='  md:text-start '>
            <h1 className='text-text-2 font-Manrope h3 lg:h2 leading-tight font-[700] py-4 text-center md:text-start'>Let’s Start Sending Your Money</h1>
            <p className='text-text-4 p3 lg:p2 text-pretty font-Inter'>Integrating advanced technologies, fintech reshapes the financial landscape,
              making it more user-friendly and adaptive to modern needs.</p>
          </div>
          <div className='py-8'>
            <div className='flex gap-4  py-2 '>
              <span className=' rounded-xl bg-text-3 text-text-2 h-max p-2 my-1 text-[2rem] '>
                <RiBankLine />
              </span>

              <span className=' '>
                <h1 className='text-text-2 p1 lg:h6 font-Manrope font-[600]'>First of all create an account</h1>
                <p className='text-text-4 p3 lg:p3 font-Inter font-[400]'>Create an account using your email address or social media profile. Quick and straightforward registration process.</p>
              </span>
            </div>

            <div className='flex gap-4  py-2 '>
              <span className=' rounded-xl bg-text-3 text-text-2 h-max p-2 my-1 text-[2rem] '>
                <TfiTarget />
              </span>

              <span className=' '>
                <h1 className='text-text-2 p1 lg:h6 font-Manrope font-[600]'>First of all create an account</h1>
                <p className='text-text-4 p3 lg:p3 font-Inter font-[400]'>Create an account using your email address or social media profile. Quick and straightforward registration process.</p>
              </span>
            </div>

            <div className='flex gap-4  py-2 '>
              <span className=' rounded-xl bg-text-3 text-text-2 h-max p-2 my-1 text-[2rem] '>
                <LiaHeadsetSolid />
              </span>

              <span className=' '>
                <h1 className='text-text-2 p1 lg:h6 font-Manrope font-[600]'>First of all create an account</h1>
                <p className='text-text-4 p3 lg:p3 font-Inter font-[400]'>Create an account using your email address or social media profile. Quick and straightforward registration process.</p>
              </span>
            </div>


          </div>
        </div>



        <div className='flex shadow-inner shadow-transparent  py-8 items-center justify-center '>
          <img src={iPhoneServ} width={"800"} />
        </div>
      </section>

      {/* Transaction Section */}
      <section className=' w-full  flex flex-col md:flex-row-reverse gap-4   mb-24'>
        <div className='md: px-8 my-2 '>
          <div className='  md:text-start '>
            <h1 className='text-text-2 font-Manrope h3 lg:h2 leading-tight font-[700] py-4 text-center md:text-start'>Transforming Transactions, One Click at a Time</h1>
            <p className='text-text-4 p3 lg:p2 text-pretty font-Inter'>Our service is designed to connect the world, offering reliable and accessible financial solutions to everyone, everywhere.</p>
          </div>
          <div className='py-8'>
            <div className='flex gap-4  py-2 items-center'>
              <span className=' rounded-full bg-ui-6 text-text-2 h-max p-1  p3'>
                <IoMdCheckmark />
              </span>

              <span className=' '>

                <p className='text-text-4 p3 lg:p3 font-Inter font-[400]'>Track transfers with real-time notifications.</p>
              </span>
            </div>

            <div className='flex gap-4  py-2 items-center'>
              <span className=' rounded-full bg-ui-6 text-text-2 h-max p-1  p3 '>
                <IoMdCheckmark />
              </span>

              <span className=' '>

                <p className='text-text-4 p3 lg:p3 font-Inter font-[400]'>Instant transactions, real-time updates.</p>
              </span>
            </div>

            <Button children="Get Started" className="bg-ui-3 px-8 rounded-3xl p3 my-8 py-2" />


          </div>
        </div>



        <div className='two flex flex-col gap-4 xl:gap-6 bg-ui-6 p-4 xl:p-8 w-full h-max rounded-2xl my-8'>

          <div className='notification flex justify-between items-center rounded-2xl bg-white p-4'>
            <div className=' flex  '>
              <span className='p-4 bg-ui-5 rounded-xl h6 text-center text-text-2 flex items-center '>
                <SiAmazon />
              </span>

              <span className='px-4'>
                <h1 className='font-Manrope text-text-2 font-[500] p1'>Amazon</h1>
                <p className='font-Inter font-[300] text-text-4 p3'>online Shopping</p>
              </span>
            </div>
            <div className='text-text-2 p2 font-Manrope font-[400]'>-$150.00</div>

          </div>

          <div className='notification flex justify-between items-center rounded-2xl bg-white p-4 '>
            <div className=' flex  '>
              <span className='p-4 bg-ui-5 rounded-xl h6 text-center text-text-2 flex items-center '>
                <SiUber />
              </span>

              <span className='px-4'>
                <h1 className='font-Manrope text-text-2 font-[500] p1'>Uber</h1>
                <p className='font-Inter font-[300] text-text-4 p3'>Taxi Services</p>
              </span>
            </div>
            <div className='text-text-2 p2 font-Manrope font-[400]'>-$55.00</div>

          </div>

          <div className=' notification flex justify-between items-center rounded-2xl bg-white p-4 '>
            <div className=' flex  '>
              <span className='p-4 bg-ui-5 rounded-xl h6 text-center text-text-2 flex items-center '>
                <SiPaypal />
              </span>

              <span className='px-4'>
                <h1 className='font-Manrope text-text-2 font-[500] p1'>PayPal</h1>
                <p className='font-Inter font-[300] text-text-4 p3'>Money Transfer</p>
              </span>
            </div>
            <div className='text-text-2 p2 font-Manrope font-[400]'>-$320.00</div>

          </div>

        </div>
      </section>

        {/* FAQS Section*/}
      <section className='w-full  flex flex-col gap-4 justify-center   md:flex-row mb-24'>
        <div className='md: px-2 md:px-4 xl:px-12 '>
          <div className=' text-start items-start '>
            <p className='text-text-4 p3 lg:p2 text-pretty font-Inter'>
              faq's</p>
            <h1 className='text-text-2 font-Manrope h3 lg:h2 leading-tight font-[700] py-4  '>
              Frequently Asked Questions
            </h1>
            <p className='text-text-4 p3 lg:p2 text-pretty font-Inter'>Ask any questions</p>
          </div>

        </div>



        <div className='flex  items-center justify-center '>
          {/* <img src={iPhoneServ} width={"800"}/> */}
          <div className=''>

            <div>
              {
                faq && (
                  faq.map((item) => (
                    <div key={item.id} onClick={() => setActiveIndex(item.id)} className='  border-y border-text-4/50 '>
                      <div className='relative '>
                        <h1 className='font-Manrope p1 lg:h6 font-[600] py-4 text-text-2'>{item.text}</h1>
                        <div className='absolute flex  right-0  top-0 py-5  p1 text-text-2 ease-in-out'>{item.id === activeIndex ? <BsDash /> : <BsPlus />}</div>
                      </div>

                      <span key='0' className={`${item.id === activeIndex ? "block" : "hidden"} p3 lg:p1 text-text-4 py-4`}>
                        {item.subText}
                      </span>


                    </div>

                  ))
                )
              }


            </div>



          </div>
        </div>
      </section>


        {/* Connect Section */}
      <section className='w-full  flex flex-col gap-4 justify-center items-center  md:flex-row mb-24'>
        <div className='md: px-8 '>
          <div className='  md:text-start '>
            <h1 className='text-text-2 font-Manrope h3 lg:h2 leading-tight font-[700] py-4 text-center md:text-start'>
            Smooth and Easy International Transfers.
            </h1>
            <p className='text-text-4 p3 lg:p2 text-pretty font-Inter'>
            With user-friendly features, competitive exchange rates, and robust security measures, our platform simplifies international transactions.</p>
          </div>
          <div className='py-8'>
            <div className='flex gap-4  py-2 items-center'>
              <span className=' rounded-full bg-ui-6 text-text-2 h-max p-1  p3'>
                <IoMdCheckmark />
              </span>

              <span className=' '>

                <p className='text-text-4 p3 lg:p3 font-Inter font-[400]'>Seamless international money transfers.</p>
              </span>
            </div>

            <div className='flex gap-4  py-2 items-center'>
              <span className=' rounded-full bg-ui-6 text-text-2 h-max p-1  p3 '>
                <IoMdCheckmark />
              </span>

              <span className=' '>

                <p className='text-text-4 p3 lg:p3 font-Inter font-[400]'>Competitive exchange rates offered daily.</p>
              </span>
            </div>

            <Button children="Get Started" className="bg-ui-3 px-8 rounded-3xl p3 my-8 py-2" />


          </div>
        </div>



        <div className='flex shadow-inner shadow-transparent  py-8 items-center justify-center '>
          <img src={World} width={"800"} />
        </div>
      </section>

      
    </div>
  )
}

export default Content
