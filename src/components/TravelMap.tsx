'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plane } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { TRAVEL_COUNTRIES } from '@/constants/theme';

export function TravelMap() {
  const { themeConfig } = useTheme();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ zIndex: 10 }}>
      {/* 飞机动画背景 */}
      <motion.div
        className="absolute top-20 left-0 opacity-20"
        animate={{
          x: ['0%', '100%'],
          y: [0, -30, 0, 30, 0],
        }}
        transition={{
          x: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <Plane size={40} style={{ color: themeConfig.primary }} />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-4xl mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✈️
          </motion.span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: themeConfig.text.primary }}
          >
            环球足迹
          </h2>
          <p
            className="text-lg"
            style={{ color: themeConfig.text.muted }}
          >
            世界那么大，她都想去看看
          </p>
        </motion.div>

        {/* 国家徽章网格 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {TRAVEL_COUNTRIES.map((country, index) => (
            <motion.div
              key={country.name}
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                type: 'spring',
                stiffness: 200,
              }}
              onMouseEnter={() => setHoveredCountry(country.name)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-3 rounded-2xl cursor-pointer"
                style={{
                  background: themeConfig.card.bg,
                  border: `1px solid ${themeConfig.card.border}`,
                }}
                whileHover={{
                  scale: 1.1,
                  borderColor: themeConfig.primary,
                  boxShadow: `0 10px 40px ${themeConfig.glow}`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{country.emoji}</span>
                <span
                  className="font-medium"
                  style={{ color: themeConfig.text.secondary }}
                >
                  {country.name}
                </span>
              </motion.div>

              {/* 悬浮提示 */}
              <AnimatePresence>
                {hoveredCountry === country.name && (
                  <motion.div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg whitespace-nowrap"
                    style={{
                      background: themeConfig.primary,
                      color: '#1a1408',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm font-medium">{country.memory}</span>
                    <div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                      style={{ background: themeConfig.primary }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* 统计 */}
        <motion.div
          className="flex justify-center items-center gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: themeConfig.primary }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.6 }}
            >
              {TRAVEL_COUNTRIES.length}+
            </motion.div>
            <p style={{ color: themeConfig.text.muted }}>国家/地区</p>
          </div>

          <div
            className="w-px h-12"
            style={{ background: themeConfig.card.border }}
          />

          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: '#45B7D1' }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.7 }}
            >
              ∞
            </motion.div>
            <p style={{ color: themeConfig.text.muted }}>美好回忆</p>
          </div>

          <div
            className="w-px h-12"
            style={{ background: themeConfig.card.border }}
          />

          <div className="text-center">
            <motion.div
              className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-2"
              style={{ color: '#FF6B6B' }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.8 }}
            >
              <MapPin size={36} />
            </motion.div>
            <p style={{ color: themeConfig.text.muted }}>继续探索</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
