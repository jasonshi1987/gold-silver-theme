'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { CONTENT } from '@/constants/theme';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  decimals?: number;
}

function CountUp({ end, duration = 2, prefix = '', decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeProgress;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
    </span>
  );
}

interface StatItemProps {
  stat: (typeof CONTENT.stats)[0];
  index: number;
}

function StatItem({ stat, index }: StatItemProps) {
  const { themeConfig } = useTheme();

  return (
    <motion.div
      className="relative text-center p-6 rounded-2xl cursor-pointer"
      style={{
        background: themeConfig.card.bg,
        border: `1px solid ${themeConfig.card.border}`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        borderColor: themeConfig.primary,
        boxShadow: `0 0 30px ${themeConfig.glow}`,
      }}
    >
      {/* 数值 */}
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          background: `linear-gradient(135deg, ${themeConfig.primary}, ${themeConfig.accent})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <CountUp
          end={stat.value}
          prefix={stat.prefix}
          decimals={stat.value % 1 !== 0 ? 2 : 0}
        />
        <span className="text-2xl ml-1">{stat.unit}</span>
      </div>

      {/* 标签 */}
      <p
        className="text-sm tracking-wide"
        style={{ color: themeConfig.text.muted }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  const { themeConfig, theme } = useTheme();

  return (
    <section className="py-24 px-6 relative" style={{ zIndex: 10 }}>
      <div className="max-w-6xl mx-auto relative">
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
            实时数据
          </h2>
          <p
            className="text-lg"
            style={{ color: themeConfig.text.muted }}
          >
            {theme === 'gold' ? '黄金市场行情' : '白银市场行情'}
          </p>
        </motion.div>

        {/* 数据网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CONTENT.stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* 数据更新提示 */}
        <motion.p
          className="text-center mt-8 text-xs"
          style={{ color: themeConfig.text.muted }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * 数据仅供演示，实际数据请接入真实 API
        </motion.p>
      </div>
    </section>
  );
}
