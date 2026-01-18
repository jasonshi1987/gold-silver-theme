'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, Plane, Percent, Cat, LucideIcon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { INTERESTS } from '@/constants/theme';

const iconMap: Record<string, LucideIcon> = {
  Coins,
  Plane,
  Percent,
  Cat,
};

interface PlanetCardProps {
  interest: (typeof INTERESTS)[0];
  index: number;
}

function PlanetCard({ interest, index }: PlanetCardProps) {
  const { themeConfig } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[interest.icon];

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${interest.color}10, ${themeConfig.card.bg})`,
        border: `2px solid ${interest.color}30`,
      }}
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.02,
        borderColor: interest.color,
        boxShadow: `0 20px 60px ${interest.color}30`,
      }}
    >
      {/* 背景光晕 */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
        style={{ background: interest.color }}
        animate={{
          opacity: isHovered ? 0.3 : 0.1,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* 轨道环 */}
      <motion.div
        className="absolute top-4 right-4 w-24 h-24 rounded-full border-2 border-dashed"
        style={{ borderColor: `${interest.color}40` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full"
          style={{ background: interest.color }}
        />
      </motion.div>

      {/* 卡片内容 */}
      <div className="relative p-8">
        {/* 图标星球 */}
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{
            background: `linear-gradient(135deg, ${interest.color}30, ${interest.color}10)`,
            border: `2px solid ${interest.color}50`,
            boxShadow: `0 0 30px ${interest.color}30`,
          }}
          animate={{
            boxShadow: isHovered
              ? `0 0 50px ${interest.color}50`
              : `0 0 30px ${interest.color}30`,
          }}
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={36} style={{ color: interest.color }} />
          </motion.div>
        </motion.div>

        {/* 标题 */}
        <h3
          className="text-2xl font-bold mb-2"
          style={{ color: interest.color }}
        >
          {interest.title}
        </h3>

        {/* 描述 */}
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: themeConfig.text.muted }}
        >
          {interest.description}
        </p>

        {/* 统计标签 */}
        <motion.div
          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: `${interest.color}20`,
            color: interest.color,
          }}
          whileHover={{ scale: 1.05 }}
        >
          {interest.stats}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function InterestGalaxy() {
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
          <motion.span
            className="inline-block text-4xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌌
          </motion.span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: themeConfig.text.primary }}
          >
            兴趣星球
          </h2>
          <p
            className="text-lg"
            style={{ color: themeConfig.text.muted }}
          >
            每一个爱好都是独特的星球，闪耀着属于她的光芒
          </p>
        </motion.div>

        {/* 星球卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTERESTS.map((interest, index) => (
            <PlanetCard key={interest.id} interest={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
