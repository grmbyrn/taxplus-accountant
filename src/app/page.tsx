'use client'
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import StatsSection from '@/components/StatsSection';
import FAQ from '@/components/FAQ';
import LatestArticles from '@/components/LatestArticles';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUsSection />
      <StatsSection />
      <FAQ />
      <LatestArticles />
    </main>
  );
}
