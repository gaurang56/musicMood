
"use client";
import { motion } from 'framer-motion';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-32 overflow-hidden" id="home">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat bg-center" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 leading-tight"
            >
              The Mood-Matching<br />Music Maestro
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-purple-200"
            >
              Perfect Tunes for Every Mood✨
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg mb-8 text-purple-100"
            >
              Never struggle to find the right music again. Get AI-powered song recommendations, create mood-based playlists, and enhance every moment with the perfect soundtrack.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300 shadow-lg">
                Join Waitlist
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">Integrates with:</h3>
              <div className="flex justify-around">
                <FaSpotify className="text-5xl text-green-400" />
                <FaApple className="text-5xl text-gray-200" />
                <FaYoutube className="text-5xl text-red-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated music notes */}
      <motion.div 
        className="absolute bottom-0 left-0 text-4xl text-purple-300 opacity-50"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        ♪
      </motion.div>
      <motion.div 
        className="absolute top-1/4 right-10 text-5xl text-indigo-300 opacity-50"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, -15, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        ♫
      </motion.div>
    </section>
  );
}