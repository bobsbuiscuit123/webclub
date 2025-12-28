import Section from './section';
import { CheckCircle2 } from 'lucide-react';

interface RelevanceProps {
  title: string;
  points: string[];
}

export default function Relevance({ title, points }: RelevanceProps) {
  return (
    <Section id="relevance" className="bg-card">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          {title}
        </h2>
        <ul className="mt-12 space-y-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-lg text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
