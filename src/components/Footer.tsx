'use client';

import { motion } from 'framer-motion';
import { Gem, Github, Twitter, Mail } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { CONTENT } from '@/constants/theme';

export function Footer() {
  const { themeConfig } = useTheme();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer
      className="relative py-16 px-6"
      style={{
        zIndex: 10,
        background: `linear-gradient(180deg, transparent 0%, ${themeConfig.background.from} 100%)`,
        borderTop: `1px solid ${themeConfig.card.border}`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & 简介 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${themeConfig.primary}20, ${themeConfig.secondary}20)`,
                  border: `1px solid ${themeConfig.primary}40`,
                }}
              >
                <Gem size={20} style={{ color: themeConfig.primary }} />
              </div>
              <span
                className="text-lg font-bold"
                style={{ color: themeConfig.text.primary }}
              >
                G&S Gallery
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: themeConfig.text.muted }}
            >
              {CONTENT.footer.tagline}
            </p>
          </motion.div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="text-sm font-semibold mb-4 tracking-wide"
              style={{ color: themeConfig.text.primary }}
            >
              快速链接
            </h4>
            <ul className="space-y-2">
              {['关于我们', '产品介绍', '投资指南', '联系我们'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-sm cursor-pointer inline-block"
                    style={{ color: themeConfig.text.muted }}
                    whileHover={{ color: themeConfig.primary, x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 社交链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="text-sm font-semibold mb-4 tracking-wide"
              style={{ color: themeConfig.text.primary }}
            >
              关注我们
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    background: themeConfig.card.bg,
                    border: `1px solid ${themeConfig.card.border}`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: themeConfig.primary,
                    boxShadow: `0 0 15px ${themeConfig.glow}`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon size={18} style={{ color: themeConfig.text.secondary }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 版权信息 */}
        <motion.div
          className="pt-8 text-center"
          style={{ borderTop: `1px solid ${themeConfig.card.border}` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-xs"
            style={{ color: themeConfig.text.muted }}
          >
            {CONTENT.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
