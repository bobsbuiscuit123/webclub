import Section from './section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

export interface CredibilityItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CredibilityProps {
  items: CredibilityItem[];
}

export default function CoreFeaturesSection({ items }: CredibilityProps) {
  return (
    <Section id="features" className="pb-12 pt-0 md:pb-24 md:pt-0">
       <div className="mx-auto max-w-5xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
          Core Features
        </h2>
        <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up [animation-delay:0.2s]">
          An AI-powered system for effortless school communication.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Card 
              key={item.title} 
              className="group relative flex flex-col rounded-xl border bg-card/60 p-6 text-left backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up" 
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </CardHeader>
              <CardContent className="mt-4 flex-grow p-0">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
