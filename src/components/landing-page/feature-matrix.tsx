import Section from './section';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check } from 'lucide-react';

interface FeatureMatrixProps {
    title: string;
    description: string;
}

const features = [
    {
        feature: 'Draft & send announcements',
        aiPowered: true,
        manualAlternative: 'Manual drafting & channel posting'
    },
    {
        feature: 'Retrieve form responses',
        aiPowered: true,
        manualAlternative: 'Manually searching records'
    },
    {
        feature: 'Filter members by activity',
        aiPowered: true,
        manualAlternative: 'Exporting & sorting spreadsheets'
    },
    {
        feature: 'Attendance tracking & summaries',
        aiPowered: true,
        manualAlternative: 'Manual data entry and analysis'
    },
    {
        feature: 'Custom AI insights on dashboard',
        aiPowered: true,
        manualAlternative: 'N/A'
    },
    {
        feature: 'AI reminders after inactivity',
        aiPowered: true,
        manualAlternative: 'Manual calendar reminders'
    },
    {
        feature: 'Multi-step task execution',
        aiPowered: true,
        manualAlternative: 'Performing each step manually'
    },
    {
        feature: 'Context-aware suggestions',
        aiPowered: true,
manualAlternative: 'User intuition'
    }
];

export default function FeatureMatrix({ title, description }: FeatureMatrixProps) {
  return (
    <Section id="feature-matrix" className="border-t">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up [animation-delay:0.2s]">
          {description}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-4xl animate-fade-in-up [animation-delay:0.4s]">
        <div className="rounded-xl border bg-card/60 backdrop-blur-sm">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[40%]">Feature</TableHead>
                    <TableHead className="text-center">AI-Powered</TableHead>
                    <TableHead>Manual Alternative Removed</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {features.map((item) => (
                    <TableRow key={item.feature}>
                        <TableCell className="font-medium">{item.feature}</TableCell>
                        <TableCell className="text-center">
                            {item.aiPowered && <Check className="mx-auto h-5 w-5 text-primary" />}
                        </TableCell>
                        <TableCell className="text-muted-foreground line-through">{item.manualAlternative}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </div>
    </Section>
  );
}
