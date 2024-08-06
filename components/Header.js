"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 fixed w-full z-50 top-0 left-0"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white flex items-center"
        >
          <FaMusic className="mr-2" /> mood2music
        </motion.h1>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          {['Features', 'Pricing', 'FAQ', 'Contact'].map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-200">{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <ul className="flex flex-col items-center py-4">
            {['Features', 'Pricing', 'FAQ', 'Contact'].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} className="my-2">
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}