import Section from './section';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  description: string;
  steps: Step[];
}

export default function HowItWorks({ title, description, steps }: HowItWorksProps) {
  return (
    <Section id="how-it-works" className="border-t">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up [animation-delay:0.2s]">
          {description}
        </p>
      </div>
      <div className="relative mx-auto mt-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex animate-fade-in-up" style={{ animationDelay: `${0.4 + i * 0.2}s` }}>
                <Card className="flex flex-grow flex-col items-center text-center rounded-xl bg-transparent p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardContent className="mt-4 p-0">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <ChevronRight className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
