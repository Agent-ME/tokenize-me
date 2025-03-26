'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaCoins, FaHandshake, FaChartLine, FaUsers, FaLock, FaIdCard, FaRocket, FaLayerGroup, FaFingerprint, FaNetworkWired, FaCode, FaShieldAlt, FaBitcoin } from 'react-icons/fa';
import ParticleField from '@/components/ui/ParticleField';
import GraphPaper from '@/components/ui/GraphPaper';
import SectionHeader from '@/components/ui/SectionHeader';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const tokenDistribution = [
  { label: 'Community & Investors', percentage: 80, color: '#6366f1', description: 'Distributed to the community, early investors, and public sale participants', icon: FaUsers },
  { label: 'Developer Fund', percentage: 10, color: '#ec4899', description: 'Reserved for ongoing technical development of the platform', icon: FaCode },
  { label: 'Community Incentives', percentage: 10, color: '#f43f5e', description: 'Allocated for community growth and influencer partnerships', icon: FaHandshake },
];

const chartData = {
  labels: tokenDistribution.map(item => item.label),
  datasets: [
    {
      data: tokenDistribution.map(item => item.percentage),
      backgroundColor: tokenDistribution.map(item => item.color),
      borderColor: '#FFFFFF',
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          return `${context.label}: ${context.raw}%`;
        },
      },
    },
  },
};

const tokenUtility = [
  {
    title: 'For Holders',
    icon: FaIdCard,
    color: '#000000',
    benefits: [
      'Exclusive creator content access',
      'Priority for new platform features',
      'Governance voting rights',
      'Revenue sharing opportunities',
      'Early access to creator tokens'
    ]
  },
  {
    title: 'For Creators',
    icon: FaHandshake,
    color: '#000000',
    benefits: [
      'Direct monetization of influence',
      'Enhanced community engagement',
      'Advanced analytics dashboard',
      'Cross-platform integration',
      'Customizable token economics'
    ]
  }
];

