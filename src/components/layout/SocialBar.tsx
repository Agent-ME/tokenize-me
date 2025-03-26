'use client';

import { motion } from 'framer-motion';
import { FaXTwitter, FaDiscord } from 'react-icons/fa6';
import Image from 'next/image';

export default function SocialBar() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 flex flex-col gap-4 z-50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a
        href="https://x.com/TokenizeMe"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <motion.div
          className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaXTwitter className="text-white text-xl group-hover:text-gray-300 transition-colors" />
        </motion.div>
      </a>
      
      <a
        href="https://discord.gg/xR7DHWVw"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <motion.div
          className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDiscord className="text-white text-xl group-hover:text-gray-300 transition-colors" />
        </motion.div>
      </a>
      
      <a
        href="https://www.pump.fun/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <motion.div
          className="w-12 h-12 bg-[#FF4DCD] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-8 h-8">
            <Image
              src="/images/Pump_fun_logo.png"
              alt="Pump.fun"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
} 