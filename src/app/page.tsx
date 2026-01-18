'use client';

import {
  ParticleBackground,
  TransitionRipple,
  Header,
  Hero,
  InterestGalaxy,
  TravelMap,
  CatSection,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 背景层 */}
      <ParticleBackground />

      {/* 主题切换过渡动画 */}
      <TransitionRipple />

      {/* 内容层 */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <Hero />
        <InterestGalaxy />
        <TravelMap />
        <CatSection />
        <Footer />
      </div>
    </main>
  );
}
