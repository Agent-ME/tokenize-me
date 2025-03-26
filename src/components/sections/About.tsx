'use client';

import { motion } from 'framer-motion';
import { FaCoins, FaChartLine, FaCrown, FaUsers } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const features = [
  {
    icon: FaCoins,
    title: 'Personal Token Creation',
    description: 'Launch your own digital token backed by your personal brand and influence.'
  },
  {
    icon: FaChartLine,
    title: 'Value Growth',
    description: 'Watch your token value grow as your influence and community expands.'
  },
  {
    icon: FaCrown,
    title: 'Exclusive Benefits',
    description: 'Offer token holders exclusive access to content, events, and experiences.'
  },
  {
    icon: FaUsers,
    title: 'Community Building',
    description: 'Create a dedicated community of supporters invested in your success.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-container md:px-container-lg">
        <SectionHeader
          title="Why Choose TokenizeMe?"
          subtitle="Transform your influence into a thriving digital economy with our comprehensive tokenization platform."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-accent-100/50 hover:bg-accent-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-secondary mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
              <p className="text-accent-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 