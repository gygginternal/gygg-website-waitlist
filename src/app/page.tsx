import React from 'react';
import type { Metadata } from 'next';
import FAQ from '@/components/HomePage/FAQ/FAQ';
import Hero from '@/components/HomePage/Hero/Hero';
import Benefits from '@/components/HomePage/Benefits/Benefits';
import Features from '@/components/HomePage/Features/Features';
import Survey from '@/components/HomePage/Survey/Survey';
import Plan from '@/components/HomePage/Plan/Plan';
import Waitlist from '@/components/HomePage/Waitlist/Waitlist';

export const metadata: Metadata = {
  title: 'GYGG',
  description: 'GYGG website',
}

export default function Home() {
  return (
    <main>
      <div id="">
      <Hero />
      </div>
      <Benefits />
      <div id="how-it-works">
        <Features />  
      </div>
      <div id="survey">
        <Survey />
      </div>
      <Plan />
      <FAQ />
      <div id="waitlist">
        <Waitlist />
      </div>
    </main>
  )
}
