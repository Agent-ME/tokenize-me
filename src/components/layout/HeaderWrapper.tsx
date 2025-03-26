'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import StickyHeader from './StickyHeader';
import { usePageTransition } from '@/components/ui/PageTransitionContext';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const { isComingFromHome } = usePageTransition();
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';

  if (isHomePage) {
    return null;
  }

  // Special animation for the about page when coming from home
  if (isAboutPage && isComingFromHome) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.8 // Slightly reduced delay to match new content fade-in timing
        }}
      >
        <StickyHeader />
      </motion.div>
    );
  }

  // Default header for other pages
  return <StickyHeader />;
} 