import { Mail, Mailbox, MailIcon, Phone } from 'lucide-react'
import React from 'react'
import Contactus from '../components/Contactus'

const Home = () => {
  return (
    <>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 py-3'>
        <div className='flex flex-col justify-start items-start '>
          <div className='md:px-8 md:py-20 py-10'>
            <p className='py-2 opacity-45 font-semibold tracking-tight barlow-semi-condensed-regular'>HELLO, MY NAME IS</p>
            <p className='font-bold'>________</p>
          </div>

          <div className='md:px-8 pb-10'>
            <h1 className='md:text-6xl text-4xl font-bold playfair-display'>Ravi Prajapati</h1>
            <h2 className='md:text-4xl text-3xl font-bold playfair-display opacity-45 pt-6'>consultant </h2>
          </div>

          <div className='md:px-7 md:pt-20 pt-2 flex flex-row gap-4'>
            <Mail className='font-bold text-[#00487F] text-2xl mt-1' />
            <h3 className='text-xl'>ravi@gmail.com</h3>
          </div>
          <div className='md:px-7 pt-2 flex flex-row gap-4'>
            <Phone className='font-bold text-[#00487F] text-2xl mt-1' />
            <h3 className='text-xl'>+91 986-575-8545</h3>
          </div>
        </div>

        <div className='flex items-center justify-center md:py-10 py-2 flex-col '>
          <div className='md:w-[440px] md:h-[440px] w-80 h-80 border rounded-full'>
            <img src="src\assets\public\bg-06-free-img.jpg" alt="" className='rounded-full' />
          </div>
        </div>
      </div>
      <div className='w-full md:p-10 px-5 py-5 md:px-28 md:pt-20 '>
        <h1 className='playfair-display text-[#01B2B7] pb-3 font-bold'>About Me</h1>
        <h2 className='playfair-display font-bold md:text-5xl text-2xl md:py-2 py-3'>
          I am an enthusiastic consultant based in India, with over 8 years of rich experience across both IT and non-IT sectors
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2 py-5'>
          <div className='flex flex-col justify-start items-start '>
            <div className='pb-5 '>
              <h1 className='md:text-3xl text-lg text-[#01B2B7] font-bold md:py-12  playfair-display'>Received appreciation for my work as a broker</h1>
            </div>
          </div>

          <div className='flex items-start justify-center md:py-10 py-2 flex-col '>
            <h2 className='text-lg font-semibold '>
              I am extremely serious and honest when it comes to work. My goal is simple: complete client satisfaction. If something is possible from my side, it's always a "Yes"—and if not, there will always be a clear and valid reason for saying "No." <br />
              I believe in maintaining clarity at every step of the work process—it's something I truly enjoy and consider a part of my work ethic.
            </h2><br />
            <p>
              I have dedicated a lot of time to building my firm while continuing my job, and I have always been highly aggressive and committed towards my work. I have also met many individuals who have been successfully running their own businesses and offices for years.Because of my honest and transparent approach to work, I am where I am today. I’ve had the opportunity to work with many well-established consultants and brokers. I take a deep interest in my own work, and the appreciation I’ve received has come as a result of consistent hard work and dedication.
            </p>
          </div>
        </div>
      <Contactus />
      </div>
    </>
  )
}

export default Home