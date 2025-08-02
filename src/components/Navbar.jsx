import { useEffect, useState } from 'react'
import { cn } from "@/lib/utils.js"
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ]


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={cn(
            'w-full z-40 transition-all duration-300',
            "py-3 bg-background/80 backdrop-blur-md shadow-xs"
        )}>
            <div className='container flex items-center justify-between'>
                <a href='#hero' className='text-xl font-bold text-primary flex items-center'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground '>
                            <img src="/R copy.png" className='inline-block gap-2.5' height={50} width={50} />
                        </span>
                        <span className='text-[#00487F]'> Kumar</span>
                    </span>
                </a>

                {/* Desktop navbar */}
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, key) => (
                        <Link key={key} to={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    className='md:hidden text-foreground p-2 z-50 hover:text-primary transition-colors duration-300'
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu - Moved outside .container */}
            <div className={cn(
                'absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className='flex flex-col text-xl space-y-10 justify-center items-center'>
                    {navItems.map((item, key) => (
                        <Link
                            key={key}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Navbar