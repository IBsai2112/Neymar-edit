import React from 'react'
import Video from './video.jsx'
const homeTopText = () => {
  return (
    <div className='font-[font2] pt-5 text-center'>
      <div className='text-[7vw] uppercase leading-[5.5vw] justify-center flex items-center'>The prince</div>
      <div className='text-[7vw] uppercase leading-[5.5vw] justify-center flex items-center'>who
        <div className='h-[10vw] w-[21vw] rounded-[1vw] overflow-hidden'  ><Video /></div>
        never</div>
      <div className='text-[7vw] uppercase leading-[5.5vw] justify-center flex items-center'>became king.</div>
    </div>
  )
}

export default homeTopText