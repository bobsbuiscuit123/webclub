import Section from './section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail } from 'lucide-react';

interface ContactProps {
  title: string;
  description: string;
  email: string;
  cta: string;
}

export default function Contact({ title, description, email, cta }: ContactProps) {
  const mailtoLink = `mailto:${email}?subject=ClubHub%20AI%20–%20Partnership%20Conversation`;

  return (
    <Section id="contact" className="border-t">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-lg font-medium text-foreground">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>{email}</span>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
                <Link href={mailtoLink}>{cta}</Link>
            </Button>
        </div>
      </div>
    </Section>
  );
}
