'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type ScrollAnimationProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export const FadeInUp = ({ children, delay = 0, className = '' }: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className = '' }: ScrollAnimationProps) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-px ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-900/10 rounded-2xl" />
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-2xl p-6 h-full">
        {children}
      </div>
    </div>
  );
};

export const GridBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)]" />
    </div>
  );
};
