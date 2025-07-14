import React from 'react'
import './background.css'
import Hero from './Hero'
import { motion } from 'framer-motion'

function Header() {
    return (
        <>
            <div className='HeaderContainer w-full h-screen'>
                {/* Navbar Animation */}
                <motion.div
                    className="relative w-full py-0.5 z-[9999]"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <ul className='flex text-white justify-center gap-3 sm:gap-5 text-lg mt-4 px-5 sm:px-0'>
                        <li className='hover:scale-110 hover:underline hover:cursor-pointer transition-all'>
                            <a href="">
                                <div className='flex justify-center'>
                                    <img className='h-6 w-6' src="/home.png" alt="" />
                                </div>
                                Home
                            </a>
                        </li>
                        <li className='hover:scale-110 hover:underline cursor-pointer transition-all'>
                            <a href="#aboutme">
                                <div className='flex justify-center'>
                                    <img className='h-6 w-6' src="/about.png" alt="" />
                                </div>
                                About
                            </a>
                        </li>
                        <li className='hover:scale-110 hover:underline cursor-pointer transition-all'>
                            <a href="#skills">
                                <div className='flex justify-center'>
                                    <img className='h-6 w-6' src="/skills.png" alt="" />
                                </div>
                                Skills
                            </a>
                        </li>
                        <li className='hover:scale-110 hover:underline cursor-pointer transition-all'>
                            <a href="#contact">
                                <div className='flex justify-center'>
                                    <img className='h-6 w-6' src="/phone.png" alt="" />
                                </div>
                                Contact
                            </a>
                        </li>
                        <li className='hover:scale-110 hover:underline cursor-pointer transition-all'>
                            <a href="https://github.com/marmikvyass" target='_blank'>
                                <div className='flex justify-center'>
                                    <img className='h-6 w-6' src="/github.png" alt="Github" />
                                </div>
                                Github
                            </a>
                        </li>
                    </ul>
                </motion.div>

                {/* Hero section is already designed, you can animate inside Hero component */}
                <Hero />
            </div>
        </>
    )
}

export default Header
