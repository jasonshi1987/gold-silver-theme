'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function ParticleBackground() {
  const { themeConfig, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: -1, pointerEvents: 'none' }}
    >
      {/* 渐变背景 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `linear-gradient(135deg, ${themeConfig.background.from} 0%, ${themeConfig.background.via} 50%, ${themeConfig.background.to} 100%)`,
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* 中心光晕 */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        animate={{
          background: `radial-gradient(circle, ${themeConfig.glow} 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* 漂浮粒子 */}
      <AnimatePresence mode="wait">
        {particles.map((particle) => (
          <motion.div
            key={`${theme}-${particle.id}`}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              y: [0, -20, 0],
              backgroundColor: themeConfig.particle,
              boxShadow: `0 0 ${particle.size * 2}px ${themeConfig.particle}`,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
