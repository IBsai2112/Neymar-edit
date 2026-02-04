import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArr = [
  '/assets/1-Ney.jpeg',
  '/assets/2-Ney.jpeg',
  '/assets/3-Ney.jpeg',
  '/public/4-ney.jpeg',
  '/assets/5-ney.jpeg',
  '/assets/6-ney.jpeg',
  '/assets/7-ney.jpeg',
  '/assets/8-ney.jpg',
  '/assets/9-ney.jpeg',
  '/assets/10-ney.jpeg',
  '/assets/11-Ney.jpeg',
  '/assets/12-ney.jpeg',
  '/assets/13-ney.jpeg',
  '/assets/14Ney.jpeg',
  '/assets/15Ney.jpeg',
  '/assets/16Ney.jpeg',
  '/assets/17Ney.jpeg',
  '/assets/18Ney.jpeg',
  '/assets/19Ney.jpeg',
  '/assets/20Ney.jpeg',
  '/assets/21Ney.jpeg',
  '/assets/22Ney.jpeg',
  '/assets/23Ney.jpeg',
]
  


  useGSAP(function() {    
    gsap.to(imageDivRef.current, {

      scrollTrigger: {
        trigger:imageDivRef.current,
        // markers:true,
        start:"top 21%",
        end:"top -90%",
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:"transform",
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
      
        onUpdate:(elem)=>{
          let imagesIndex;

          if (elem.progress < 1){
            imagesIndex = Math.round(elem.progress * (imageArr.length - 2))
          } else { 
            imagesIndex = imageArr.length -1
          }
          imageRef.current.src = imageArr[imagesIndex]

        }
      }
    })
  })

  return (
   <div>
    <div className='section1 relative py-1'>
    <div ref={imageDivRef} className='absolute h-[33vw] overflow-hidden w-[25vw] rounded-2xl top-0 left-[22vw]'>
      <img ref={imageRef} className='w-full h-full object-cover' src="/public/4-ney.jpeg" alt="Neymar Jr"/>
    </div>
     <div className='relative font-[font2]'>
      <div className='mt-[60vh]'>
        <h1 className='text-[13vw] text-center uppercase leading-[13vw]'>Neymar&nbsp;&nbsp;da Silva&nbsp;
           Santos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Júnior</h1>
      </div>
      <div className='mt-15 pl-[40%]'>
        <p className='text-3xl leading-[3.5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neymar da Silva Santos Júnior, born in 1992, is a legendary Brazilian forward recognized for his exceptional dribbling, flair, and playmaking, ranking as Brazil's top international goalscorer. He achieved fame with Santos FC before thriving at FC Barcelona (part of the 'MSN' trio) and PSG, winning numerous titles including the UEFA Champions League. </p>
      </div>
    </div>
   </div>
   <div className="section2 h-screen flex ">

   </div>
   </div>
  )
}

export default agence