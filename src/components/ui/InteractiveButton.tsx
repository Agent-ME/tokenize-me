'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface InteractiveButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const InteractiveButton = ({ href, children, variant = 'primary', className = '' }: InteractiveButtonProps) => {
  const baseStyles = "relative px-8 py-4 rounded-lg text-lg font-heading uppercase tracking-wider overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-opacity-90",
    secondary: "bg-accent-100 text-primary hover:bg-accent-200",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-secondary",
  };

  return (
    <Link href={href}>
      <motion.div
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* 3D effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Content */}
        <span className="relative z-10">{children}</span>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-primary/20 blur-xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
};

export default InteractiveButton; 