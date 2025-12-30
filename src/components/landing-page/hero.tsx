'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from './section';
import { Badge } from '@/components/ui/badge';
import type { ReactNode } from 'react';
import { HeroVisualization } from './hero-visualization';

interface HeroProps {
  badge: string;
  headline: ReactNode;
  subheadline: string;
  codeLine: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function Hero({ badge, headline, subheadline, codeLine, primaryCta, secondaryCta }: HeroProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Section className="relative overflow-hidden pt-24 sm:pt-32 md:pt-40">
      <div className="absolute -top-1/4 left-0 -z-10 h-full w-full animate-fade-in">
        <div className="absolute inset-0 -z-20 bg-grid bg-center [mask-image:linear-gradient(to_bottom,white_1%,transparent_50%)]"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-side_at_50%_100%,hsl(var(--gradient-mid)),transparent)]"></div>
      </div>
      
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="text-left">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary animate-fade-in-up [animation-delay:0.2s]">
            {badge}
          </Badge>
          <h1 className="animate-fade-in-up text-4xl font-black tracking-tighter text-foreground sm:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-lg text-xl leading-8 text-muted-foreground animate-fade-in-up [animation-delay:0.4s]">
            {subheadline}
          </p>
          <p className="mt-4 font-mono text-base text-primary/70 animate-fade-in-up [animation-delay:0.6s]">
            {codeLine}
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-4 animate-fade-in-up [animation-delay:0.8s]">
            <Button asChild size="lg" className="group relative bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transform transition-all rounded-lg">
              <Link href="#demo" onClick={handleScroll}>
                <span className="absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-hover:shadow-[0_0_20px_hsl(var(--primary))]"></span>
                <span className="relative">{primaryCta}</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg border-white/20 bg-white/5 text-white/80 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white">
              <Link href="#contact" onClick={handleScroll}>
                {secondaryCta}
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in [animation-delay:0.5s]">
            <HeroVisualization />
        </div>
      </div>
    </Section>
  );
}
