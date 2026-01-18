'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { THEMES } from '@/constants/theme';

export function TransitionRipple() {
  const { isTransitioning, rippleOrigin, theme } = useTheme();

  // 获取即将切换到的主题颜色
  const nextTheme = theme === 'gold' ? 'silver' : 'gold';
  const nextThemeConfig = THEMES[nextTheme];

  return (
    <AnimatePresence>
      {isTransitioning && rippleOrigin && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 主波纹 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              left: rippleOrigin.x,
              top: rippleOrigin.y,
              background: `radial-gradient(circle, ${nextThemeConfig.primary} 0%, ${nextThemeConfig.background.via} 50%, transparent 70%)`,
            }}
            initial={{
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              opacity: 0.8,
            }}
            animate={{
              width: '300vmax',
              height: '300vmax',
              x: '-150vmax',
              y: '-150vmax',
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          />

          {/* 内层光环 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              left: rippleOrigin.x,
              top: rippleOrigin.y,
              border: `3px solid ${nextThemeConfig.primary}`,
              boxShadow: `0 0 30px ${nextThemeConfig.primary}`,
            }}
            initial={{
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              opacity: 1,
            }}
            animate={{
              width: '200vmax',
              height: '200vmax',
              x: '-100vmax',
              y: '-100vmax',
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          />

          {/* 闪光效果 */}
          <motion.div
            className="absolute"
            style={{
              left: rippleOrigin.x - 25,
              top: rippleOrigin.y - 25,
              width: 50,
              height: 50,
              background: nextThemeConfig.primary,
              borderRadius: '50%',
              filter: 'blur(10px)',
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
