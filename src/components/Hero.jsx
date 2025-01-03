import React, { useRef } from 'react'
import { useEffect } from 'react';
import Secure from '/secure_sheild.svg';
import Button from '../components/Button';
import IphoneHero from '/iPhone_hero.svg';
import People from '/people.svg';
import { PiArrowBendLeftUp } from "react-icons/pi";
import { PiArrowBendRightUp } from "react-icons/pi";
import { GoArrowUp } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const Hero = () => {


    useGSAP(()=>{

        const float = gsap.timeline(
            {
                repeat:-1,
                yoyo:true
            }
        )

        float.from('.box',{y:-10 ,duration:3,})
        float.from('.boxR',{y:-10 ,duration:3,},"<")
 
        const tl = gsap.timeline(
            {
                delay:0.8,
            }
        );


        tl.from(".box",{
            x:"50%",
            duration:1,
            stagger:0.1,
            opacity:0
            
        })
        tl.from(".boxR",{
            x:"-50%",
            duration:1,
            stagger:0.1,
            opacity:0
            
        },'<')

    }



)


    return (
        <div className='hero-container w-full md:w-[90%]   mt-6 '>

            {/* Hero Text */}
            <div className='w-full flex flex-col items-center justify-center   py-4 md:pb-0 pt-4'>

                <div className='bg-ui-6 rounded-3xl overflow-hidden flex  items-center p-[2px] justify-center'>
                    <div className='bg-white rounded-full p-[2px]'>
                        <img src={Secure} />
                    </div>
                    <div className='p3 font-[500] font-Manrope text-text-2 mx-1 md:p2 ' >Smart Finance,Smart Living</div>

                </div>

                <div className='w-full  text-center px-8'>
                    <h1 className='font-Manrope font-[700] text-text-2 h3 md:h1 md:leading-tight  leading-snug text-balance'>
                        Revolutionizing Finance for a Better Tomorrow, Today
                    </h1>
                    <p className='p2 font-Inter font-[400] text-text-2 leading-normal py-2 md:px-32 lg:px-56 xl:px-80 text-balance'>
                        Fintech services leverage technology to enhance financial processes, offering innovative solutions for banking
                    </p>
                </div>
                <div className='flex gap-4 justify-center w-full text-center py-2'>
                    <Button children="Get Started" className="flex rounded-full overflow-hidden bg-ui-1
                     font-Manrope p3 md:p2 text-text-2  py-2 justify-center"/>
                    <Button children="Request a demo" className=" flex rounded-full overflow-hidden bg-ui-2
                     font-Manrope p3 md:p2  text-text-1 py-2 justify-center"/>

                </div>

            </div>

            {/* Hero Mobile Section */}
            <div className=' w-full md:w-[70%] lg:w-[50%] flex  flex-col justify-center items-center  relative  pt-12 mx-auto'>
                <div className='w-[60%] md:w-[70%] max-h-[17rem] flex justify-center items-start  overflow-hidden z-10'>
                    <img src={IphoneHero} alt="" />
                </div>
                {/* Absolute div */}

                {/* 1 */}
                <div  className='box absolute flex flex-col gap-2 justify-between py-4 bg-white rounded-3xl pl-6 pr-10 
                                z-20  top-40 left-0 -rotate-[10deg] shadow-2xl  drop-shadow-2xl '>
                    <span className='flex items-center gap-1 p2 text-ui-4'>
                        <p className='font-inter p3 '>Total Income</p> <CiDollar /></span>
                    <span className='h5 font-[600] text-ui-3'>$234K</span>
                    <span className='p1 text-ui-3 flex gap-1 items-center'>
                        <span className='bg-ui-1 rounded-full p-[2px] overflow-hidden'><PiArrowBendLeftUp /></span>
                        <p className='font-Inter font-[300] p2 py-1'>235.45%</p>
                    </span>
                </div>
                    {/* 2 */}
                <div  className='box absolute flex flex-col justify-between py-1 bg-white rounded-3xl px-4 
                                  top-12 left-0 -rotate-[5deg] shadow-2xl  shadow-ui-5 drop-shadow-2xl'>

                    <span className='p2 text-ui-3 flex gap-1 items-center'>
                        <span className='bg-ui-1 rounded-full p-[2px] overflow-hidden'><GoArrowUp /></span>
                        <p className='font-Manrope font-[500] '>235.45%</p>
                    </span>
                </div>

                    {/* 3 */}
                <div  className='boxR absolute flex flex-col justify-between py-4 bg-white rounded-3xl px-4 
                                  top-0 right-0  shadow-2xl  shadow-ui-5 drop-shadow-2xl'>
                    <span className=' flex items-center justify-center p3 text-ui-4'><p className='px-1 font-Inter '>Total Income</p><CiDollar/> </span>
                    <span className='h6 font-Manrope font-[600] text-ui-3'>$567.34K</span>
                    
                </div>

                {/* 4 */}
                <div  className='boxR absolute flex flex-col justify-between py-2 bg-white rounded-3xl px-4 
                              z-20 top-40 right-0  shadow-2xl  shadow-ui-5 drop-shadow-2xl'>
                                    <span className='flex items-center justify-center'>
                                        <img src={People} width={70}/>
                                        <span className='text-ui-1 h6 px-1'><FaHeart/></span>
                                        <p className='p2 font-Manrope text-text-2 font-[600]'>+12K</p>
                                    </span>
                </div>



            </div>
        </div>
    )
}

export default Hero
