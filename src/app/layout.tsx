import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'ClubHub AI',
  description: 'AI workflows that turn school communication tasks into actions.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--gradient-accent)/0.3),transparent)] bg-[hsl(var(--gradient-end))] text-foreground">
          <div className="pointer-events-none absolute inset-0 z-0 bg-noise"></div>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
