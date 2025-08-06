'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import HeroStats from './HeroStats';
import { cn } from '../lib/utils';

type GridPatternProps = {
  className?: string;
  size?: number;
  lineColor?: string;
  lineWidth?: number;
  spacing?: number;
};

const GridPattern = ({
  className,
  size = 60,
  lineColor = 'rgba(239, 68, 68, 0.2)',
  lineWidth = 1,
  spacing = 20,
}: GridPatternProps) => {
  return (
    <div 
      className={cn('absolute inset-0 -z-10', className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='${size}' height='${size}' viewBox='0 0 ${size} ${size}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${encodeURIComponent(lineColor)}' stroke-width='${lineWidth}'%3E%3Cpath d='M ${size} 0 L0 0 0 ${size}' /%3E%3Cpath d='M ${size} ${spacing} L${spacing} ${spacing} ${spacing} ${size}' /%3E%3Cpath d='M ${size} ${spacing * 2} L${spacing * 2} ${spacing * 2} ${spacing * 2} ${size}' /%3E%3C/g%3E%3C/svg%3E"`,
        opacity: 0.3,
      }}
    />
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants for the main heading
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <GridPattern
        className="opacity-20"
        size={80}
        lineColor="rgba(239, 68, 68, 0.3)"
      />

      {/* Animated grid lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <GridPattern
          className="opacity-30"
          size={160}
          lineColor="rgba(239, 68, 68, 0.2)"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none"
      />

      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-block"
          >
            <span
              className="relative bg-gradient-to-r from-red-700/90 to-red-900/90 text-xs font-semibold px-4 py-2 rounded-full tracking-wide uppercase shadow-lg backdrop-blur-sm border border-red-900/30"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent rounded-full"
              />
              <span className="relative z-10">Breaking the Old Model</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight mb-8"
          >
            <span className="relative">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
              >
                The Traditional
              </span>
              <span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500/70 via-red-400/50 to-transparent rounded-full"
              />
            </span>
            <br />
            <span className="relative">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600"
              >
                Software Model
              </span>
              <span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-600/70 via-red-500/50 to-transparent rounded-full"
              />
            </span>
            <motion.span
              className="block text-3xl md:text-5xl lg:text-6xl font-extrabold mt-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1] as any,
                },
              }}
            >
              <span
                className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800"
              >
                is Broken
              </span>
              <span
                className="relative block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
              >
                is Broken
              </span>
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p
              className="text-2xl sm:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600"
            >
              We're revolutionizing how software is built, delivered, and maintained.
            </p>
            <p
              className="text-lg md:text-xl text-gray-300 text-center"
            >
              No more endless cycles, budget overruns, or technical debt. Just results.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span
                className="relative z-10 flex items-center justify-center gap-2"
              >
                <span>Get Started Today</span>
                <svg
                  className="w-4 h-4 -mr-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#how-it-works"
              className="group relative px-8 py-4 bg-transparent border-2 border-gray-700 text-gray-200 font-semibold rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span
                className="relative z-10 flex items-center justify-center gap-2"
              >
                <span>Learn How It Works</span>
                <svg
                  className="w-4 h-4 -mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="w-full mt-16"
          >
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent rounded-2xl -m-4"
              />
              <div className="relative z-10">
                <HeroStats />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
