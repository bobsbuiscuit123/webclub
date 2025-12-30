import Section from './section';
import { CheckCircle2 } from 'lucide-react';

interface RelevanceProps {
  title: string;
  points: string[];
}

export default function Relevance({ title, points }: RelevanceProps) {
  return (
    <Section id="relevance" className="bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
          {title}
        </h2>
        <div className="mt-12 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm animate-fade-in-up [animation-delay:0.2s]">
          <ul className="space-y-6">
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
