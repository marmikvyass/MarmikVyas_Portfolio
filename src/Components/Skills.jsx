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
        { name: 'Python', color: 'bg-red-900 text-white', width: '70%', img: '/python.png', desc: 'Python is a versatile and powerful programming language widely used in web development, automation, data science, and Artificial Intelligence. Known for its clean syntax and readability, Python enables developers to build scalable applications efficiently. It is extensively used in GenAI development for working with Large Language Models (LLMs), RAG systems, machine learning, APIs, and AI frameworks like LangChain.' },
        { name: 'Langchain', color: 'bg-pink-500', width: '80%', img: '/langchain.png', desc: 'LangChain is a powerful framework used to build advanced AI and LLM-powered applications. It enables developers to create intelligent systems with capabilities like Retrieval-Augmented Generation (RAG), prompt chaining, memory management, AI agents, and seamless integration with vector databases, APIs, and external tools. LangChain helps in developing scalable, context-aware, and real-world AI applications efficiently.' },
        { name: 'Open AI', color: 'bg-slate-400 text-black', width: '90%', img: '/openai.png', desc: 'OpenAI provides powerful AI models and APIs that enable developers to build intelligent and interactive applications using Large Language Models (LLMs). It supports capabilities like text generation, chatbots, embeddings, code generation, image understanding, and AI assistants. OpenAI APIs are widely used for developing scalable GenAI applications, automation tools, and advanced AI-powered user experiences.' },
        { name: 'Vector DB', color: 'bg-slate-400 text-black', width: '90%', img: '/vectordb.png', desc: 'Vector Databases are specialized databases designed to store and retrieve high-dimensional vector embeddings generated by AI models. They enable fast similarity search and semantic understanding, making them essential for applications like Retrieval-Augmented Generation (RAG), AI chatbots, recommendation systems, and semantic search. Popular vector databases such as Pinecone and ChromaDB help build scalable and context-aware AI applications.' },
        { name: 'AWS', color: 'bg-slate-400 text-black', width: '90%', img: '/aws.png', desc: 'AWS (Amazon Web Services) is a leading cloud computing platform that provides scalable and reliable infrastructure for deploying modern applications. I have experience working with core AWS services like EC2 for hosting and managing virtual servers, and S3 for secure cloud storage and file management. AWS enables developers to build, deploy, and scale applications efficiently in a cloud environment.' },
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
