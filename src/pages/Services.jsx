import ServiceSection from "../components/ServiceSection"


const Services = () => {
  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-10 py-5'>
        <div className='flex flex-col justify-center items-start '>
          <div className='md:px-8 md:py-1 py-10'>
            <p className='font-bold text-gray-600'>________</p>
          </div>

          <div className='md:px-8 pb-5 '>
            <h1 className='md:text-7xl text-4xl font-extrabold md:px-5 md:py-12  playfair-display'>Services</h1>
          </div>
        </div>

        <div className='flex items-start justify-center md:py-10 py-2 flex-col '>
          <div className='md:w-[440px] md:h-[440px] w-80 h-80 border rounded-full'>
            <img src="/src/assets/public/bg-03-free-img.jpg" alt="" className='rounded-full' />
          </div>
        </div>
      </div>
        <div className='md:px-30 px-8 pt-4 flex justify-start items-start md:gap-10'>
          <div>
            <h1 className='playfair-display font-bold md:text-5xl text-2xl md:pb-10 pb-4'>What I Do</h1>
            <h3>From understanding your requirements, discussing to my network and delivering the final product, I do everything that falls in between these lines.</h3>
          </div>
        </div>
      <ServiceSection />
    </div>
  )
}

export default Services