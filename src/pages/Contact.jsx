import React from 'react'
import Contactus from '../components/Contactus'

const Contact = () => {
    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 py-5'>
                <div className='flex flex-col justify-center items-start '>
                    <div className='md:px-8 md:py-1 py-10' >
                        <p className='font-bold text-gray-600'>________</p>
                    </div>

                    <div className='md:px-8 pb-5 '>
                        <h1 className='md:text-7xl text-4xl font-extrabold md:px-5 md:py-12  playfair-display'>Contact</h1>
                    </div>
                </div>

                <div className='flex items-start justify-center md:py-5 py-2 flex-col '>
                    <div className='md:w-[440px] md:h-[440px] w-80 h-80 border rounded-full'>
                        <img src="/bg-04-free-img.jpg" alt="" className='rounded-full' />
                    </div>
                </div>

            </div>
                <Contactus/>
        </div>
    )
}

export default Contact