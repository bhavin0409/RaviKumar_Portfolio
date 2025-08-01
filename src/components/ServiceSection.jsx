import { ConstructionIcon, LaptopMinimalCheck, MoreHorizontal, PencilRuler } from 'lucide-react'
import React from 'react'

const ServiceSection = () => {
    return (
        <section className='w-full md:p-10 px-5 md:px-28 '>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-14'>
                <div className='flex items-start justify-start flex-col px-5 py-7 border border-b-slate-500'>
                    <div>
                        <PencilRuler className='font-bold text-[#00487F] text-2xl mt-1 inline-block' />{" "}  <span className='play-display text-lg font-semibold px-3'>Lead Generation</span>
                    </div>
                        
                    <br />
                    <p>I speak directly with clients to gather their requirements and then connect with my network to find suitable matches. Based on the requirements, I identify the right clients and bring together both sellers and buyers to help finalize the deal.
                    </p>
                </div>
                <div className='flex items-start justify-start flex-col px-5 py-7 border border-b-slate-500'>
                    <div>
                        <LaptopMinimalCheck className='font-bold text-[#00487F] text-2xl mt-1 inline-block' />{" "} <span className='play-display text-lg font-semibold px-3'>Construction Work</span>
                    </div>
                    <br />
                    <p>We fulfill client requirements for application development as well as website design and development.
                    </p>
                </div>
                <div className='flex items-start justify-start flex-col px-5 py-7 border border-b-slate-500'>
                    <div>
                        <ConstructionIcon className='font-bold text-[#00487F] text-2xl mt-1 inline-block' />{" "} <span className='play-display text-lg font-semibold px-3'>IT Work</span>
                    </div>
                    <br />
                    <p>I gather requirements for various types of construction projects including buildings, row houses, flats, bungalows, hospitals, factories, offices, and temples. I then discuss these requirements with my main construction partner firm and arrange meetings with the client to move the project forward. Whether it’s an incomplete project or construction from scratch, we handle both types of work</p>
                </div>
                <div className='flex items-start justify-start flex-col px-5 py-7 border border-b-slate-500'>
                    <div>
                        <MoreHorizontal className='font-bold text-[#00487F] text-2xl mt-1 inline-block' />{" "} <span className='play-display text-lg font-semibold px-3'>Other</span>
                    </div>
                    
                    <br />
                    <p>I am always interested in exploring new business opportunities and building new relationships and networks.</p>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection