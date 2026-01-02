import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('w-full scroll-mt-24 py-12 md:py-24 lg:py-24', className)}>
      <div className="container mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}
