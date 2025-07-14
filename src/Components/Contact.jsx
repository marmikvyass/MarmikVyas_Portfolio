import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Footer from './Footer';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3lzfu5i', 'template_pbgb8jq', form.current, 'jE2yDXOw2lqe8hwqu')
      .then(() => {
        alert("Message sent successfully");
        form.current.reset();
      }, (error) => {
        alert("Failed to send message: " + error.text);
      });
  };

  return (
    <>
      <div className='w-full min-h-screen bg-black'>
        <motion.h2
          className="text-4xl sm:text-6xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <section
          id="contact"
          className=" gap-10 bg-black px-6 py-20 flex sm:flex-row flex-col justify-center items-center"
        >
          <motion.div
            className="max-w-2xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >


            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <label className="block mb-1 text-white font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full text-white px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <label className="block mb-1 text-white font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 text-white py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <label className="block mb-1 text-white font-medium">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md cursor-pointer transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <div>
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              id="contact"
              className="w-full sm:w-130 py-10 bg-black border rounded-lg text-white h-100"
            >
              <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  Let’s Connect
                </motion.h2>

                <motion.p
                  className="sm:text-xl mb-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  I'm open to freelance projects and collaboration opportunities. Reach out anytime!
                </motion.p>

                <div className="flex flex-col gap-6 sm:flex-col sm:w-120 sm:justify-around text-left">
                  {/* Email */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false }}
                  >
                    <img src="/mail.png" alt="email" className="h-8 w-8" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:marmikvyas.dev@gmail.com"
                        className="text-gray-300 hover:text-white"
                      >
                        marmikvyas.dev@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <img src="/phone.png" alt="phone" className="h-8 w-8" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+918200216752"
                        className="text-gray-300 hover:text-white"
                      >
                        +91 82002 16752
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: false }}
                  >
                    <img src="/location.png" alt="location" className="h-8 w-8" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-300 hover:text-white cursor-pointer">
                        Vadodara, Gujarat
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </div>

        </section>
        <Footer />
      </div>

    </>

  );
}

export default Contact;
