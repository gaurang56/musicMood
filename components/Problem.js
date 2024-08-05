"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="py-20 bg-white" id="problem">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Why Finding the Right Music is Hard</h3>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-center"
        >
          <p className="mb-4"><strong>Finding the perfect music</strong> for your mood becomes increasingly challenging. Vast music libraries, constantly changing emotions, and the desire for new discoveries often lead to <strong>decision fatigue</strong> and unsatisfying listening experiences.</p>
          <p>Even when you know what you want, the difficulty of <strong>curating playlists</strong> that match your exact mood can result in compromised choices, further complicating efforts to enhance your emotional experiences through music.</p>
        </motion.div>
      </div>
    </section>
  );
}
