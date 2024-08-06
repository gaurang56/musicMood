"use client";

import { motion } from 'framer-motion';
import { FaSearch, FaRandom, FaClock } from 'react-icons/fa';

export default function Problem() {
  const problems = [
    {
      icon: FaSearch,
      title: "Overwhelming Choice",
      description: "Vast music libraries and constantly changing emotions lead to decision fatigue."
    },
    {
      icon: FaRandom,
      title: "Mood Mismatch",
      description: "Difficulty in finding music that perfectly aligns with your current emotional state."
    },
    {
      icon: FaClock,
      title: "Time-Consuming Curation",
      description: "Creating the perfect playlist for each mood is a time-intensive process."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-purple-100" id="problem">
      <div className="container mx-auto px-4">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-purple-800"
        >
          Why Finding the Right Music is Hard
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4 mx-auto">
                <problem.icon className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center text-purple-700">{problem.title}</h4>
              <p className="text-gray-600 text-center">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg"
        >
          <p className="text-lg text-gray-800 mb-4">
            <strong className="text-purple-700">Finding the perfect music</strong> for your mood becomes increasingly challenging. Vast music libraries, constantly changing emotions, and the desire for new discoveries often lead to <strong className="text-purple-700">decision fatigue</strong> and unsatisfying listening experiences.
          </p>
          <p className="text-lg text-gray-800">
            Even when you know what you want, the difficulty of <strong className="text-purple-700">curating playlists</strong> that match your exact mood can result in compromised choices, further complicating efforts to enhance your emotional experiences through music.
          </p>
        </motion.div>
      </div>
    </section>
  );
}