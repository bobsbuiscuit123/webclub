import Section from './section';
import { Card, CardContent } from '@/components/ui/card';

interface DemoProps {
  title: string;
  videoUrl: string;
  caption: string;
}

export default function Demo({ title, videoUrl, caption }: DemoProps) {
  return (
    <Section id="demo" className="bg-card">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          {title}
        </h2>
        <div className="mt-10">
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardContent className="p-0">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={videoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          {caption}
        </p>
      </div>
    </Section>
  );
}
