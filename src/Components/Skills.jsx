import React, { useState } from 'react'
import './background.css'
import { useEffect } from 'react';
import { motion } from 'framer-motion'

function Skills() {
    const [skillCard, setSkillCard] = useState(null);
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
        { name: 'HTML', color: 'bg-orange-600', width: '90%', img: '/html.png', desc: 'HTML (HyperText Markup Language) is the foundation of every webpage. It defines the structure and content of a website using elements like headings, paragraphs, images, links, and forms. HTML provides the skeleton that browsers use to render visual content, making it the first building block of web development.' },
        { name: 'CSS', color: 'bg-blue-600', width: '87%', img: '/css.png', desc: 'CSS (Cascading Style Sheets) is used to design and style web pages. It controls layout, colors, typography, spacing, responsiveness, and animations. CSS allows developers to turn a plain HTML structure into a visually appealing and user-friendly interface. With modern features like Flexbox, Grid, and transitions, CSS makes it possible to build clean and beautiful UI designs.' },
        { name: 'Javascript', color: 'bg-yellow-500', width: '80%', img: '/js.png', desc: 'JavaScript brings interactivity and dynamic behavior to websites. It allows developers to manipulate the DOM, handle user actions, fetch data from APIs, and build responsive, real-time web applications. JavaScript powers everything from simple animations to full-scale frontend frameworks, making it one of the most essential languages in modern web development.' },
        { name: 'ReactJs', color: 'bg-cyan-600', width: '93%', img: '/reactjs.png', desc: 'React.js is a powerful JavaScript library for building fast and interactive user interfaces. I use React to create component-based, reusable, and scalable front-end applications. I am experienced in state management, hooks, props, conditional rendering, forms, and API integration using Fetch/Axios. I also work with modern tools like React Router, Context API, custom hooks, and Framer Motion for animations. My focus is on writing clean, optimized, and responsive UI with a smooth user experience.' },
        { name: 'NodeJs', color: 'bg-gray-600 text-white', width: '80%', img: '/nodejs.png', desc: 'Node.js is a high-performance JavaScript runtime that allows me to build fast and scalable server-side applications. I use Node to develop backend logic, APIs, authentication systems, middleware, and real-time features. With its event-driven architecture and non-blocking I/O, I build applications that handle multiple requests efficiently. I structure clean server logic, manage dependencies, and integrate databases and third-party services seamlessly.' },
        { name: 'ExpressJs', color: 'bg-white text-black', width: '85%', img: '/expressjs.png', desc: 'Express.js is a lightweight and flexible Node.js framework that I use to build structured, secure, and efficient backend applications. I use Express to design RESTful APIs, manage routing, handle middleware, authentication, validation, and error handling. Its simplicity makes it perfect for building robust server-side logic, integrating databases, and creating scalable backend architectures.' },
        { name: 'MongoDB', color: 'bg-green-600', width: '87%', img: '/mongodb.png', desc: 'MongoDB is a NoSQL database that allows me to store and manage data in a flexible, document-oriented format. I use MongoDB for building scalable applications with dynamic data structures. I work with CRUD operations, schema modeling using Mongoose, indexing, validation, and aggregation pipelines. Its flexibility and speed make it ideal for real-world projects like authentication, APIs, and data-driven applications.' },
        { name: 'PHP', color: 'bg-purple-500', width: '80%', img: '/php.png', desc: 'PHP is a server-side scripting language used to build dynamic and interactive web applications. It offers a simple syntax, integrates easily with HTML, and powers a large portion of the modern web. PHP is widely used for building APIs, handling form data, managing sessions, and connecting applications with databases, making it a reliable choice for backend development.' },
        { name: 'Laravel', color: 'bg-red-900 text-white', width: '70%', img: '/laravel.png', desc: 'Laravel is a modern PHP framework known for its elegant syntax and developer-friendly structure. It provides powerful features like routing, middleware, Eloquent ORM, authentication scaffolding, and queue management, allowing developers to build scalable and secure web applications quickly. Laravel follows the MVC architecture and emphasizes clean, maintainable code, making it one of the most popular frameworks for PHP projects.' },
        { name: 'MySQL', color: 'bg-slate-400 text-black', width: '90%', img: '/mySql.png', desc: 'MySQL is a fast, scalable, and widely-used relational database management system. It organizes data in structured tables and uses SQL for querying, updating, and managing information. MySQL is known for its reliability, strong performance, and compatibility with most backend technologies. Whether storing user accounts, handling transactions, or powering large applications, MySQL provides a stable and efficient database solution.' },
    ];

    return (
        <>
            <div id='skills' className="SkillContainer h-screen w-full overflow-hidden">
                <motion.h1
                    className='text-white sm:text-8xl text-5xl font-bold text-center'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: false , amount: 0.6  }}
                >
                    skills
                </motion.h1>

                <div className='grid grid-cols-3 sm:grid-cols-4 text-lg sm:text-2xl gap-6 sm:gap-4 mr-5 sm:mr-0 mt-8'>
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
                                <button
                                    onClick={() => setSkillCard(skillCard === i ? null : i)}
                                    className='cursor-crosshair bg-gray-900 rounded-2xl sm:h-35 sm:w-120 h-25 w-25 flex flex-col items-center justify-center hover:scale-108 transition-all duration-300'>
                                    <img className='h-9 w-9 sm:h-12 sm:w-12' src={skill.img} alt={skill.name} />
                                    <span className='font-medium'>{skill.name}</span>
                                </button>
                            </div>
                            {skillCard === i && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="fixed inset-0 flex items-center justify-center z-50"
                                    >
                                        <div
                                            className="absolute inset-0 bg-black/40"
                                            onClick={() => setSkillCard(null)}
                                        ></div>

                                        <div
                                            className="relative bg-gray-800 text-white text-sm sm:p-3 p-1.5 
                                            rounded-xl h-50 w-60 sm:h-70 sm:w-70 
                                            overflow-y-scroll scrollbar-hide shadow-xl"
                                        >
                                            <button
                                                className="absolute top-2 right-2"
                                                onClick={() => setSkillCard(null)}
                                            >
                                                <img className="h-3 w-3" src="/close.png" alt="close" />
                                            </button>

                                            <p className="text-center mt-6">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills
