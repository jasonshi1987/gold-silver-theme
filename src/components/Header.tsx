'use client';

import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const { themeConfig } = useTheme();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
      style={{
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
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="p-2 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${themeConfig.primary}20, ${themeConfig.secondary}20)`,
              border: `1px solid ${themeConfig.primary}40`,
            }}
            animate={{
              boxShadow: [
                `0 0 10px ${themeConfig.glow}`,
                `0 0 20px ${themeConfig.glow}`,
                `0 0 10px ${themeConfig.glow}`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Gem
              size={24}
              style={{ color: themeConfig.primary }}
            />
          </motion.div>
          <div>
            <motion.h1
              className="text-lg font-bold tracking-wide"
              style={{ color: themeConfig.text.primary }}
            >
              G&S Gallery
            </motion.h1>
            <motion.p
              className="text-xs tracking-widest uppercase"
              style={{ color: themeConfig.text.muted }}
            >
              Precious Metals
            </motion.p>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['鉴赏', '投资', '收藏', '资讯'].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="relative text-sm font-medium tracking-wide"
              style={{ color: themeConfig.text.secondary }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: themeConfig.primary }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

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
