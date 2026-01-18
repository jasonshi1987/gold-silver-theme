'use client';

import {
  ParticleBackground,
  TransitionRipple,
  Header,
  Hero,
  FeatureCards,
  Stats,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 背景层 - z-index: -1 */}
      <ParticleBackground />

      {/* 主题切换过渡动画 - z-index: 50 */}
      <TransitionRipple />

      {/* 内容层 */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <Hero />
        <FeatureCards />
        <Stats />
        <Footer />
      </div>
    </main>
  );
}
