import Header from '@/components/landing-page/header';
import Hero from '@/components/landing-page/hero';
import Demo from '@/components/landing-page/demo';
import HowItWorks, { type Step } from '@/components/landing-page/how-it-works';
import Features, { type Feature } from '@/components/landing-page/features';
import Relevance from '@/components/landing-page/relevance';
import Contact from '@/components/landing-page/contact';
import { PenSquare, ListTodo, SearchCode, Layers3, BotMessageSquare, FileCheck2, Send } from 'lucide-react';

const copy = {
  hero: {
    badge: "Task-Based AI Workflows",
    subheadline: "AI workflows that turn school communication tasks into actions.",
    codeLine: "> Turn intent into action, not messages",
    primaryCta: "Watch the 30-second demo",
    secondaryCta: "Contact",
  },
  demo: {
    label: "Live Product Demo",
    title: "Product Demo",
    videoUrl: "https://www.youtube.com/embed/siH9rm05vBM",
    caption: "Shows task-based AI generating announcements and automating admin workflows.",
  },
  howItWorks: {
    title: "How It Works",
    description: "A simple, transparent workflow designed for reliability and control.",
  },

  features: {
    title: "Capabilities",
    description: "ClubHub AI streamlines communication with powerful, task-based workflows.",
  },
  relevance: {
    badge: "Design Insight",
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

const howItWorksSteps: Step[] = [
    {
      icon: BotMessageSquare,
      title: 'User Intent',
      description: 'User provides a natural language prompt describing the desired outcome.',
    },
    {
      icon: FileCheck2,
      title: 'AI Parses & Structures',
      description: 'The AI model interprets the intent and structures it into a verifiable task.',
    },
    {
      icon: Send,
      title: 'Admin Reviews & Executes',
      description: 'The final action is reviewed and approved by an admin before execution.',
    },
  ];

const featuresItems: Feature[] = [
    {
        icon: PenSquare,
        title: 'Announcement Orchestration',
        description: 'Draft & send announcements across multiple channels from a single prompt.',
        label: 'communication'
      },
      {
        icon: ListTodo,
        title: 'Context-Aware Task Execution',
        description: 'Turn ambiguous requests into structured tasks with pre-filled details for review.',
        label: 'workflow'
      },
      {
        icon: SearchCode,
        title: 'Information Retrieval',
        description: 'Reduce time spent digging through messages by letting the AI find relevant details.',
        label: 'admin'
      },
      {
        icon: Layers3,
        title: 'Multi-Step Automation',
        description: 'Chain multiple actions together for complex, automated workflows.',
        label: 'orchestration'
      },
];

const heroHeadline = (
    <>
      ClubHub <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">AI</span>
    </>
  );

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero {...copy.hero} headline={heroHeadline} />
        <Demo {...copy.demo} />
        <HowItWorks {...copy.howItWorks} steps={howItWorksSteps} />
        <Features title={copy.features.title} description={copy.features.description} features={featuresItems} />
        <Relevance {...copy.relevance} />
        <Contact {...copy.contact} />
      </main>
    </div>
  );
}
