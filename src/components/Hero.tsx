'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { CONTENT } from '@/constants/theme';

export function Hero() {
  const { themeConfig, theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 装饰性悬浮球 */}
      <motion.div
        className="absolute top-32 left-[15%] w-20 h-20 rounded-full opacity-60 blur-sm"
        style={{
          background: `radial-gradient(circle, ${themeConfig.primary} 0%, transparent 70%)`,
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[10%] w-32 h-32 rounded-full opacity-40 blur-md"
        style={{
          background: `radial-gradient(circle, ${themeConfig.secondary} 0%, transparent 70%)`,
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 主要内容 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* 标签 */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: themeConfig.card.bg,
            border: `1px solid ${themeConfig.card.border}`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles size={16} style={{ color: themeConfig.primary }} />
          </motion.div>
          <span
            className="text-sm tracking-wide"
            style={{ color: themeConfig.text.secondary }}
          >
            {theme === 'gold' ? '尊享金耀体验' : '感受银辉魅力'}
          </span>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            style={{
              background: `linear-gradient(135deg, ${themeConfig.primary} 0%, ${themeConfig.secondary} 50%, ${themeConfig.accent} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {CONTENT.hero.title}
          </motion.span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-xl md:text-2xl mb-4"
          style={{ color: themeConfig.text.secondary }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {CONTENT.hero.subtitle}
        </motion.p>

        {/* 描述 */}
        <motion.p
          className="text-base md:text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: themeConfig.text.muted }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {CONTENT.hero.description}
        </motion.p>

        {/* CTA 按钮 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 rounded-full font-semibold text-base tracking-wide"
            style={{
              background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.secondary})`,
              color: theme === 'gold' ? '#1a1408' : '#0a0f1a',
              boxShadow: `0 4px 30px ${themeConfig.glow}`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 8px 40px ${themeConfig.primary}60`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            开始探索
          </motion.button>

          <motion.button
            className="px-8 py-4 rounded-full font-semibold text-base tracking-wide"
            style={{
              background: 'transparent',
              color: themeConfig.text.primary,
              border: `2px solid ${themeConfig.card.border}`,
            }}
            whileHover={{
              scale: 1.05,
              borderColor: themeConfig.primary,
              backgroundColor: themeConfig.card.bg,
            }}
            whileTap={{ scale: 0.95 }}
          >
            了解更多
          </motion.button>
        </motion.div>

        {/* 滚动提示 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: themeConfig.text.muted }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
