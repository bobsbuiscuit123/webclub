'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from './section';
import { Badge } from '@/components/ui/badge';
import type { ReactNode } from 'react';

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
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)] animate-fade-in"></div>
        <div className="absolute -top-1/2 left-1/2 -z-20 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] animate-fade-in"></div>
      
      <div className="mx-auto max-w-4xl text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary animate-fade-in-up [animation-delay:0.2s]">
          {badge}
        </Badge>
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter text-foreground sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground animate-fade-in-up [animation-delay:0.4s]">
          {subheadline}
        </p>
        <p className="mt-4 font-mono text-base text-primary/70 animate-fade-in-up [animation-delay:0.6s]">
          {codeLine}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up [animation-delay:0.8s]">
          <Button asChild size="lg" className="group relative bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transform transition-all">
            <Link href="#demo" onClick={handleScroll}>
              <span className="absolute inset-0 rounded-lg bg-[hsl(var(--primary))] opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-hover:shadow-[0_0_20px_hsl(var(--primary))]"></span>
              <span className="relative">{primaryCta}</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary/80 hover:border-primary hover:bg-accent hover:text-accent-foreground">
            <Link href="#contact" onClick={handleScroll}>
              {secondaryCta}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
