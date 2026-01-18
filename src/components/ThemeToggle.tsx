'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme, themeConfig } = useTheme();
  const isGold = theme === 'gold';

  return (
    <motion.button
      id="theme-toggle"
      onClick={toggleTheme}
      className="relative w-20 h-10 rounded-full p-1 cursor-pointer overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${themeConfig.card.bg}, ${themeConfig.card.border})`,
        border: `2px solid ${themeConfig.primary}`,
        boxShadow: `0 0 20px ${themeConfig.glow}`,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`切换到${isGold ? '银辉' : '金耀'}模式`}
    >
      {/* 滑块 */}
      <motion.div
        className="absolute top-1 w-7 h-7 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.secondary})`,
          boxShadow: `0 0 15px ${themeConfig.primary}`,
        }}
        animate={{
          left: isGold ? '4px' : '44px',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{ rotate: isGold ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isGold ? (
            <Sun size={16} className="text-amber-900" />
          ) : (
            <Moon size={16} className="text-slate-800" />
          )}
        </motion.div>
      </motion.div>

      {/* 背景图标 */}
      <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none">
        <motion.div
          animate={{ opacity: isGold ? 0.3 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={14} style={{ color: themeConfig.text.muted }} />
        </motion.div>
        <motion.div
          animate={{ opacity: isGold ? 0.8 : 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={14} style={{ color: themeConfig.text.muted }} />
        </motion.div>
      </div>

      {/* 光晕效果 */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          boxShadow: [
            `inset 0 0 10px ${themeConfig.glow}`,
            `inset 0 0 20px ${themeConfig.glow}`,
            `inset 0 0 10px ${themeConfig.glow}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
}
