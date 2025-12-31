'use client';

import { Layers3 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Layers3 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            ClubHub <span className="text-primary">AI</span>
          </span>
        </Link>
        <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-accent">
          <Link href="#contact" onClick={handleScroll}>
            Contact
          </Link>
        </Button>
      </div>
    </header>
  );
}
