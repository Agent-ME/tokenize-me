'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'Contact', href: '/contact' },
];

export default function StickyHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="pl-4 pr-8 md:pr-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="relative w-64 h-20">
            <Image
              src="/images/logo.png"
              alt="TokenizeMe Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-normal uppercase tracking-widest transition-colors ${
                    isActive 
                      ? "font-bold" 
                      : "text-accent-500 hover:text-primary"
                  }`}
                  style={isActive ? { color: '#000000' } : {}}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-accent-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <nav className="py-4 space-y-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-base font-normal uppercase tracking-widest transition-colors ${
                      isActive 
                        ? "font-bold text-black" 
                        : "text-accent-500 hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 