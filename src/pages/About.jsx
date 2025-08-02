import React from 'react'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ExperienceSection from '../components/ExperienceSection'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 py-5'>
        <div className='flex flex-col justify-center items-start '>
          <div className='md:px-8 md:py-1 py-10'>
            <p className='font-bold text-gray-600'>________</p>
          </div>

          <div className='md:px-8 pb-5 '>
            <h1 className='md:text-7xl text-4xl font-extrabold md:px-5 md:py-12  playfair-display'>About Me</h1>
          </div>
        </div>

        <div className='flex items-start justify-center md:py-10 py-2 flex-col '>
          <div className='md:w-[440px] md:h-[440px] w-80 h-80 border rounded-full'>
            <img src="/bg-06-free-img.jpg" alt="" className='rounded-full' />
          </div>
        </div>
      </div>

      <AboutSection />
      <div className='md:container px-5'>
        <ExperienceSection />
      </div>

      <div className='md:container px-5 flex justify-center items-center md:justify-around md:flex-row py-10 flex-col'>
        <h1 className='playfair-display font-bold md:text-6xl text-4xl md:pb-0 pb-4'>Service</h1>

        <div>
          <div className='w-20'>
            <Link to={"/services"}>
              <svg className='hover:border-b-2 hover:border-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About