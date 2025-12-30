import Header from '@/components/landing-page/header';
import Hero from '@/components/landing-page/hero';
import Demo from '@/components/landing-page/demo';
import Features, { type Feature } from '@/components/landing-page/features';
import Relevance from '@/components/landing-page/relevance';
import Contact from '@/components/landing-page/contact';
import { PenSquare, ListTodo, SearchCode, Layers3 } from 'lucide-react';

const copy = {
  hero: {
    badge: "AI Workflow Automation",
    subheadline: "AI workflows that turn school communication tasks into actions.",
    description: "Originally built for school clubs, designed to plug into existing school communication platforms.",
    primaryCta: "Watch the 30-second demo",
    secondaryCta: "Contact",
  },
  demo: {
    label: "Live Demo",
    title: "Product Demo",
    videoUrl: "https://www.youtube.com/embed/siH9rm05vBM",
    caption: "Shows task-based AI generating announcements and automating admin workflows.",
  },
  features: {
    title: "What it does",
    description: "ClubHub AI streamlines communication with powerful, task-based workflows.",
  },
  relevance: {
    title: "Built for clubs. Relevant for broader school communication.",
    points: [
      "The core value is the workflow and orchestration layer, not just the AI model.",
      "Can be integrated as a self-contained module into your existing platform.",
      "Complements existing messaging and communication features without replacing them."
    ],
  },
  contact: {
    title: "Interested in a quick walkthrough?",
    description: "I can share a live demo and explain how the AI workflows could integrate into an existing platform.",
    email: "yourname@email.com",
    cta: "Request a meeting",
  },
};

const featuresItems: Feature[] = [
    {
        icon: PenSquare,
        title: 'Automated Drafting',
        description: 'Draft & send announcements from a single prompt.',
      },
      {
        icon: ListTodo,
        title: 'Structured Tasks',
        description: 'Turn requests into structured tasks (with review before sending).',
      },
      {
        icon: SearchCode,
        title: 'Reduced Admin',
        description: 'Reduce time spent digging through messages and details.',
      },
      {
        icon: Layers3,
        title: 'Provider Agnostic',
        description: 'Designed to be provider-agnostic (AI layer can plug into different model providers).',
      },
];

const heroHeadline = (
    <>
      ClubHub <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">AI</span>
    </>
  );

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero {...copy.hero} headline={heroHeadline} />
        <Demo {...copy.demo} />
        <Features title={copy.features.title} description={copy.features.description} features={featuresItems} />
        <Relevance {...copy.relevance} />
        <Contact {...copy.contact} />
      </main>
    </div>
  );
}
