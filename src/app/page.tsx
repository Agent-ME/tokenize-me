'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CustomCursor from '@/components/ui/CustomCursor';
import ParticleField from '@/components/ui/ParticleField';
import GraphPaper from '@/components/ui/GraphPaper';

// Preload the About page
import dynamic from 'next/dynamic';
const AboutPage = dynamic(() => import('./about/page'), { ssr: false });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAboutPreloaded, setIsAboutPreloaded] = useState(false);

  // Preload the About page components
  useEffect(() => {
    // Preload the about page components
    const preloadAbout = async () => {
      // Import the required components
      await Promise.all([
        import('@/components/ui/ParticleField'),
        import('@/components/ui/GraphPaper'),
        import('./about/page')
      ]);
      setIsAboutPreloaded(true);
    };
    
    preloadAbout();
  }, []);

  const handleLogoClick = () => {
    setIsTransitioning(true);
    // Use localStorage for compatibility with the transition context
    localStorage.setItem('comingFromHome', 'true');
    // Navigate after the animation completes
    setTimeout(() => {
      router.push('/about');
    }, 3000); // Reduced from 4800ms to match our new faster animations
  };

  return (
    <main className="relative min-h-screen bg-white" ref={containerRef}>
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Graph Paper Background */}
        <GraphPaper />
        
        {/* Particle container */}
        <div className="absolute inset-0 pointer-events-none">
          <ParticleField />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div onClick={handleLogoClick}>
            <motion.div
              className="relative w-[500px] h-[500px] mx-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/logo.png"
                alt="TokenizeMe Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Page Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }} // Slowed down initial fade in
          >
            <motion.div 
              className="relative w-[300px] h-[300px]"
              style={{ 
                transformOrigin: "67% 49%" // Perfect position manually set
              }}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ 
                scale: 1000, // Significantly increased zoom scale
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 3.0, // Reduced from 4.8s to 3.0s
                times: [0, 0.8, 1],
                ease: "easeInOut" // Added easing for smoother animation
              }}
            >
              <Image
                src="/images/logo.png"
                alt="TokenizeMe Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
