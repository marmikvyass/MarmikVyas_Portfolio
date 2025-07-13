import React from 'react'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <>
            <div className="HeroContainer text-white flex flex-col justify-center items-center">
                <div className="w-full">
                    <iframe
                        src='https://my.spline.design/nexbotrobotcharacterconcept-GsB31N39Bs29yVoWHOrcMR4Q/'
                        width='100%'
                        height='100%'
                        className='absolute bottom-0 h-108 sm:h-screen z-0 w-full'
                        allowFullScreen
                        title="3D Robot"
                    ></iframe>
                </div>

                {/* 👇 Added Framer Motion animation wrappers without touching Tailwind */}
                <motion.div
                    className='relative z-10 px-1.5 sm:px-0 backdrop-blur-xs bg-black/1'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className='items-start tracking-widest mt-20 sm:mt-35 text-4xl font-bold md:text-8xl'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Marmik Vyas
                    </motion.h1>

                    <motion.p
                        className="items-start tracking-wider text-2xl md:text-5xl text-white mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Building fast, full-stack experiences with <span className="font-bold text-white">MERN Stack</span>
                    </motion.p>

                    <motion.p
                        className="text-white mt-4 text-md md:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Passionate about building clean, responsive, and real-world web applications with modern JavaScript technologies.
                    </motion.p>

                    <motion.a
                        href='/MVResume.pdf'
                        target='_blank'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                    >
                        <button className='px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-950 hover:scale-110 cursor-pointer mt-5 sm:mt-10 transition-all'>
                            Download Resume
                        </button>
                    </motion.a>
                </motion.div>
            </div>
        </>
    )
}

export default Hero