import React from 'react'
import Video from '../components/home/video.jsx'
import HomeTopText from '../components/home/homeTopText.jsx'
import HomeBottomText from '../components/home/homeBottomText.jsx'

const home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed '>
        <Video/>
      </div>
      <div className='h-screen w-screen pb-5 overflow-hidden relative flex flex-col justify-between'> 
        <HomeTopText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default home