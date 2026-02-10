import { Construction, LaptopMinimalCheck, Mail, MoreHorizontal, PencilRuler, Phone } from 'lucide-react'
import ServiceSection from '../components/ServiceSection'
import SkillSection from '../components/SkillSection'
import ExperienceSection from '../components/ExperienceSection'
import { Link } from 'react-router-dom'

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
            <h1 className='md:text-6xl text-4xl font-extrabold playfair-display'>Ravi Prajapati</h1>
            <h2 className='md:text-4xl text-2xl font-bold playfair-display opacity-45 pt-6'>Consultant & Broker</h2>
          </div>
          <div className='md:px-7 md:pt-20 pt-2 flex flex-row gap-4'>
            <Mail className='font-bold text-[#00487F] text-2xl mt-1'/>
            <h3 className='text-xl'>rservicetechnology@gmail.com</h3>
          </div>
          <div className='md:px-7 pt-2 flex flex-row gap-4'>
            <Phone className='font-bold text-[#00487F] text-2xl mt-1' />
            <h3 className='text-xl'>+91 75739-43832</h3>
          </div>
        </div>

        <div className='flex items-center justify-center md:py-10 py-2 flex-col '>
          <div className='md:w-[440px] md:h-[440px] w-80 h-80 border rounded-full'>
            <img src="/Hero_img.jpg" alt="Hero_img" width={440} height={440} className='md:w-[440px] md:h-[440px] w-80 h-80 rounded-full'/>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home
