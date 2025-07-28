import React from 'react'

const ExperienceSection = () => {
  return (
    <div className='md:px-3 pt-5 flex flex-col justify-start items-start'>
      <h1 className='md:text-4xl text-2xl font-bold playfair-display md:pb-10 pb-3'>
        My Experience
      </h1>

      <div className='pb-10'>
        <div className='py-3 md:px-15 px-10'>
          <p className='text-xl text-[#01B2B7] font-medium'>IT company</p>
          <span class="text-sm inset-0 flex items-center justify-start pt-3">
            Out of my total 8 years of experience, 6 years have been with IT organizations, where I have handled roles in implementation, support, and client relationship/success management.
          </span>
        </div>
        <div className='py-3 md:px-15 px-10'>
          <p className='text-xl text-[#01B2B7] font-medium'>Non-IT company</p>
          <span class="text-sm inset-0 flex items-center justify-start pt-3">         
            Out of the total 8 years of experience, 2 years have been with non-IT organizations, where I have worked in insurance, outsourcing, and business development (BDE) roles.
          </span>
        </div>
        <div className='py-3 md:px-15 px-10'>
          <p className='text-xl text-[#01B2B7] font-medium'>Own Consulting Firm</p>
          <span class="text-sm inset-0 flex items-center justify-start pt-3">
            For the past 1 year, alongside my job, I have also been running my own consulting firm as a side business.
          </span>
        </div>

      </div>
    </div>
  )
}

export default ExperienceSection