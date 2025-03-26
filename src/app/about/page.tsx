'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaRocket, FaChartLine, FaUsers, FaShieldAlt, FaGlobe, FaLock, FaHandshake } from 'react-icons/fa';
import SectionHeader from '@/components/ui/SectionHeader';
import ParticleField from '@/components/ui/ParticleField';
import GraphPaper from '@/components/ui/GraphPaper';
import { usePageTransition } from '@/components/ui/PageTransitionContext';

export default function AboutPage() {
  const missionRef = useRef<HTMLElement>(null);
  const { isComingFromHome } = usePageTransition();

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen">
        {/* Hero Section with Particles - Ensure immediate visibility */}
        <section className="h-screen relative flex items-center">
          {/* Background elements always show immediately with priority */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            style={{ willChange: 'opacity', backfaceVisibility: 'hidden' }}
          >
            <ParticleField />
          </motion.div>
          <motion.div 
            className="absolute inset-0 z-10 opacity-30"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            style={{ willChange: 'opacity', backfaceVisibility: 'hidden' }}
          >
            <GraphPaper />
          </motion.div>
          
          {/* Content fades in */}
          <motion.div 
            className="container mx-auto px-container md:px-container-lg relative z-20"
            initial={{ opacity: isComingFromHome ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: isComingFromHome ? 1.2 : 0,
              delay: isComingFromHome ? 0.2 : 0,
              ease: "easeInOut"
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: isComingFromHome ? 0.5 : 0 }}
              className="max-w-4xl"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 1, delay: isComingFromHome ? 0.7 : 0.3 }}
                className="h-1 bg-primary mb-8"
              />
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: isComingFromHome ? 0.9 : 0.5 }}
                className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight"
              >
                Revolutionizing<br />the Creator<br />Economy
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: isComingFromHome ? 1.1 : 0.7 }}
                className="text-xl md:text-2xl text-accent-500 mb-12 max-w-2xl"
              >
                TokenizeMe is transforming how creators monetize their influence through personal tokens. Join the future of digital assets.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: isComingFromHome ? 1.3 : 0.9 }}
              >
                <motion.div
                  onClick={scrollToMission}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center group cursor-pointer"
                >
                  <span className="text-lg font-medium mr-2">Explore our mission</span>
                  <motion.span 
                    animate={{ x: [0, 5, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xl"
                  >
                    ↓
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Rest of the sections - wrap content in motion.div with the same animation */}
        <motion.div
          initial={{ opacity: isComingFromHome ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: isComingFromHome ? 1.2 : 0,
            delay: isComingFromHome ? 0.4 : 0,
            ease: "easeInOut"
          }}
        >
          {/* Mission Section */}
          <section ref={missionRef} className="py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <GraphPaper />
            </div>
            
            <div className="container mx-auto px-container md:px-container-lg relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-3"
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-primary mb-8"
                  />
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                    Our Mission
                  </h2>
                  <p className="text-xl text-accent-500 mb-8 leading-relaxed">
                    At TokenizeMe, we're on a mission to democratize access to the creator economy. We believe that every creator deserves the opportunity to transform their influence into a valuable digital asset.
                  </p>
                  <p className="text-xl text-accent-500 mb-12 leading-relaxed">
                    By leveraging cutting-edge blockchain technology, we're making it possible for creators to launch their personal tokens, connect with their community, and unlock new revenue streams - all while maintaining full control over their digital assets.
                  </p>
                  <Link
                    href="/contact"
                    className="group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-white px-10 py-5 rounded-lg text-lg font-heading uppercase tracking-wider inline-flex items-center"
                    >
                      <span>Join the Revolution</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-2 relative"
                >
                  <div className="grid grid-cols-1 gap-6 relative z-10">
                    {[
                      { icon: FaGlobe, title: "Global Reach", desc: "Access a worldwide audience of potential investors and supporters" },
                      { icon: FaLock, title: "Secure Platform", desc: "Built on industry-leading blockchain technology" },
                      { icon: FaHandshake, title: "Trusted Partner", desc: "Compliant with global regulatory standards" }
                    ].map((item, i) => (
                      <motion.div 
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-accent-50 p-8 rounded-2xl border border-accent-100 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-start">
                          <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mr-6 transform group-hover:scale-110 transition-transform">
                            <item.icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                            <p className="text-accent-500">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-primary opacity-5 rounded-3xl transform -rotate-3 scale-105" />
                  <motion.div 
                    className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary opacity-5"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-32 bg-accent-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <GraphPaper />
            </div>
            
            {/* Decorative particles */}
            <div className="absolute inset-0 opacity-20">
              <ParticleField />
            </div>
            
            <div className="container mx-auto px-container md:px-container-lg relative z-10">
              <SectionHeader
                title="Our Core Values"
                subtitle="The principles that guide everything we do"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {[
                  { icon: FaRocket, title: "Innovation", desc: "Pushing the boundaries of what's possible in the creator economy" },
                  { icon: FaChartLine, title: "Growth", desc: "Empowering creators to scale their influence and revenue" },
                  { icon: FaUsers, title: "Community", desc: "Building strong relationships between creators and their supporters" },
                  { icon: FaShieldAlt, title: "Trust", desc: "Maintaining the highest standards of security and transparency" }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-accent-100"
                  >
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <value.icon size={28} />
                      </div>
                      <div className="absolute top-0 left-0 w-16 h-16 bg-primary opacity-30 rounded-lg transform -rotate-6 group-hover:rotate-0 transition-transform" />
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold mb-4">{value.title}</h3>
                    <p className="text-accent-500">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative shapes */}
              <motion.div 
                className="absolute -left-32 top-1/4 w-64 h-64 rounded-full border border-primary opacity-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full border border-primary opacity-10"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <ParticleField />
            </div>
            <div className="absolute inset-0 bg-white opacity-70 z-10" />
            
            <div className="container mx-auto px-container md:px-container-lg text-center relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-1 bg-primary mx-auto mb-12"
                />
                
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                  Ready to Transform<br />Your Influence?
                </h2>
                <p className="text-xl text-accent-500 mb-16">
                  Join thousands of creators who have already launched their personal tokens with TokenizeMe.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact" className="group">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-white px-10 py-5 rounded-lg text-lg font-heading uppercase tracking-wider inline-flex items-center"
                    >
                      <span>Get Started</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </motion.div>
                  </Link>
                  
                  <Link href="/roadmap" className="group">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-accent-100 text-primary px-10 py-5 rounded-lg text-lg font-heading uppercase tracking-wider inline-flex items-center"
                    >
                      <span>View Roadmap</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </AnimatePresence>
  );
} 