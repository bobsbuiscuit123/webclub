import Section from './section';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface RelevanceProps {
  badge: string;
  title: string;
  points: string[];
}

export default function Relevance({ badge, title, points }: RelevanceProps) {
  return (
    <Section id="relevance" className="border-t">
      <div className="mx-auto max-w-4xl">
        <div className="mt-12 rounded-2xl border border-primary/20 bg-muted/30 p-8 backdrop-blur-sm animate-fade-in-up [animation-delay:0.2s] relative">
            <div className="absolute -left-px top-8 h-8 w-px bg-primary shadow-[0_0_12px_theme(colors.primary)]"></div>
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary font-mono text-xs">
                {badge}
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
          <ul className="mt-8 space-y-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-lg text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
