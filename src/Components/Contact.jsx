import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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
    <section
      id="contact"
      className="w-full min-h-screen bg-black px-6 py-20 flex justify-center items-center"
    >
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <motion.h2
          className="text-4xl sm:text-6xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

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
    </section>
  );
}

export default Contact;
