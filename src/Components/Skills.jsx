import React from 'react'
import './background.css'
import { useEffect } from 'react';
import { motion } from 'framer-motion'

function Skills() {
    const skillVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.07,
                duration: 0.5,
                ease: 'easeOut'
            }
        })
    };

    const skillsData = [
        { name: 'HTML', color: 'bg-orange-600', width: '90%', img: '/html.png' },
        { name: 'CSS', color: 'bg-blue-600', width: '87%', img: '/css.png' },
        { name: 'Javascript', color: 'bg-yellow-500', width: '80%', img: '/js.png' },
        { name: 'ReactJs', color: 'bg-cyan-600', width: '93%', img: '/reactjs.png' },
        { name: 'NodeJs', color: 'bg-gray-600 text-white', width: '80%', img: '/nodejs.png' },
        { name: 'ExpressJs', color: 'bg-white text-black', width: '85%', img: '/expressjs.png' },
        { name: 'MongoDB', color: 'bg-green-600', width: '87%', img: '/mongodb.png' },
        { name: 'PHP', color: 'bg-purple-500', width: '80%', img: '/php.png' },
        { name: 'Laravel', color: 'bg-red-900 text-white', width: '70%', img: '/laravel.png' },
        { name: 'MySQL', color: 'bg-slate-400 text-black', width: '90%', img: '/mySql.png' },
    ];

    return (
        <>
            <div id='skills' className="SkillContainer h-screen w-full">
                <motion.h1
                    className='text-white sm:text-8xl text-5xl font-bold text-center'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: false , amount: 0.6  }}
                >
                    skills
                </motion.h1>

                <div className='flex flex-col text-lg sm:text-2xl gap-6 sm:gap-4 mr-2 sm:mr-0 mt-8'>
                    {skillsData.map((skill, i) => (
                        <motion.div
                            key={i}
                            className='flex items-center'
                            variants={skillVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false}}
                            custom={i}
                        >
                            <div className='px-3 sm:px-20 flex text-white items-center gap-3 sm:w-[300px] w-[147px] shrink-0'>
                                <img className='h-9 w-9 sm:h-12 sm:w-12' src={skill.img} alt={skill.name} />
                                <span className='font-medium'>{skill.name}</span>
                            </div>
                            <div className="w-280 bg-gray-200 rounded-full h-5 overflow-hidden hover:scale-102 transition-all">
                                <div
                                    className={`skill-bar h-5 text-sm px-3 font-semibold rounded-full ${skill.color}`}
                                    style={{ width: skill.width }}
                                >
                                    {skill.width}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills
