import React from 'react';
import './background.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Authify',
    desc: 'A secure authentication app with OTP reset and email verification using MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node', 'Nodemailer', 'JWT', 'Bcrypt'],
    image: '/authify.png',
    live: 'https://authify-flax.vercel.app/',
    github: 'https://github.com/marmikvyass/Authify',
  },
  {
    title: 'Splindora',
    desc: 'Splindora – A smart travel planner with expense splitting, built using the MERN stack.',
    tech: ['React', 'Node', 'MongoDB', 'Express', 'JWT', 'Bcrypt'],
    image: '/splindora.png',
    live: 'https://splindora-th5p.vercel.app/',
    github: 'https://github.com/marmikvyass/Splindora',
  },
  {
    title: 'MFT GYM APP',
    desc: 'MFT Gym App – A modern fitness tracking platform to manage workouts and progress.',
    tech: ['React', 'HTML', 'CSS'],
    image: '/gymapp.png',
    live: 'https://mft-gym-app.vercel.app/',
    github: 'https://github.com/marmikvyass/MFTGymApp',
  },
  {
    title: 'PassMan',
    desc: 'Password Manager – A secure and simple solution to store and manage all your passwords safely.',
    tech: ['React', 'Node', 'MongoDB', 'Express', 'JWT', 'Bcrypt'],
    image: '/passman.png',
    github: 'https://github.com/marmikvyass/PassMan',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="sticky top-0 w-full h-screen overflow-hidden ProjectContainer bg-black px-4 sm:px-6"
    >
      <motion.h2
        className="text-5xl sm:text-8xl font-bold text-center text-white mb-10 mt-10 sm:mt-5"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Projects
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full sm:w-[90%] max-w-5xl mx-auto"
      >
        {projects.map((proj, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="bg-zinc-900 sm:h-[500px] w-full rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-white font-bold mb-2">{proj.title}</h3>
                <p className="text-white mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
