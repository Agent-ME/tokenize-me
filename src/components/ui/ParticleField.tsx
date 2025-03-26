'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseSize: number;
  angle: number;
  rotationSpeed: number;
  pulsePhase: number;
  pulseSpeed: number;
  hue: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with proper scaling
    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize particles
    const initParticles = () => {
      const particleCount = 120;
      particles.current = [];

      // Create particles with a more uniform distribution
      for (let i = 0; i < particleCount; i++) {
        const baseSize = Math.random() * 5 + 2;
        // Use a grid-based distribution with random offset
        const gridX = (i % 10) / 10;
        const gridY = Math.floor(i / 10) / Math.floor(particleCount / 10);
        const randomOffset = 0.1; // 10% random offset
        
        particles.current.push({
          x: (gridX + (Math.random() - 0.5) * randomOffset) * canvas.width,
          y: (gridY + (Math.random() - 0.5) * randomOffset) * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: baseSize,
          baseSize,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          hue: Math.random() < 0.3 ? 0 : Math.random() < 0.5 ? 180 : 200, // 0 for black, 180 for grey, 200 for silver
        });
      }
    };

    // Update and draw particles
    const animate = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      time.current += 0.016;

      particles.current.forEach((particle) => {
        // Update position and properties
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.angle += particle.rotationSpeed;
        particle.pulsePhase += particle.pulseSpeed;
        
        // Pulse size
        particle.size = particle.baseSize * (1 + Math.sin(particle.pulsePhase) * 0.2);

        // Mouse interaction with attraction/repulsion
        const dx = particle.x - (mousePosition.current.x - rect.left);
        const dy = particle.y - (mousePosition.current.y - rect.top);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 150;
          const repel = distance < 50 ? -1 : 1;
          particle.vx += Math.cos(angle) * force * 0.15 * repel;
          particle.vy += Math.sin(angle) * force * 0.15 * repel;
        }

        // Boundary check with smooth wrap-around
        const buffer = particle.size * 2;
        if (particle.x < -buffer) {
          particle.x = rect.width + buffer;
          particle.y = Math.random() * rect.height; // Randomize Y when wrapping
        }
        if (particle.x > rect.width + buffer) {
          particle.x = -buffer;
          particle.y = Math.random() * rect.height;
        }
        if (particle.y < -buffer) {
          particle.y = rect.height + buffer;
          particle.x = Math.random() * rect.width; // Randomize X when wrapping
        }
        if (particle.y > rect.height + buffer) {
          particle.y = -buffer;
          particle.x = Math.random() * rect.width;
        }

        // Apply drag with turbulence
        const turbulence = Math.sin(time.current + particle.x * 0.01) * 0.01;
        particle.vx = particle.vx * 0.99 + turbulence;
        particle.vy = particle.vy * 0.99 + turbulence;

        // Draw particle with rotation
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);

        // Glowing effect with new colors
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
        if (particle.hue === 200) { // Silver particles
          gradient.addColorStop(0, `hsla(${particle.hue}, 0%, 100%, 0.4)`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 0%, 70%, 0)`);
        } else if (particle.hue === 180) { // Grey particles
          gradient.addColorStop(0, `hsla(${particle.hue}, 0%, 80%, 0.4)`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 0%, 50%, 0)`);
        } else { // Black particles
          gradient.addColorStop(0, `hsla(${particle.hue}, 0%, 40%, 0.4)`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 0%, 20%, 0)`);
        }
        
        ctx.beginPath();
        ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.hue === 200 
          ? `hsla(${particle.hue}, 0%, 100%, 0.8)`
          : particle.hue === 180
          ? `hsla(${particle.hue}, 0%, 80%, 0.8)`
          : `hsla(${particle.hue}, 0%, 40%, 0.8)`;
        ctx.fill();
        ctx.restore();

        // Draw connections with dynamic opacity
        particles.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 1200;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            // Gradient line with new colors
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            const startColor = particle.hue === 200 
              ? `hsla(${particle.hue}, 0%, 100%, ${opacity})`
              : particle.hue === 180
              ? `hsla(${particle.hue}, 0%, 80%, ${opacity})`
              : `hsla(${particle.hue}, 0%, 40%, ${opacity})`;
            const endColor = otherParticle.hue === 200 
              ? `hsla(${otherParticle.hue}, 0%, 100%, ${opacity})`
              : otherParticle.hue === 180
              ? `hsla(${otherParticle.hue}, 0%, 80%, ${opacity})`
              : `hsla(${otherParticle.hue}, 0%, 40%, ${opacity})`;
            gradient.addColorStop(0, startColor);
            gradient.addColorStop(1, endColor);
            
            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        });
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    initParticles();
    animate();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.9 }}
      />
    </div>
  );
} 