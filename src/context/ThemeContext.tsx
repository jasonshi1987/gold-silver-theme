'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ThemeType, THEMES } from '@/constants/theme';

interface ThemeContextType {
  theme: ThemeType;
  themeConfig: typeof THEMES.gold;
  toggleTheme: () => void;
  isTransitioning: boolean;
  rippleOrigin: { x: number; y: number } | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('gold');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rippleOrigin, setRippleOrigin] = useState<{ x: number; y: number } | null>(null);

  const toggleTheme = useCallback(() => {
    // 获取切换按钮位置作为波纹起点
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      const rect = toggleButton.getBoundingClientRect();
      setRippleOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setIsTransitioning(true);

    // 延迟切换主题，让动画先开始
    setTimeout(() => {
      setTheme((prev) => (prev === 'gold' ? 'silver' : 'gold'));
    }, 150);

    // 动画结束后重置状态
    setTimeout(() => {
      setIsTransitioning(false);
      setRippleOrigin(null);
    }, 800);
  }, []);

  const value = {
    theme,
    themeConfig: THEMES[theme],
    toggleTheme,
    isTransitioning,
    rippleOrigin,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
