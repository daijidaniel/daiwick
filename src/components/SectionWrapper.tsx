import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgGradient?: string;
  withTopBorder?: boolean;
}

const SectionWrapper = ({
  children,
  className = '',
  id,
  bgGradient = 'from-black to-gray-900',
  withTopBorder = false,
}: SectionWrapperProps) => {
  // SVG pattern as a data URL
  const gridPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Gradient Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-100`}
        style={{
          backgroundImage: `url("${gridPattern}")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Top border */}
      {withTopBorder && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      )}
      
      {/* Content */}
      <motion.div 
        variants={fadeIn}
        className="relative z-10 py-20 md:py-28 lg:py-32"
      >
        {children}
      </motion.div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />
    </motion.section>
  );
};

export default SectionWrapper;
