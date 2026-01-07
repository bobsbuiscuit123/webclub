import Section from './section';

interface DemoProps {
  label: string;
  title: string;
  videoUrl: string;
  caption: string;
}

export default function Demo({ label, videoUrl, caption }: DemoProps) {
  return (
    <Section>
      <div className="mx-auto max-w-4xl text-center">
        <div id="demo" className="mt-10 animate-fade-in-up transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl [animation-delay:0.4s]">
            <div className="relative rounded-2xl border bg-card/50 backdrop-blur-sm shadow-xl">
              <div className="flex h-11 items-center justify-between rounded-t-2xl bg-muted/50 px-4">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 rounded-md bg-background/50 px-3 py-1 text-sm font-medium text-muted-foreground">
                    {label}
                </div>
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
        <p className="mt-8 text-lg leading-8 text-muted-foreground animate-fade-in-up [animation-delay:0.6s]">
          {caption}
        </p>
      </div>
    </Section>
  );
}
