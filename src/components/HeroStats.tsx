"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const stats = [
  {
    value: "0",
    title: "Billable Hour Surprises",
    description: "Fixed price. Period.",
  },
  {
    value: "3-6",
    title: "Week Delivery",
    description: "Not months or years",
  },
  {
    value: "100%",
    title: "Outcome Focused",
    description: "Results or refund",
  },
];

const HeroStats = () => (
  <motion.div 
    className="w-full flex flex-col items-center mt-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-12">
      {stats.map((stat, index) => (
        <motion.div 
          key={stat.title}
          variants={fadeInUp}
          custom={index * 0.1}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
          
          {/* Stat card */}
          <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-red-900/50">
            <motion.div 
              className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.2 + (index * 0.1),
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
            >
              {stat.value}
            </motion.div>
            <div className="font-semibold text-white text-lg md:text-xl mb-1">
              {stat.title}
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              {stat.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Animated Scroll Indicator */}
    <motion.div 
      className="flex flex-col items-center mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [20, 0, 0, 20],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <div className="w-8 h-12 rounded-2xl border-2 border-gray-600 flex justify-center p-1 mb-2">
        <motion.div 
          className="w-1 h-2 bg-gray-400 rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
      <span className="text-xs text-gray-400 tracking-wider">SCROLL</span>
    </motion.div>
  </motion.div>
);

export default HeroStats;