export default function TokenomicsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [highlightedSegment, setHighlightedSegment] = useState<number | null>(null);
  const [hoveredUtility, setHoveredUtility] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const handleSegmentMouseEnter = (index: number) => {
    setHighlightedSegment(index);
  };

  const handleSegmentMouseLeave = () => {
    setHighlightedSegment(null);
  };
  
  const scrollToChart = () => {
    chartRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Minimal Clean Hero Section */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 z-0">
          <ParticleField />
        </div>
        <div className="absolute inset-0 z-10 opacity-30">
          <GraphPaper />
        </div>
        
        <div className="container mx-auto px-container md:px-container-lg relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left side content */}
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
                Our Token<br />Economics
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl text-accent-500 mb-12 max-w-2xl"
              >
                Understanding the distribution, utility, and economic model behind TokenizeMe's ecosystem.
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
                  onClick={scrollToChart}
                >
                  <span className="text-lg font-medium mr-2">Explore distribution</span>
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
            
            {/* Ultra Clean Right Side Visualization */}
            <div className="hidden lg:flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                {/* Single elegant token */}
                <div className="relative flex justify-center items-center">
                  {/* Main token */}
                  <motion.div
                    initial={{ scale: 0.9, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 1.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative"
                  >
                    <div className="w-80 h-80 rounded-full bg-gradient-to-b from-black to-gray-800 border-[12px] border-white shadow-2xl flex items-center justify-center overflow-hidden">
                      {/* Simple circle background */}
                      <div className="absolute w-64 h-64 rounded-full border border-white/10"></div>
                      
                      {/* Token symbol */}
                      <div className="relative z-10 text-6xl font-bold text-white font-mono tracking-widest opacity-80">$TKM</div>
                      
                      {/* Light reflection */}
                      <div className="absolute top-6 left-1/4 w-1/2 h-6 bg-white/20 rounded-full blur-sm"></div>
                    </div>
                  </motion.div>
                  
                  {/* Distribution segments as simple elegant arcs */}
                  <div className="absolute inset-0">
                    {tokenDistribution.map((segment, index) => {
                      const percentage = segment.percentage / 100;
                      const startAngle = index === 0 ? 0 : tokenDistribution
                        .slice(0, index)
                        .reduce((sum, item) => sum + (item.percentage / 100), 0) * Math.PI * 2;
                      const endAngle = startAngle + (percentage * Math.PI * 2);
                      const midAngle = startAngle + ((endAngle - startAngle) / 2);
                      
                      // Calculate position for label with fixed radius to ensure all labels are equidistant from the chart
                      // Rotating 90 degrees counterclockwise by subtracting π/2 from the angle
                      const radius = 62; // Fixed radius for all labels
                      const x = Math.cos(midAngle - Math.PI) * radius;
                      const y = Math.sin(midAngle - Math.PI) * radius;
                      
                      return (
                        <React.Fragment key={index}>
                          {/* Arc segment */}
                          <motion.svg 
                            className="absolute top-0 left-0 w-full h-full"
                            viewBox="0 0 100 100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                            style={{ transform: "rotate(-90deg)" }}
                          >
                            <motion.path
                              d={describeArc(50, 50, 44, startAngle * (180/Math.PI), endAngle * (180/Math.PI))}
                              fill="none"
                              stroke={segment.color}
                              strokeWidth="2"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                            />
                          </motion.svg>
                          
                          {/* Percentage label outside the circle */}
                          <motion.div
                            className="absolute font-mono text-xs font-bold"
                            style={{
                              top: `calc(50% + ${y}%)`,
                              left: `calc(50% + ${x}%)`,
                              transform: 'translate(-50%, -50%)',
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.4,
                              delay: 1.2 + (index * 0.1),
                              type: "spring"
                            }}
                          >
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center shadow-md border border-white/50"
                              style={{ 
                                backgroundColor: segment.color, 
                                color: '#fff',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                              }}
                            >
                              {segment.percentage}
                            </div>
                          </motion.div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                
                {/* Clean supply indicator - moved further right */}
                <motion.div
                  className="absolute -bottom-16 bg-white px-5 py-2.5 rounded-full shadow-md border border-accent-100"
                  style={{ right: '-80px' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs">Total Supply:</span>
                    <span className="font-bold">1B</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Distribution Section - Completely Redesigned */}
      <section ref={chartRef} className="py-20 bg-gradient-to-b from-white to-accent-50/30 relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold">Token Distribution</h2>
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
            <p className="text-accent-600 mt-6 max-w-2xl mx-auto">
              A transparent breakdown of how TokenizeMe tokens are allocated
            </p>
          </div>
          
          {/* 3D Token Supply Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-xs mx-auto mb-12"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-3 scale-105" />
            <div className="relative bg-white rounded-xl py-3 px-6 border border-accent-200 shadow-lg flex items-center justify-center">
              <div className="absolute -left-3 -top-3 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                <FaCoins size={24} />
              </div>
              <div className="ml-10">
                <span className="text-xs uppercase tracking-wider text-accent-500">Total Supply</span>
                <div className="text-3xl font-bold">1,000,000,000</div>
              </div>
            </div>
          </motion.div>
          
          {/* Visualization Section - Creative Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Chart - Left Side */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Shadow effect */}
                <div className="absolute inset-0 blur-2xl bg-primary/5 rounded-full transform scale-75 -z-10" />
                
                {/* Rotating outer ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-dashed border-accent-200/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Chart with hover effect */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <Doughnut data={chartData} options={chartOptions} />
                </motion.div>
                
                {/* Center element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center shadow-inner">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaCoins size={28} className="text-primary" />
                  </motion.div>
                </div>
              </div>
              
              {/* Centered instruction text below chart */}
              <div className="mt-6 text-center">
                <motion.div 
                  className="inline-flex items-center gap-2 text-sm text-accent-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span>Click a segment for details</span>
                  <motion.div 
                    animate={{ 
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    className="text-primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Token Distribution Cards - Right Side */}
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                {tokenDistribution.map((segment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                      y: -5
                    }}
                    className={`bg-white rounded-lg p-4 border border-accent-100 transition-all flex cursor-pointer ${
                      highlightedSegment === index ? 'ring-2 ring-primary/50' : ''
                    }`}
                    style={{ 
                      opacity: highlightedSegment !== null && highlightedSegment !== index ? 0.7 : 1
                    }}
                    onMouseEnter={() => handleSegmentMouseEnter(index)}
                    onMouseLeave={handleSegmentMouseLeave}
                  >
                    {/* Percentage Circle */}
                    <div className="flex-shrink-0 relative mr-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl relative overflow-hidden"
                        style={{ background: `conic-gradient(${segment.color} ${segment.percentage}%, #f5f5f5 0%)` }}
                      >
                        <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                          {segment.percentage}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div 
                          className="w-7 h-7 rounded-md flex items-center justify-center mr-2"
                          style={{ backgroundColor: segment.color, color: '#fff' }}
                        >
                          <segment.icon size={14} />
                        </div>
                        <h3 className="text-lg font-bold">{segment.label}</h3>
                      </div>
                      <p className="text-accent-500 text-sm">{segment.description}</p>
                      
                      {/* Tokens amount */}
                      <div className="mt-2 text-xs text-right font-mono">
                        {(segment.percentage * 10_000_000).toLocaleString()} tokens
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Token Utility Section */}
      <section className="py-32 bg-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <GraphPaper />
        </div>
        
        {/* Decorative particles */}
        <div className="absolute inset-0 opacity-10">
          <ParticleField />
        </div>
        
        <div className="container mx-auto px-container md:px-container-lg relative z-10">
          <SectionHeader
            title="Token Utility"
            subtitle="How our tokens provide value to various stakeholders in the ecosystem"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {tokenUtility.map((utility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`bg-white rounded-3xl p-8 border border-accent-100 transition-all transform ${
                  hoveredUtility === i ? 'shadow-xl scale-[1.02]' : 'shadow-md'
                }`}
                onMouseEnter={() => setHoveredUtility(i)}
                onMouseLeave={() => setHoveredUtility(null)}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div 
                      className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center z-10 relative"
                    >
                      <utility.icon size={28} />
                    </div>
                    <div className="absolute top-2 left-2 w-16 h-16 bg-black rounded-2xl opacity-20"></div>
                  </div>
                  <h3 className="text-2xl font-bold ml-6">{utility.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {utility.benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    >
                      <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-accent-800">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
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
              Ready to Join<br />Our Economy?
            </h2>
            <p className="text-xl text-accent-500 mb-16">
              Get involved with TokenizeMe's ecosystem and be part of the creator economy revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
    </div>
  );
}

// Helper function to describe an arc path for SVG
function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
  return [
    "M", start.x, start.y, 
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
} 