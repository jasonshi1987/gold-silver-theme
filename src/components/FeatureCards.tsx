'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Crown, LucideIcon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { CONTENT } from '@/constants/theme';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  TrendingUp,
  Crown,
};

interface FeatureCardProps {
  feature: (typeof CONTENT.features)[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const { themeConfig } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: themeConfig.card.bg,
        border: `1px solid ${themeConfig.card.border}`,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, borderColor: themeConfig.primary }}
    >
      {/* 光泽扫过效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            105deg,
            transparent 40%,
            ${themeConfig.primary}20 45%,
            ${themeConfig.primary}40 50%,
            ${themeConfig.primary}20 55%,
            transparent 60%
          )`,
        }}
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* 卡片内容 */}
      <div className="relative p-8">
        {/* 图标 */}
        <motion.div
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
          style={{
            background: `linear-gradient(135deg, ${themeConfig.primary}20, ${themeConfig.secondary}20)`,
            border: `1px solid ${themeConfig.primary}30`,
          }}
        >
          <Icon size={28} style={{ color: themeConfig.primary }} />
        </motion.div>

        {/* 标题 */}
        <h3
          className="text-xl font-bold mb-3"
          style={{ color: themeConfig.text.primary }}
        >
          {feature.title}
        </h3>

        {/* 描述 */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: themeConfig.text.muted }}
        >
          {feature.description}
        </p>

        {/* 装饰线 */}
        <motion.div
          className="mt-6 h-0.5 rounded-full origin-left"
          style={{ backgroundColor: themeConfig.primary }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export function FeatureCards() {
  const { themeConfig } = useTheme();

  return (
    <section className="py-24 px-6 relative" style={{ zIndex: 10 }}>
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: themeConfig.text.primary }}
          >
            核心优势
          </h2>
          <p
            className="text-lg"
            style={{ color: themeConfig.text.muted }}
          >
            我们为您提供最优质的贵金属服务
          </p>
        </motion.div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT.features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
