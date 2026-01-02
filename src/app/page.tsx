import Header from '@/components/landing-page/header';
import Hero from '@/components/landing-page/hero';
import CoreFeaturesSection from '@/components/landing-page/credibility';
import Demo from '@/components/landing-page/demo';
import HowItWorks, { type Step } from '@/components/landing-page/how-it-works';
import FeatureMatrix from '@/components/landing-page/feature-matrix';
import Contact from '@/components/landing-page/contact';
import { PenSquare, ListTodo, Search, Workflow, BotMessageSquare, FileCheck2, Send, Zap, BrainCircuit, Info } from 'lucide-react';

const copy = {
  hero: {
    badge: "AI-Powered School Communication",
    subheadline: "An AI-powered workspace that lets school leaders retrieve information, take action, and stay up to date — all from one place.",
    codeLine: "› Ask questions, execute tasks, and surface key insights without digging through messages or dashboards.",
    primaryCta: "Watch the 30-second product overview",
    secondaryCta: "Request a walkthrough",
  },
  coreFeatures: {
    items: [
      {
        icon: Zap,
        title: "AI Assistant",
        description: "Executes tasks and answers questions from natural language prompts."
      },
      {
        icon: Workflow,
        title: "Workflow Automation",
        description: "Handles announcements, multi-step scheduling, and automated follow-ups."
      },
      {
        icon: Info,
        title: "AI-Powered Retrieval",
        description: "Surfaces answers and insights from forms, attendance, and past messages."
      },
      {
        icon: BrainCircuit,
        title: "Proactive Insights",
        description: "Delivers summaries and suggests actions to keep you ahead."
      }
    ]
  },
  demo: {
    label: "Product Overview",
    title: "Product Demo",
    videoUrl: "https://www.youtube.com/embed/Ga2RnZEe17Q",
    caption: "A short overview of how ClubHub AI turns natural language requests into completed tasks.",
  },
  howItWorks: {
    title: "How It Works",
    description: "A simple, transparent workflow designed for reliability and control.",
  },
  featureMatrix: {
    title: "What ClubHub AI Can Do",
    description: "A clear breakdown of how AI streamlines everyday communication tasks.",
  },
  contact: {
    title: "Interested in seeing how it works?",
    description: "Happy to share a short demo and discuss how AI-driven workflows can simplify school communication.",
    email: "team@clubhub.ai",
    cta: "Request a walkthrough",
  },
};

const howItWorksSteps: Step[] = [
    {
      icon: BotMessageSquare,
      title: 'Ask or Request',
      description: 'User asks a question or describes a task in natural language.',
    },
    {
      icon: Search,
      title: 'AI Retrieves & Prepares',
      description: 'The AI accesses relevant platform data and prepares a draft, summary, or action.',
    },
    {
      icon: FileCheck2,
      title: 'User Reviews & Executes',
      description: 'The final insight or action is reviewed and approved by the user before execution.',
    },
  ];

const heroHeadline = (
    <>
      ClubHub <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">AI</span>
    </>
  );

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero {...copy.hero} headline={heroHeadline} />
        <CoreFeaturesSection items={copy.coreFeatures.items} />
        <Demo {...copy.demo} />
        <FeatureMatrix {...copy.featureMatrix} />
        <HowItWorks {...copy.howItWorks} steps={howItWorksSteps} />
        <Contact {...copy.contact} />
      </main>
    </>
  );
}
