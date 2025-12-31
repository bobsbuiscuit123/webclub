import Section from './section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
}

interface FeaturesProps {
  title: string;
  description: string;
  features: Feature[];
}

export default function Features({ title, description, features }: FeaturesProps) {
  return (
    <Section id="features" className="border-t">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up [animation-delay:0.2s]">
          {description}
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="group relative flex flex-col rounded-xl bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up border" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
              <CardHeader>
                <div className="relative">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                    </div>
                    <Badge variant="secondary" className="absolute top-0 right-0 font-mono text-xs transition-opacity group-hover:opacity-0 bg-secondary/50 text-secondary-foreground/70">{feature.label}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col text-center">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 flex-grow text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
