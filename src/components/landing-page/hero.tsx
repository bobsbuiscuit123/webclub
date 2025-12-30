'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from './section';
import { Badge } from '@/components/ui/badge';

interface HeroProps {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function Hero({ badge, headline, subheadline, description, primaryCta, secondaryCta }: HeroProps) {
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
        <div className="absolute inset-0 -z-10 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]"></div>
        <div className="absolute -top-1/2 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="mx-auto max-w-4xl text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary">
          {badge}
        </Badge>
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {subheadline}
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:px-16">
          {description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transform transition-all">
            <Link href="#demo" onClick={handleScroll}>
              {primaryCta}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-accent hover:text-accent-foreground">
            <Link href="#contact" onClick={handleScroll}>
              {secondaryCta}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
