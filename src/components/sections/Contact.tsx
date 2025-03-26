'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaTwitter, FaLinkedin, FaTelegram, FaDiscord } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-container md:px-container-lg">
        <SectionHeader
          title="Join the Creator Economy Revolution"
          subtitle="Ready to launch your personal token? Our team is here to help you get started in minutes."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-bold mb-6">Launch Your Token Today</h3>
            <p className="text-accent-500 mb-8">Reach out to us via email and our team will get back to you within 24 hours to help you launch your personal token.</p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <FaEnvelope size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">Email Us</h3>
                <a href="mailto:support@tokenizeme.com" className="text-lg font-medium text-primary hover:underline">
                  support@tokenizeme.com
                </a>
                <p className="text-sm text-accent-400 mt-1">Response within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-accent-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold mb-6">Why Choose TokenizeMe?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-secondary shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-accent-500">Launch your personal token in minutes, not days</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-secondary shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-accent-500">24/7 technical support and guidance</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-secondary shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-accent-500">Secure and compliant token creation</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary text-secondary shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-accent-500">Built on industry-leading blockchain technology</p>
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-secondary shrink-0">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">Global Headquarters</h3>
                <p className="text-accent-500">123 Blockchain Street<br />Crypto Valley, CH-6300<br />Zug, Switzerland</p>
                <p className="text-sm text-accent-400 mt-1">Serving creators worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-secondary shrink-0">
                <FaClock size={20} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">24/7 Support</h3>
                <p className="text-accent-500">Our team is available around the clock<br />to help you launch your token</p>
                <p className="text-sm text-accent-400 mt-1">No time zone restrictions</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-heading font-bold mb-4">Join Our Community</h3>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 text-primary hover:bg-accent-200 transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 text-primary hover:bg-accent-200 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 text-primary hover:bg-accent-200 transition-colors">
                  <FaTelegram size={20} />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 text-primary hover:bg-accent-200 transition-colors">
                  <FaDiscord size={20} />
                </a>
              </div>
              <p className="text-sm text-accent-400 mt-4">Join thousands of creators who have already launched their tokens</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 