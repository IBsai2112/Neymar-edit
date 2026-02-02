
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Stairs = () => {

  const currentPath = useLocation().pathname

      const stairParentRef = useRef(null)

  useGSAP(function(){

    const tl = gsap.timeline()

     tl.to(stairParentRef.current,{
      display:'block'
    })

    // tl.set(stairParentRef.current, { display: 'block' })
    
    tl.from('.stair',{
      height:0,
      // duration:1,
      stagger:{
        amount:-0.3}
    })
    tl.to('.stair',{
      // duration:0.2,
      stagger:{
        amount:-0.2},
      y:'100%',
   
  })
    tl.to(stairParentRef.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0%',
   
  })
  },[currentPath])

  return (
   <div ref={stairParentRef} className='fixed h-screen w-screen top-0 z-20'>
         <div className='flex h-full w-full'>
        <div className='stair h-full w-1/5 bg-black'> </div>
        <div className='stair h-full w-1/5 bg-black'> </div>
        <div className='stair h-full w-1/5 bg-black'> </div>
        <div className='stair h-full w-1/5 bg-black'> </div>
        <div className='stair h-full w-1/5 bg-black'> </div>
      </div>
      </div>
  )
}

export default Stairs