'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaRocket, FaChartLine, FaUsers, FaShieldAlt, FaGlobe, FaLock, FaHandshake, FaCheck, FaArrowRight } from 'react-icons/fa';
import SectionHeader from '@/components/ui/SectionHeader';
import ParticleField from '@/components/ui/ParticleField';
import GraphPaper from '@/components/ui/GraphPaper';

const milestones = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    date: 'Q1 2024',
    status: 'completed',
    items: [
      'Platform development and testing',
      'Smart contract implementation',
      'Security audits and compliance checks',
      'Initial creator partnerships',
    ],
    icon: FaCheck,
    color: '#00C853',
  },
  {
    phase: 'Phase 2',
    title: 'Launch & Growth',
    date: 'Q2 2024',
    status: 'current',
    items: [
      'Public platform launch',
      'Exchange listings',
      'Mobile app development',
      'Community expansion',
    ],
    icon: FaRocket,
    color: '#000000',
  },
  {
    phase: 'Phase 3',
    title: 'Expansion',
    date: 'Q3 2024',
    status: 'upcoming',
    items: [
      'Advanced trading features',
      'Creator marketplace',
      'Cross-chain integration',
      'Global partnerships',
    ],
    icon: FaChartLine,
    color: '#666666',
  },
  {
    phase: 'Phase 4',
    title: 'Innovation',
    date: 'Q4 2024',
    status: 'upcoming',
    items: [
      'AI-powered analytics',
      'NFT integration',
      'DeFi features',
      'Governance implementation',
    ],
    icon: FaUsers,
    color: '#AAAAAA',
  },
];

