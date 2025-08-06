'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FadeInUp, GlassCard, GridBackground } from '../components/ScrollAnimation';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import ResultsStatementSection from '../components/ResultsStatementSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import WhyDifferentSection from '../components/WhyDifferentSection';
import ThoughtLeadershipSection from '../components/ThoughtLeadershipSection';
import FinalCTASection from '../components/FinalCTASection';

// This is a separate component to handle the background elements
function BackgroundElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Springy scroll progress for smoother animations
  const smoothScrollProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Transform scroll progress into various animation values
  const scale1 = useTransform(smoothScrollProgress, [0, 1], [1, 1.2]);
  const scale2 = useTransform(smoothScrollProgress, [0, 1], [1, 1.3]);
  const scale3 = useTransform(smoothScrollProgress, [0, 1], [1, 1.4]);
  
  const rotate1 = useTransform(smoothScrollProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(smoothScrollProgress, [0, 1], [0, -20]);
  
  const x1 = useTransform(smoothScrollProgress, [0, 1], [0, -50]);
  const x2 = useTransform(smoothScrollProgress, [0, 1], [0, 50]);
  const y1 = useTransform(smoothScrollProgress, [0, 1], [0, -100]);
  
  const opacity1 = useTransform(smoothScrollProgress, [0, 0.3, 0.7, 1], [0.7, 0.9, 0.9, 0.7]);
  const opacity2 = useTransform(smoothScrollProgress, [0, 0.4, 0.6, 1], [0.5, 0.7, 0.7, 0.5]);
  const opacity3 = useTransform(smoothScrollProgress, [0, 0.5, 0.8, 1], [0.3, 0.5, 0.5, 0.3]);

  // Animation variants for the X with proper typing
  const xVariants: Variants = {
    hidden: { 
      opacity: 0,
      pathLength: 0 
    },
    visible: (i: number) => ({
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { 
          delay: i * 0.5,
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1] as any,
        },
        opacity: { 
          delay: i * 0.5,
          duration: 0.5 
        }
      }
    })
  };

  // Animation for the strike through effect with proper typing
  const strikeVariants: Variants = {
    hidden: { 
      scaleX: 0,
      opacity: 0 
    },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 0.7,
      transition: {
        delay: 0.8 + (i * 0.3),
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any
      }
    })
  };

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated X Element */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial="hidden"
        animate="visible"
      >
        <motion.svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Diagonal line 1 */}
          <motion.path
            d="M0,0 L100,100"
            stroke="url(#xGradient1)"
            strokeWidth="0.5"
            strokeLinecap="round"
            variants={xVariants}
            custom={0}
          />
          
          {/* Diagonal line 2 */}
          <motion.path
            d="M100,0 L0,100"
            stroke="url(#xGradient2)"
            strokeWidth="0.5"
            strokeLinecap="round"
            variants={xVariants}
            custom={1}
          />
          
          {/* Strike through effect */}
          <motion.rect
            x="10"
            y="48"
            width="80"
            height="4"
            rx="2"
            fill="none"
            stroke="url(#strikeGradient)"
            strokeWidth="2"
            variants={strikeVariants}
            custom={0}
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="xGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#991b1b" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="xGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#991b1b" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="strikeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
      {/* Base gradient layer with subtle scroll effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          scale: useTransform(smoothScrollProgress, [0, 1], [1, 1.05]),
          opacity: useTransform(smoothScrollProgress, [0, 1], [1, 0.95])
        }}
      />
      
      {/* Animated gradient orbs with scroll-based animations */}
      <motion.div 
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-red-900/30 to-red-600/20"
        style={{
          scale: scale1,
          rotate: rotate1,
          x: x1,
          y: y1,
          opacity: opacity1,
          transition: 'all 0.5s ease-out'
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-red-800/20 to-red-500/10"
        style={{
          scale: scale2,
          rotate: rotate2,
          x: x2,
          opacity: opacity2,
          transition: 'all 0.5s ease-out 0.1s'
        }}
      />
      
      <motion.div 
        className="absolute -bottom-1/4 left-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-tl from-red-900/20 to-red-700/10"
        style={{
          scale: scale3,
          rotate: useTransform(smoothScrollProgress, [0, 1], [0, -10]),
          y: useTransform(smoothScrollProgress, [0, 1], [0, 50]),
          opacity: opacity3,
          transition: 'all 0.5s ease-out 0.2s'
        }}
      />
      
      {/* Subtle grain texture */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        style={{
          opacity: useTransform(smoothScrollProgress, [0, 1], [0.1, 0.15])
        }}
      />
      
      {/* Subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 w-8 h-12 border-2 border-red-500/30 rounded-full p-1"
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          opacity: useTransform(smoothScrollProgress, [0, 0.1], [0.7, 0])
        }}
      >
        <motion.div 
          className="w-1 h-3 bg-red-500 rounded-full mx-auto"
          initial={{ y: 0 }}
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        />
      </motion.div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Background gradient scroll effects
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <main ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white overflow-x-hidden">
      {/* Background Elements */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
          background: 'radial-gradient(ellipse at top, rgba(239, 68, 68, 0.05), transparent 50%), radial-gradient(ellipse at bottom, rgba(239, 68, 68, 0.03), transparent 50%)',
        }}
      >
        <GridBackground />
      </motion.div>

      {/* Sections with scroll animations */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <FadeInUp>
          <HeroSection />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <GlassCard>
            <ProblemSolutionSection />
          </GlassCard>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <ResultsStatementSection />
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <GlassCard className="p-8">
            <ServicesSection />
          </GlassCard>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <CaseStudiesSection />
        </FadeInUp>

        <FadeInUp delay={0.5}>
          <GlassCard className="p-8">
            <WhyDifferentSection />
          </GlassCard>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <ThoughtLeadershipSection />
        </FadeInUp>

        <FadeInUp delay={0.7}>
          <FinalCTASection />
        </FadeInUp>
      </div>
    </main>
  );
}
