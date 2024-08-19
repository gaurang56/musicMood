"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import waitlist from '@zootools/waitlist-js'

export default function Hero() {
    const [showModal, setShowModal] = useState(false);

    const clickPopup = (event) => {
        event.preventDefault();
        waitlist.openPopup("26PuzIExtemqRnLLSCLN")
    }

    const handleSpotifyLogin = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const redirectToSpotifyLogin = () => {
        window.location.href = 'https://flask-production-c1e8.up.railway.app';
    }

    const handleBatch2Access = () =>{
        window.location.href = 'https://secondapp-production.up.railway.app';
    }

    return (
        <section className="relative bg-gradient-to-br from-purple-700 to-indigo-800 text-white py-32 overflow-hidden" id="home">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-repeat bg-center" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <motion.h2 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                        >
                            The Mood-Matching<br />Music Maestro
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl mb-6 text-purple-200"
                        >
                            Perfect Tunes for Every Mood✨
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <button onClick={handleSpotifyLogin} className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300 shadow-lg flex items-center">
                                <FaSpotify className="mr-2" /> Login with Spotify
                            </button>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-4 shadow-2xl"
                        >
                            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                                <video 
                                    className="w-full h-full object-cover"
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                >
                                    <source src="/videos/video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-2">Integrates with:</h3>
                                <div className="flex justify-around">
                                    <FaSpotify className="text-4xl text-green-400" />
                                    <FaApple className="text-4xl text-gray-200" />
                                    <FaYoutube className="text-4xl text-red-500" />
                                </div>
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

            {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
    <div className="relative bg-gradient-to-r from-violet-600 to-violet-800 text-white p-8 rounded-xl max-w-lg w-full shadow-2xl transform transition-all duration-500 scale-95 hover:scale-100">
      <div className="absolute top-0 right-0 m-4">
        <button onClick={closeModal} className="text-gray-200 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <h3 className="text-3xl font-bold mb-4 text-center">Notice</h3>
     
      <p className="mb-2 text-lg text-center">
      To be eligible to access the tool, you must enter early access with the email you use for Spotify. If you haven't signed up for early access yet, please do so first and wait for <b>24hrs</b>.
      </p>
      <h2 className='font-bold mb-5 text-center'>contact@mood2music.me</h2>
      <div className="flex flex-col justify-center items-center space-y-4">
        <button
          onClick={clickPopup}
          className="bg-white text-purple-700 w-full px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-colors duration-300"
        >
          Get Early Access
        </button>
        <div className="flex flex-col sm:flex-row w-full justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={redirectToSpotifyLogin}
            className="bg-green-500 w-full sm:w-1/2 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-400 transition-colors duration-300"
          >
            Continue with Spotify
          </button>
          <button
            onClick={handleBatch2Access}
            className="bg-blue-500 w-full sm:w-1/2 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-400 transition-colors duration-300"
          >
            Batch 2 Access
          </button>
        </div>
      </div>
    </div>
  </div>
)}

        </section>
    );
}