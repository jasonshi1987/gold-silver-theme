'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { PROFILE, TAGS } from '@/constants/theme';

export function Hero() {
  const { themeConfig, theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 装饰星星 */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 15}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Star
            size={16 + i * 4}
            fill={themeConfig.primary}
            color={themeConfig.primary}
            style={{ opacity: 0.6 }}
          />
        </motion.div>
      ))}

      {/* 主要内容 */}
      <div className="relative max-w-4xl mx-auto px-6 text-center" style={{ zIndex: 10 }}>
        {/* 顶部标签 */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
          style={{
            background: `linear-gradient(135deg, ${themeConfig.card.bg}, ${themeConfig.card.hover})`,
            border: `1px solid ${themeConfig.card.border}`,
            boxShadow: `0 0 30px ${themeConfig.glow}`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles size={18} style={{ color: themeConfig.primary }} />
          </motion.div>
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: themeConfig.text.secondary }}
          >
            {PROFILE.zodiac} · {PROFILE.school}
          </span>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            style={{
              background: `linear-gradient(135deg, ${themeConfig.primary} 0%, #FF6B6B 25%, #4ECDC4 50%, #45B7D1 75%, ${themeConfig.accent} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
            }}
          >
            {PROFILE.name}
          </span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-xl md:text-2xl mb-3"
          style={{ color: themeConfig.text.secondary }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          的奇妙世界 ✨
        </motion.p>

        {/* 职业描述 */}
        <motion.p
          className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: themeConfig.text.muted }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {PROFILE.job} · {PROFILE.jobDetail}
        </motion.p>

        {/* 标签云 */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {TAGS.map((tag, index) => (
            <motion.span
              key={tag.text}
              className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
              style={{
                background: `${tag.color}20`,
                border: `1px solid ${tag.color}50`,
                color: tag.color,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 1 + index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 20px ${tag.color}50`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tag.text}
            </motion.span>
          ))}
        </motion.div>

        {/* 爱心装饰 */}
        <motion.div
          className="flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Heart
                size={20 + i * 4}
                fill="#FF6B6B"
                color="#FF6B6B"
                style={{ opacity: 0.8 - i * 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
