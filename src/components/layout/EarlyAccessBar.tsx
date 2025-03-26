'use client';

import { motion } from 'framer-motion';

export default function EarlyAccessBar() {
  return (
    <motion.div
      className="fixed bottom-8 left-8 z-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a
        href="https://tally.so/r/nrYAJR"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div
          className="bg-primary text-white py-3 px-6 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium whitespace-nowrap">Request Early Access</span>
        </motion.div>
      </a>
    </motion.div>
  );
} 