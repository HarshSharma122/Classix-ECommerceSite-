import React from 'react'

function InfoFeatures( {img, heading, subHeading} ) {
  return (
    <div className='md:p-15 p-10 flex flex-col items-center justify-center'>
        <img className='w-7 ' src={img} alt="" />
        <h1 className='mt-2 font-bold text-gray-400'>{heading}</h1>
        <span className='ml-[30px] text-zinc-500 text-sm flex w-60 items-center justify-center'>{subHeading}</span>
    </div>
  )
}

export default InfoFeatures
