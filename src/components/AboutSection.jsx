import React from 'react'
import SkillSection from './SkillSection'

const AboutSection = () => {
    return (
        <div className='w-full md:p-10 px-5 py-5 md:px-28 '>
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
                    <h2 className='text-lg font-semibold pb-10'>
                        I am extremely serious and honest when it comes to work. My goal is simple: complete client satisfaction. If something is possible from my side, it's always a "Yes"—and if not, there will always be a clear and valid reason for saying "No." <br />
                        I believe in maintaining clarity at every step of the work process—it's something I truly enjoy and consider a part of my work ethic.
                    </h2>
                    <p>
                        I have dedicated a lot of time to building my firm while continuing my job, and I have always been highly aggressive and committed towards my work. I have also met many individuals who have been successfully running their own businesses and offices for years.Because of my honest and transparent approach to work, I am where I am today. I’ve had the opportunity to work with many well-established consultants and brokers. I take a deep interest in my own work, and the appreciation I’ve received has come as a result of consistent hard work and dedication.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 py-1'>
                <div className='flex flex-col justify-center items-center '>
                    <div className='pb-5 '>
                        <h1 className='md:text-3xl text-2xl text-[#01B2B7] font-bold pb-5 playfair-display'>My Skils</h1>
                        <p className='text-sm barlow-semi-condensed-regular'>I always believe in following rules and keeping the promises I make. I regularly meet new developers, constructors, and consultants in the market, and I have a strong interest in building new contacts and expanding my network.
                        </p>
                    </div>
                </div>
                <div className='md:Container px-5'>
                    {/* <SkillSection/> */}
                    <div className='flex items-center  md:py-10 md:pt-10 pt-3 pb-7'>
                        <div className='flex items-center justify-start flex-col w-auto h-full py-10 bg-[#01B2B7] md:rounded-xl'>
                            <div className='py-3 text-white md:px-24 px-10'>
                                <p className='barlow-semi-condensed-regular'>Marketing</p>
                                <span class="text-sm inset-0 flex items-center justify-end text-white font-semibold">
                                    90%
                                </span>
                                <progress value="90" max="100" className='w-3xs [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-slate-100'></progress>
                            </div>
                            <div className='py-3 text-white md:px-24 px-10'>
                                <p className='barlow-semi-condensed-regular'>Lead generation</p>
                                <span class="text-sm inset-0 flex items-center justify-end text-white font-semibold">
                                    98%
                                </span>
                                <progress value="98" max="100" className='w-3xs [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-slate-100'></progress>
                            </div>
                            <div className='py-3 text-white md:px-24 px-10'>
                                <p className='barlow-semi-condensed-regular'>Client communication</p>
                                <span class="text-sm inset-0 flex items-center justify-end text-white font-semibold">
                                    97%
                                </span>
                                <progress value="97" max="100" className='w-3xs [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-slate-100'></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection