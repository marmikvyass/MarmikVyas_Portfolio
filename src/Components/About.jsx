import React from 'react'
import './background.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function About() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });
    return (
        <>
      <div className="AboutContainer h-screen w-full overflow-x-hidden">
        <motion.h1
          id="aboutme"
          className="text-white font-bold sm:text-8xl text-5xl text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.6 }}
        >
          About Me
        </motion.h1>

        <div className="aboutDiv">
          <section
            id="about"
            className="text-white py-16 px-1 sm:mt-20 mt-0 sm:px-6"
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.p
                className="text-lg md:text-3xl text-white leading-relaxed"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                I'm <span className="font-bold">Marmik Vyas</span>, a passionate
                <span className="font-bold"> MERN Stack Developer</span> who enjoys
                building fast, responsive, and scalable web applications.
              </motion.p>

              <motion.p
                className="text-xs sm:text-3xl mx-auto text-white font-bold mt-6 w-fit"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <span className="typewriter">MERN Developer | PHP Developer | Problem Solver</span>
              </motion.p>

              <motion.p
                className="mt-6 sm:text-xl text-sm mb-6 font-medium"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                I specialize in working with modern JavaScript tools like React, Node.js, Express, and
                MongoDB. I love learning new technologies and turning ideas into real-world solutions.
              </motion.p>

              <motion.p
                className="mt-6 sm:text-xl text-sm font-medium"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Currently, I'm focused on creating impactful full-stack projects and preparing for internship opportunities & freelancing.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap justify-center sm:gap-4 gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <span className="sm:px-5 sm:py-4 px-4 py-2.5 bg-slate-950 rounded-full hover:scale-105 transition-all text-white text-md">
                  3+ Projects Completed
                </span>
                <span className="sm:px-5 sm:py-4 px-4 py-2.5 bg-slate-950 rounded-full hover:scale-105 transition-all text-white text-md">
                  MongoDB | Express | React | Node
                </span>
                <span className="sm:px-5 sm:py-4 px-4 py-2 bg-slate-950 rounded-full hover:scale-105 transition-all text-white text-md">
                  PHP | Laravel | MySQL
                </span>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
    )
}

export default About
