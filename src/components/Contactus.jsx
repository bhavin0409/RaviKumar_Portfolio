import { Send } from 'lucide-react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import config from '../config/config';
const Contactus = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            config.EMAILJS_SERVICE_ID,
            config.EMAILJS_TEMPLATE_ID,
            form.current,
            config.EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                toast.success('Message sent successfully! 🎉 We will get back to you soon.');
                form.current.reset();
            })
            .catch((error) => {
                console.error('Email send error:', error);
                toast.error('Failed to send message. Please try again.');
            });
    }
    return (
        <div className='container px-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:px-10 py-10'>
            <div className='flex flex-col justify-start items-center'>
                <div className='pb-5'>
                    <h1 className='md:text-4xl text-2xl font-extrabold md:px-5 text-start md:pt-14 pb-4 playfair-display'>Send me a message</h1>
                    <h2 className='md:text-lg text-sm font-bold md:px-5 barlow-semi-condensed-regular opacity-45'>
                        Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.
                    </h2>
                </div>
            </div>

            <div className='md:py-10 py-2'>
                <form ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='block text-lg text-gray-500 font-bold mb-3 mt-3'>Your Name</label>
                        <input type="text" id="name" name="name" required className='w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-[#00487F]' placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-lg text-gray-500 font-bold mb-3 mt-3'>Your Email</label>
                        <input type="email" id="email" name="email" required className='w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-[#00487F]' placeholder='hello@gmail.com' />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-lg text-gray-500 font-bold mb-3 mt-3'>Your Message</label>
                        <textarea id="message" name="message" required className='w-full px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-[#00487F]' placeholder="Hello, I'd like to talk about..." />
                    </div>

                    <button type='submit' className='cosmic-button w-full flex items-center justify-center gap-3 mt-5'>
                        Send Message <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Contactus