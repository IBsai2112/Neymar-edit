import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArr = [
    '/public/4-ney.jpeg',
    '/public/assets/1-Ney.jpeg',
    '/public/assets/2-Ney.jpeg',
    '/public/assets/3-Ney.jpeg',
    '/public/assets/5-ney.jpeg',
    '/public/assets/6-ney.jpeg',
    '/public/assets/7-ney.jpeg',
    '/public/assets/8-ney.jpg',
    '/public/assets/9-ney.jpeg',
    '/public/assets/10-ney.jpeg',
    '/public/assets/11-ney.jpeg',
    '/public/assets/12-ney.jpeg',
    '/public/assets/13-ney.jpeg',
  ];
  


  useGSAP(function() {    
    gsap.to(imageDivRef.current, {

      scrollTrigger: {
        trigger:imageDivRef.current,
        markers:true,
        start:"top 21%",
        end:"top -90%",
        pin:true,
        onUpdate:(elem)=>{
          let imagesIndex;

          if (elem.progress < 1){
            imagesIndex = Math.floor(elem.progress * imageArr.length )
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
    <div className='section1 '>
    <div ref={imageDivRef} className='absolute h-[33vw] overflow-hidden w-[25vw] rounded-2xl top-10 left-[22vw]'>
      <img ref={imageRef} className='w-full h-full object-cover' src="/public/4-ney.jpeg" alt="Neymar Jr"/>
    </div>
     <div className='relative font-[font2]'>
      <div className='mt-[58vh]'>
        <h1 className='text-[11vw] text-center uppercase leading-[13vw]'>Neymar da Silva <br/>
           Santos Júnior</h1>
      </div>
      <div className='mt-15 pl-[40%]'>
        <p className='text-3xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neymar da Silva Santos Júnior, born in 1992, is a legendary Brazilian forward recognized for his exceptional dribbling, flair, and playmaking, ranking as Brazil's top international goalscorer. He achieved fame with Santos FC before thriving at FC Barcelona (part of the 'MSN' trio) and PSG, winning numerous titles including the UEFA Champions League. </p>
      </div>
    </div>
   </div>
   <div className="section2 h-screen flex ">

   </div>
   </div>
  )
}

export default agence