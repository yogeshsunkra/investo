import React from 'react'
import leaders from '/partners.svg';

const Partners = () => {
  return (
    <div className='w-full flex flex-col gap-8 justify-center items-center py-8 my-8'>

    <span className='w-[60%] font-Manrope font-[500] p1 md:h5  text-center text-text-2'>Trusted by Over 5,500+ Industry Leaders</span>

      <img src={leaders} width={800}/>
    </div>
  )
}

export default Partners
