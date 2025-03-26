'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import SectionHeader from '../ui/SectionHeader';

ChartJS.register(ArcElement, Tooltip, Legend);

const tokenDistribution = [
  { label: 'Creator Distribution', percentage: 40, color: '#000000', description: 'Allocated to content creators and celebrities joining the platform' },
  { label: 'Investor Rewards', percentage: 25, color: '#333333', description: 'Reserved for early investors and token holder rewards' },
  { label: 'Platform Development', percentage: 15, color: '#666666', description: 'Funding ongoing platform development and improvements' },
  { label: 'Marketing', percentage: 10, color: '#999999', description: 'Marketing initiatives and partnership development' },
  { label: 'Reserve', percentage: 10, color: '#CCCCCC', description: 'Strategic reserve for future opportunities' },
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

const Tokenomics = () => {
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);

  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container mx-auto px-container md:px-container-lg">
        <SectionHeader
          title="Tokenomics"
          subtitle="Understanding the distribution and utility of TokenizeMe tokens"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Chart */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md">
              <Pie data={chartData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Distribution Details */}
          <div className="space-y-6">
            {tokenDistribution.map((item, index) => (
              <motion.div
                key={item.label}
                className={`p-6 rounded-lg transition-colors ${
                  selectedSegment === index ? 'bg-accent-100' : 'bg-accent-100/50 hover:bg-accent-100/70'
                }`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setSelectedSegment(index)}
                onMouseLeave={() => setSelectedSegment(null)}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <h3 className="text-xl font-heading font-bold">{item.label}</h3>
                  <span className="text-xl font-bold ml-auto">{item.percentage}%</span>
                </div>
                <p className="text-accent-500 pl-8">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Token Utility */}
        <motion.div
          className="mt-16 bg-accent-100/30 p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-4">Token Utility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">For Token Holders</h4>
              <ul className="space-y-2 text-accent-500">
                <li>• Access to exclusive creator content</li>
                <li>• Priority access to new features</li>
                <li>• Voting rights on platform decisions</li>
                <li>• Revenue sharing opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">For Creators</h4>
              <ul className="space-y-2 text-accent-500">
                <li>• Direct monetization of influence</li>
                <li>• Community engagement tools</li>
                <li>• Analytics and growth insights</li>
                <li>• Cross-platform integration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics; 