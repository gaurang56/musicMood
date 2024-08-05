"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Got More Questions?</h3>
        <p className="mb-8">Get in touch with us, we're here to help.</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
}