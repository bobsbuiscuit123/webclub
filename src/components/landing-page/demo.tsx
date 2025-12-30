import Section from './section';

interface DemoProps {
  label: string;
  title: string;
  videoUrl: string;
  caption: string;
}

export default function Demo({ label, title, videoUrl, caption }: DemoProps) {
  return (
    <Section id="demo" className="bg-background">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center rounded-md bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            {label}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">
            <div className="rounded-2xl border border-border/50 bg-card shadow-xl">
              <div className="flex h-8 items-center gap-2 rounded-t-2xl bg-muted/50 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="aspect-video overflow-hidden rounded-b-2xl">
                <iframe
                  className="h-full w-full"
                  src={videoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
        </div>
        <p className="mt-8 text-lg leading-8 text-muted-foreground">
          {caption}
        </p>
      </div>
    </Section>
  );
}
