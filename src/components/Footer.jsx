const Footer = () => {
  return (
    <footer className="w-full z-40 bg-[#f8fafc] backdrop-blur-md shadow-xs px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
      <div className="flex flex-col space-y-3 md:space-y-5">
        <p className="text-lg md:text-xl font-semibold playfair-display">Based in New York, working worldwide.</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold md:border-b-4 playfair-display md:border-black inline-block mt-1">Get in touch</h2>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-20 w-full md:w-auto'>
        <div className="flex flex-col space-y-3 md:space-y-5">
          <h4 className="text-base md:text-lg font-semibold">Social</h4>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="http://www.google.com" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Behance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 md:space-y-5">
          <h4 className="text-base md:text-lg font-semibold">Services</h4>
          <ul className="mt-2 space-y-1">
            <li className="text-gray-600 hover:text-black transition-colors">
              UI/UX Design
            </li>
            <li className="text-gray-500 hover:underline">
              Web Development
            </li>
            <li className="text-gray-600 hover:text-black transition-colors">
              App Development
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

