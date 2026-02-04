import React from 'react'

const fullScreenNav = () => {
  return (
    <div id='fullScreenNav' className='bg-amber-500 text-white py-40 absolute w-full h-screen'>
        <div id='all-links'>
            <div className='link border-t-1 border-white'>
                <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-5.5 uppercase'>Projects</h1>
                <div className='relative flex '>
                    <div className='flex overflow-auto items-center '>
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-5.5 uppercase'>Brazilian football legend</h2>
                    <img className='h-2 w-6 ' src="../4-ney.jpeg" alt="" />
                    <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-5.5 uppercase'>Brazilian football legend</h2>
                    <img className='h-2 w-6' src="../assets/14Ney.jpeg" alt="" />
                </div>
                </div>
            </div>
            {/* <div className='link border-t-1 border-white'>
                <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-5.5 uppercase'>Agence</h1>
                <div>
                    <div>
                    <h2>Brazilian football legend</h2>
                    <img src="../4-ney.jpeg" alt="" />
                    <h2>Brazilian football legend</h2>
                    <img src="../assets/14Ney.jpeg" alt="" />
                </div>
                <div>
                    <h2>Brazilian football legend</h2>
                    <img src="../4-ney.jpeg" alt="" />
                    <h2>Brazilian football legend</h2>
                    <img src="../assets/14Ney.jpeg" alt="" />
                </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default fullScreenNav