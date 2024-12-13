import React from 'react' 
import  landing from '../assets/landing.png'
const About = () => {
  return (
    <div  className='pt-[10vh]'>
      <h1  className='text-[52px] leading-[62px]'>About Figma Land</h1>
      <div  className='text-[52px] leading-[62px]'>
      <p >We always work at the speed of thought</p>
           </div>
        <div>
      <img src={landing} alt="/" className=' w-[100%] overflow-hidden lg:pb-5 lg:pr-2   ' />
      </div>
    </div> 
  )
}

export default About;
