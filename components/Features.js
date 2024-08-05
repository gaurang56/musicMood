"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSmile, FaListUl, FaRobot } from 'react-icons/fa';

export default function Features() {
  const features = [
    { icon: FaSmile, title: 'Mood Detection', description: 'Our AI analyzes your current mood and suggests the perfect tracks to match or enhance it.' },
    { icon: FaListUl, title: 'Smart Playlists', description: 'Create dynamic playlists that adapt to your changing moods throughout the day.' },
    { icon: FaRobot, title: 'AI Music Curation', description: 'Discover new songs and artists tailored to your unique taste and emotional state.' },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-gray-100" id="features">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Features That Make Music Selection Easy</h3>
        <p className="text-center mb-12">Enhance your listening experience with our powerful mood-matching tools.</p>
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <feature.icon className="text-4xl text-indigo-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}