export default function RoadmapPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const [activePhase, setActivePhase] = useState<number>(1);
  
  // Find the current phase index based on status
  useEffect(() => {
    const currentIndex = milestones.findIndex(milestone => milestone.status === 'current');
    if (currentIndex !== -1) {
      setActivePhase(currentIndex);
    }
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const handlePhaseClick = (index: number) => {
    setActivePhase(index);
  };
  
  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section with Particles */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 z-0">
          <ParticleField />
        </div>
        <div className="absolute inset-0 z-10 opacity-30">
          <GraphPaper />
        </div>
        
        <div className="container mx-auto px-container md:px-container-lg relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ opacity, y }}
              className="lg:col-span-7"
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
                Our Roadmap<br />to Success
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl text-accent-500 mb-12 max-w-2xl"
              >
                A clear vision for the future of creator tokens and digital assets, with ambitious milestones along our journey.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center group cursor-pointer"
                  onClick={() => {
                    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="text-lg font-medium mr-2">Explore our timeline</span>
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
            
            {/* Phase indicators - now with sequential animation */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:justify-start lg:items-start pl-0 lg:pl-16">
              <div className="relative">
                {/* Vertical timeline line - fades in first */}
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: '100%' }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="absolute top-0 bottom-0 left-2.5 w-0.5 bg-accent-200 z-0"
                />
                
                <div className="space-y-10 relative z-10">
                  {milestones.map((milestone, index) => {
                    const isActive = activePhase === index;
                    const isCompleted = milestone.status === 'completed';
                    const isCurrent = milestone.status === 'current';
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.4 + (index * 0.3),
                          type: "spring",
                          stiffness: 100
                        }}
                        className="flex items-center cursor-pointer group"
                        onClick={() => handlePhaseClick(index)}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`w-5 h-5 rounded-full mr-5 flex-shrink-0 ${
                            isActive 
                              ? 'bg-green-500 shadow-lg shadow-green-200' 
                              : isCompleted 
                                ? 'bg-green-400' 
                                : isCurrent 
                                  ? 'bg-black' 
                                  : 'bg-accent-300'
                          }`}
                          animate={{ 
                            scale: isActive ? [1, 1.2, 1] : 1,
                            boxShadow: isActive ? ['0 0 0 rgba(0,200,83,0)', '0 0 20px rgba(0,200,83,0.5)', '0 0 0 rgba(0,200,83,0)'] : 'none'
                          }}
                          transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                        />
                        
                        <div className="flex flex-col">
                          <span className={`font-medium text-base transition-colors ${
                            isActive ? 'text-green-500' : 'text-accent-900 group-hover:text-black'
                          }`}>
                            {milestone.phase}
                          </span>
                          
                          <span className={`text-xs uppercase tracking-wider transition-colors ${
                            isCompleted 
                              ? 'text-green-500' 
                              : isCurrent 
                                ? 'text-black font-bold' 
                                : 'text-accent-500'
                          }`}>
                            {milestone.status}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <GraphPaper />
        </div>
        
        <div className="container mx-auto px-container md:px-container-lg relative z-10">
          <SectionHeader
            title="Our Journey"
            subtitle="A detailed timeline of our past achievements and future ambitions"
          />
          
          <div className="mt-20 relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-accent-200 transform -translate-x-1/2 z-0" />
            
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative mb-32 last:mb-0 ${isEven ? 'md:pr-[calc(50%-50px)]' : 'md:pl-[calc(50%-50px)]'}`}
                >
                  {/* Content card - reduced z-index */}
                  <motion.div 
                    className={`bg-white p-8 rounded-2xl shadow-sm border border-accent-100 relative z-10 mx-auto md:mx-0 max-w-xl ${isEven ? 'md:mr-[80px]' : 'md:ml-[80px]'}`}
                    whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                  >
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 md:hidden"
                        style={{ backgroundColor: `${milestone.color}20`, color: milestone.color }}
                      >
                        <milestone.icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-heading font-bold">{milestone.title}</h3>
                          <span 
                            className="text-sm px-3 py-1 rounded-full"
                            style={{ 
                              backgroundColor: `${milestone.color}20`,
                              color: milestone.color
                            }}
                          >
                            {milestone.date}
                          </span>
                        </div>
                        <span className="text-sm uppercase tracking-wider font-medium" style={{ color: milestone.color }}>
                          {milestone.status === 'completed' ? 'Completed' : milestone.status === 'current' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {milestone.items.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + (itemIndex * 0.1) }}
                          className="flex items-start gap-3"
                        >
                          <div 
                            className="w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5"
                            style={{ 
                              backgroundColor: `${milestone.color}20`,
                              color: milestone.color
                            }}
                          >
                            <FaCheck size={12} />
                          </div>
                          <span className="text-accent-500">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Decorative element */}
                    <div 
                      className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl z-0 opacity-10"
                      style={{ backgroundColor: milestone.color }}
                    />
                  </motion.div>
                  
                  {/* Timeline node - higher z-index */}
                  <div className="absolute left-1/2 top-9 transform -translate-x-1/2 z-20 hidden md:block">
                    <motion.div 
                      className="w-20 h-20 bg-white border-4 rounded-full flex items-center justify-center shadow-lg"
                      style={{ borderColor: milestone.color }}
                      whileInView={{ 
                        boxShadow: [
                          `0 0 0 rgba(${milestone.status === 'current' ? '0,0,0' : milestone.status === 'completed' ? '0,200,83' : '100,100,100'},0)`,
                          `0 0 20px rgba(${milestone.status === 'current' ? '0,0,0' : milestone.status === 'completed' ? '0,200,83' : '100,100,100'},0.5)`,
                          `0 0 0 rgba(${milestone.status === 'current' ? '0,0,0' : milestone.status === 'completed' ? '0,200,83' : '100,100,100'},0)`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <milestone.icon size={28} color={milestone.color} />
                    </motion.div>
                  </div>
                  
                  {/* Date line */}
                  <div className={`absolute top-[3.7rem] h-0.5 w-[calc(25%-20px)] bg-accent-200 hidden md:block z-0 ${isEven ? 'right-1/2 mr-[60px]' : 'left-1/2 ml-[60px]'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-100 rounded-full opacity-30 hidden lg:block" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-100 rounded-full opacity-20 hidden lg:block" />
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <GraphPaper />
        </div>
        
        {/* Decorative particles */}
        <div className="absolute inset-0 opacity-10">
          <ParticleField />
        </div>
        
        <div className="container mx-auto px-container md:px-container-lg relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
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
                Our Vision for the Future
              </h2>
              <p className="text-xl text-accent-500 mb-8 leading-relaxed">
                We're building more than just a platform - we're creating a new ecosystem for the creator economy. Our roadmap reflects our commitment to innovation, security, and community growth.
              </p>
              <p className="text-xl text-accent-500 mb-12 leading-relaxed">
                As we continue to evolve, we'll introduce cutting-edge features that empower creators to maximize their potential and connect with their community in unprecedented ways.
              </p>
              <Link
                href="/tokenomics"
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-10 py-5 rounded-lg text-lg font-heading uppercase tracking-wider inline-flex items-center"
                >
                  <span>View Tokenomics</span>
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
              <div className="relative z-10 space-y-6">
                {[
                  { icon: FaGlobe, title: "Global Impact", desc: "Expanding our reach to creators worldwide" },
                  { icon: FaLock, title: "Enhanced Security", desc: "Advanced protection for all platform users" },
                  { icon: FaHandshake, title: "Strategic Partnerships", desc: "Building a robust ecosystem of partners" }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-8 rounded-2xl border border-accent-100 hover:shadow-lg transition-all group"
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
              Be Part of<br />Our Journey
            </h2>
            <p className="text-xl text-accent-500 mb-16">
              Join us in revolutionizing the creator economy and shaping the future of digital assets.
            </p>
            
            <Link href="/contact" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-10 py-5 rounded-lg text-lg font-heading uppercase tracking-wider inline-flex items-center"
              >
                <span>Get Started Today</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 