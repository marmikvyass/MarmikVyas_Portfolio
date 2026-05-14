import React from 'react'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <>
            <div className="HeroContainer text-white flex flex-col justify-center items-center ">
                

                <motion.div
                    className='relative sm:text-start text-center z-20 px-1.5 sm:px-0 bg-black/1 pointer-events-none'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Flip animation for name */}
                    <motion.h1
                        className='tracking-widest mt-5 sm:mt-20 text-4xl font-bold md:text-8xl'
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Marmik Vyas
                    </motion.h1>

                    {/* Fade in subtitle */}
                    <motion.p
                        className="tracking-wider text-2xl md:text-5xl text-white mt-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Building intelligent and impactful solutions as a <br /> <span className="font-bold text-white">MERN + GenAI Developer</span>
                    </motion.p>

                    <motion.p
                        className="text-white mt-4 text-md md:text-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Passionate about building clean & responsive AI-powered web-applications, with a focus on LLMs,
                        vector databases, and <br />real-world AI integrations.
                    </motion.p>

                    <motion.a
                        href='/MVResume.pdf'
                        target='_blank'
                        className='pointer-events-auto'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                    >
                        <button className='px-5 py-3 relative z-[9999] rounded-full bg-slate-900 hover:bg-slate-950 hover:scale-110 cursor-pointer mt-5 sm:mt-10 transition-all'>
                            Download Resume
                        </button>
                    </motion.a>
                </motion.div>
            </div>
        </>
    )
}

export default Hero;
