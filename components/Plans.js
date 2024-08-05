"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Plans() {
  const plans = [
    {
      name: "Free Tier",
      price: "$0.00/mo",
      features: [
        "Basic mood detection",
        "Limited number of playlist generations (up to 3 per day)",
        "Access to a curated library of mood-based tracks"
      ]
    },
    {
      name: "Premium Tier",
      price: "$4.99/mo",
      features: [
        "Advanced mood detection and analysis",
        "Unlimited playlist generations",
        "Integration with major streaming platforms",
        "Customizable mood presets",
        "Ad-free experience",
        "Priority customer support"
      ]
    },
    {
      name: "Artist Tier",
      price: "$9.99/mo",
      features: [
        "All Premium Tier features",
        "Mood-based music marketing tools",
        "Listener mood analytics dashboard",
        "Direct fan mood feedback",
        "Priority placement in mood-based recommendations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Choosing the Right Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
              <p className="text-xl mb-4">{plan.price}</p>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}