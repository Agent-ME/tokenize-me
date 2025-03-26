'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaEnvelope, FaTwitter, FaDiscord } from 'react-icons/fa';
import ParticleField from '@/components/ui/ParticleField';
import GraphPaper from '@/components/ui/GraphPaper';

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const scrollToContactInfo = () => {
    contactInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 z-0">
          <ParticleField />
        </div>
        <div className="absolute inset-0 z-10 opacity-30">
          <GraphPaper />
        </div>
        
        <div className="container mx-auto px-container md:px-container-lg relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ opacity, y }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-primary mb-8"
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight"
            >
              Get In<br />Touch
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-accent-500 mb-12 max-w-2xl"
            >
              Ready to launch your personal token? Our team is here to help you get started in minutes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center group cursor-pointer"
                onClick={scrollToContactInfo}
              >
                <span className="text-lg font-medium mr-2">Contact us</span>
                <motion.span 
                  animate={{ y: [0, 5, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Email Contact Section */}
      <section ref={contactInfoRef} id="contact-info" className="py-20 bg-gradient-to-b from-white to-accent-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <GraphPaper />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-5">
          <ParticleField />
        </div>
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-primary/20"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              zIndex: 1
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5
            }}
          />
        ))}
        
        <div className="container mx-auto px-container md:px-container-lg relative z-10">
          {/* Heading with animated underline */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className="text-accent-600 mt-6 max-w-2xl mx-auto">
              Reach out to us via email and our team will get back to you within 24 hours
            </p>
          </div>
          
          {/* Email Contact Info */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-accent-100 text-center"
            >
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <FaEnvelope size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Email Us</h3>
                  <p className="text-accent-500 mb-4">For inquiries about launching your token:</p>
                  <a 
                    href="mailto:support@tokenizeme.com" 
                    className="text-2xl font-medium text-primary hover:underline"
                  >
                    support@tokenizeme.com
                  </a>
                  <p className="text-accent-400 mt-6">
                    Our team is available 24/7 to assist you with any questions you may have.
                    <br />We typically respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Social and Early Access Button */}
              <div className="mt-12 pt-8 border-t border-accent-100">
                <h3 className="text-xl font-bold mb-6">Join Our Community</h3>
                
                <div className="flex flex-col items-center space-y-6">
                  <a
                    href="https://tally.so/r/nrYAJR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white py-4 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-colors max-w-xs mx-auto"
                  >
                    Request Early Access
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 