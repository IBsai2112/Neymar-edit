import React from 'react'
import { Link } from 'react-router-dom'

const homeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-10 '>
      <Link className='text-[5vw] uppercase border-2 leading-[5vw] px-14 pt-4 border-white rounded-full' to="/projects">Projects</Link>
      <Link className='text-[5vw] uppercase border-2 leading-[5vw] px-14 pt-4 border-white rounded-full' to="/agence">Agence</Link>
    </div>
  )
}

export default homeBottomText