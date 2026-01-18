// 主题配置常量
export const THEMES = {
  gold: {
    name: 'Gold',
    label: '金耀模式',
    primary: '#FFD700',
    secondary: '#B8860B',
    accent: '#DAA520',
    background: {
      from: '#1a1408',
      via: '#2d2410',
      to: '#1a1408',
    },
    particle: 'rgba(255, 215, 0, 0.6)',
    glow: 'rgba(255, 215, 0, 0.3)',
    text: {
      primary: '#FFD700',
      secondary: '#DAA520',
      muted: '#B8860B',
    },
    card: {
      bg: 'rgba(255, 215, 0, 0.05)',
      border: 'rgba(255, 215, 0, 0.2)',
      hover: 'rgba(255, 215, 0, 0.1)',
    },
  },
  silver: {
    name: 'Silver',
    label: '银辉模式',
    primary: '#C0C0C0',
    secondary: '#A8A8A8',
    accent: '#E8E8E8',
    background: {
      from: '#0a0f1a',
      via: '#1a2332',
      to: '#0a0f1a',
    },
    particle: 'rgba(192, 192, 192, 0.6)',
    glow: 'rgba(192, 192, 192, 0.3)',
    text: {
      primary: '#E8E8E8',
      secondary: '#C0C0C0',
      muted: '#94A3B8',
    },
    card: {
      bg: 'rgba(192, 192, 192, 0.05)',
      border: 'rgba(192, 192, 192, 0.2)',
      hover: 'rgba(192, 192, 192, 0.1)',
    },
  },
} as const;

export type ThemeType = keyof typeof THEMES;

// 页面文案
export const CONTENT = {
  hero: {
    title: '贵金属鉴赏馆',
    subtitle: '探索黄金与白银的永恒魅力',
    description: '在这里，感受贵金属带来的视觉盛宴与投资价值',
  },
  features: [
    {
      id: 'purity',
      title: '纯度至上',
      description: '99.99% 纯度认证，品质有保障',
      icon: 'Shield',
    },
    {
      id: 'value',
      title: '保值增值',
      description: '历经千年考验的硬通货',
      icon: 'TrendingUp',
    },
    {
      id: 'heritage',
      title: '传承经典',
      description: '跨越时空的永恒财富象征',
      icon: 'Crown',
    },
  ],
  stats: [
    { id: 'price', label: '实时金价', value: 2048.5, unit: '$/oz', prefix: '' },
    { id: 'change', label: '24h涨幅', value: 1.28, unit: '%', prefix: '+' },
    { id: 'volume', label: '交易量', value: 186.4, unit: 'M', prefix: '$' },
    { id: 'holders', label: '持仓用户', value: 12847, unit: '', prefix: '' },
  ],
  footer: {
    copyright: '© 2024 Gold & Silver Gallery. All rights reserved.',
    tagline: '探索贵金属的无限可能',
  },
};
