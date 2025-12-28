'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from './section';

interface HeroProps {
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function Hero({ headline, subheadline, description, primaryCta, secondaryCta }: HeroProps) {
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
    <Section className="pt-24 sm:pt-32 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          {headline}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {subheadline}
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:px-16">
          {description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#demo" onClick={handleScroll}>
              {primaryCta}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact" onClick={handleScroll}>
              {secondaryCta}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
