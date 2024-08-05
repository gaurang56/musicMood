"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    { question: "Can I change my mood selection after the AI has made recommendations?", answer: "Yes, you can update your mood at any time, and the AI will adjust its recommendations accordingly." },
    { question: "What happens when I reach my free plan's limit?", answer: "You'll be prompted to upgrade to our Premium Tier for unlimited mood-based recommendations." },
    { question: "Will there be a student discount?", answer: "We're considering student discounts for our Premium Tier. Stay tuned for updates!" },
    { question: "What kind of music streaming integrations will be available?", answer: "We're working on integrations with major platforms like Spotify, Apple Music, and YouTube Music." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-100" id="faq">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">FAQs</h3>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-b-lg shadow-md"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}