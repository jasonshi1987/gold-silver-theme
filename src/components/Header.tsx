'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const { themeConfig } = useTheme();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 backdrop-blur-md"
      style={{
        zIndex: 100,
        background: `linear-gradient(180deg, ${themeConfig.background.from}ee 0%, ${themeConfig.background.from}88 100%)`,
        borderBottom: `1px solid ${themeConfig.card.border}`,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="p-2 rounded-lg"
            style={{
              background: `linear-gradient(135deg, #FF6B6B20, #DDA0DD20)`,
              border: `1px solid #FF6B6B40`,
            }}
            animate={{
              boxShadow: [
                '0 0 10px rgba(255, 107, 107, 0.3)',
                '0 0 20px rgba(255, 107, 107, 0.5)',
                '0 0 10px rgba(255, 107, 107, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={22} fill="#FF6B6B" color="#FF6B6B" />
          </motion.div>
          <div>
            <motion.h1
              className="text-lg font-bold tracking-wide"
              style={{ color: themeConfig.text.primary }}
            >
              宝藏女孩
            </motion.h1>
            <motion.p
              className="text-xs tracking-widest"
              style={{ color: themeConfig.text.muted }}
            >
              Treasure Girl
            </motion.p>
          </div>
        </motion.div>

        {/* 中间装饰 */}
        <div className="hidden md:flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles size={16} style={{ color: themeConfig.primary }} />
          </motion.div>
          <span className="text-sm" style={{ color: themeConfig.text.muted }}>
            Gold & Silver Mode
          </span>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <motion.span
            className="hidden sm:block text-sm"
            style={{ color: themeConfig.text.muted }}
          >
            {themeConfig.label}
          </motion.span>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
