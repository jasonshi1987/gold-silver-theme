'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { CAT_INFO } from '@/constants/theme';

export function CatSection() {
  const { themeConfig } = useTheme();
  const [isPetting, setIsPetting] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  const handlePet = () => {
    setIsPetting(true);
    setHearts((prev) => [...prev, Date.now()]);
    setTimeout(() => setIsPetting(false), 500);
  };

  return (
    <section className="py-24 px-6 relative" style={{ zIndex: 10 }}>
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-4xl mb-4"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🐱
          </motion.span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: themeConfig.text.primary }}
          >
            镇宅神兽
          </h2>
          <p
            className="text-lg"
            style={{ color: themeConfig.text.muted }}
          >
            家有一猫，如有一宝
          </p>
        </motion.div>

        {/* 猫咪卡片 */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #DDA0DD20, ${themeConfig.card.bg})`,
            border: `2px solid #DDA0DD40`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 飘动的爱心 */}
          {hearts.map((id) => (
            <motion.div
              key={id}
              className="absolute pointer-events-none"
              style={{
                left: `${30 + Math.random() * 40}%`,
                bottom: '40%',
              }}
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => {
                setHearts((prev) => prev.filter((h) => h !== id));
              }}
            >
              <Heart size={24} fill="#FF6B6B" color="#FF6B6B" />
            </motion.div>
          ))}

          <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
            {/* 猫咪ASCII艺术/表情 */}
            <motion.div
              className="relative w-48 h-48 rounded-full flex items-center justify-center cursor-pointer"
              style={{
                background: `linear-gradient(135deg, #DDA0DD30, #DDA0DD10)`,
                border: `3px solid #DDA0DD50`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePet}
              animate={isPetting ? { rotate: [0, -5, 5, -5, 0] } : {}}
            >
              {/* 猫脸 */}
              <div className="text-center">
                <motion.div
                  className="text-7xl"
                  animate={isPetting ? { scale: [1, 1.2, 1] } : {}}
                >
                  😺
                </motion.div>
                <motion.p
                  className="text-xs mt-2"
                  style={{ color: '#DDA0DD' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  点我撸猫
                </motion.p>
              </div>

              {/* 光效 */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: isPetting
                    ? '0 0 60px rgba(221, 160, 221, 0.6)'
                    : '0 0 30px rgba(221, 160, 221, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* 猫咪信息 */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{
                  background: '#DDA0DD20',
                  border: '1px solid #DDA0DD40',
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={16} color="#DDA0DD" />
                <span style={{ color: '#DDA0DD' }} className="text-sm">
                  {CAT_INFO.title}
                </span>
              </motion.div>

              <motion.h3
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#DDA0DD' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {CAT_INFO.name}
              </motion.h3>

              {/* 特质标签 */}
              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {CAT_INFO.traits.map((trait, index) => (
                  <motion.span
                    key={trait}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: themeConfig.card.bg,
                      border: `1px solid ${themeConfig.card.border}`,
                      color: themeConfig.text.secondary,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, borderColor: '#DDA0DD' }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>

              {/* 猫咪语录 */}
              <motion.p
                className="text-lg italic"
                style={{ color: themeConfig.text.muted }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {CAT_INFO.quote}
              </motion.p>
            </div>
          </div>

          {/* 猫爪印装饰 */}
          <div className="absolute bottom-4 right-4 opacity-20 text-4xl">
            🐾🐾🐾
          </div>
        </motion.div>
      </div>
    </section>
  );
}
