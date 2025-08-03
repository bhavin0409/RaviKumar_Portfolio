import React from 'react'

const SkillSection = () => {
    return (
        <div className='md:px-3 pt-5  flex flex-col justify-start items-start'>
            <h1 className='md:text-5xl text-2xl font-bold playfair-display md:pb-10 pb-3'>
                Skills
            </h1>

            <div className='pb-10'>
                <div className='py-3 text-[#01B2B7] md:px-15 px-10'>
                    <p className='barlow-semi-condensed-regular md:text-xl text-lg'>Marketing</p>
                    <span class="text-sm inset-0 flex items-center justify-end text-[#01B2B7] font-semibold">
                        90%
                    </span>
                    <progress value="90" max="100" className='md:w-96 w-64 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-[#01B2B7]'></progress>
                </div>
                <div className='py-3 text-[#01B2B7] md:px-15 px-10'>
                    <p className='barlow-semi-condensed-regular md:text-xl text-lg'>Lead Generation</p>
                    <span class="text-sm inset-0 flex items-center justify-end text-[#01B2B7] font-semibold">
                        100%
                    </span>
                    <progress value="100" max="100" className='md:w-96 w-64 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-[#01B2B7]'></progress>
                </div>
                <div className='py-3 text-[#01B2B7] md:px-15 px-10'>
                    <p className='barlow-semi-condensed-regular md:text-xl text-lg'>Client Communication</p>
                    <span class="text-sm inset-0 flex items-center justify-end text-[#01B2B7] font-semibold">
                        100%
                    </span>
                    <progress value="100" max="100" className='md:w-96 w-64 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-[#01B2B7]'></progress>
                </div>
            </div>
        </div>
    )
}

export default SkillSection