import React from 'react'

function SectionFeatures({name,img, color}) {
  return (
    <div>
      
      <div className="border-[#F5F0EB] border-1 w-[100%] md:h-[110vh] h-[50vh] cursor-pointer">
        <img className='object-fit w-[100%] h-[100%]' src={img} alt="" />
        <h3 className='relative bottom-[60px] pl-4 text-[#242424] font-bold hover:bg-[#65503b] pb-[20px] pt-[15px]'>{name}</h3>
      </div>
    </div>
  )
}

export default SectionFeatures