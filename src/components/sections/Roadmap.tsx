'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const milestones = [
  {
    quarter: 'Q1 2025',
    title: 'Platform Launch',
    items: [
      'Initial platform development',
      'Smart contract auditing',
      'Community building',
      'Partnership development'
    ]
  },
  {
    quarter: 'Q2 2025',
    title: 'Creator Onboarding',
    items: [
      'First wave of celebrity tokens',
      'Marketing campaign launch',
      'Mobile app development',
      'Community governance implementation'
    ]
  },
  {
    quarter: 'Q3 2025',
    title: 'Platform Expansion',
    items: [
      'NFT integration',
      'Cross-chain support',
      'Advanced analytics dashboard',
      'Creator collaboration tools'
    ]
  },
  {
    quarter: 'Q4 2025',
    title: 'Global Scaling',
    items: [
      'International market expansion',
      'Enterprise partnerships',
      'Advanced token features',
      'Decentralized governance'
    ]
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 bg-accent-100/30">
      <div className="container mx-auto px-container md:px-container-lg">
        <SectionHeader
          title="Our Roadmap"
          subtitle="Follow our journey as we revolutionize the creator economy through tokenization."
        />
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent-300 transform -translate-x-1/2" />
          
          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2" />
                
                {/* Content */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <h3 className="text-2xl font-heading font-bold mb-2">{milestone.quarter}</h3>
                  <h4 className="text-xl text-primary mb-4">{milestone.title}</h4>
                  <ul className="space-y-2">
                    {milestone.items.map((item, i) => (
                      <li key={i} className="text-accent-500">{item}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Empty column for alignment */}
                <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden md:block md:col-start-1'} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 