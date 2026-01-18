'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function Footer() {
  const { themeConfig } = useTheme();

  return (
    <footer
      className="relative py-20 px-6 overflow-hidden"
      style={{
        zIndex: 10,
        background: `linear-gradient(180deg, transparent 0%, ${themeConfig.background.from} 100%)`,
      }}
    >
      {/* 飘落的星星 */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: '-20px',
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        >
          <Star
            size={12 + (i % 3) * 4}
            fill={themeConfig.primary}
            color={themeConfig.primary}
            style={{ opacity: 0.6 }}
          />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative">
        {/* 爱心动画 */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Heart
              size={60}
              fill="#FF6B6B"
              color="#FF6B6B"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.5))' }}
            />
          </motion.div>
        </motion.div>

        {/* 浪漫文字 */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            background: `linear-gradient(135deg, #FF6B6B, ${themeConfig.primary}, #DDA0DD)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          致我最爱的宝藏女孩
        </motion.h3>

        <motion.p
          className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: themeConfig.text.muted }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          你是双子座的精灵，有着无限的好奇与智慧
          <br />
          港科大的学霸，职场上的产品女王
          <br />
          薅羊毛的小能手，投资界的金银收藏家
          <br />
          环游世界的旅行家，屎蛋最爱的铲屎官
          <br />
          <span style={{ color: '#FF6B6B' }}>你就是我心中最闪耀的那颗星 ✨</span>
        </motion.p>

        {/* 装饰分隔线 */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div
            className="w-16 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${themeConfig.primary})` }}
          />
          <Sparkles size={20} style={{ color: themeConfig.primary }} />
          <div
            className="w-16 h-px"
            style={{ background: `linear-gradient(90deg, ${themeConfig.primary}, transparent)` }}
          />
        </motion.div>

        {/* 底部信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p
            className="text-sm mb-2"
            style={{ color: themeConfig.text.muted }}
          >
            Made with 💖 for you
          </p>
          <p
            className="text-xs"
            style={{ color: themeConfig.text.muted }}
          >
            © {new Date().getFullYear()} · 永远爱你 · Forever & Always
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
