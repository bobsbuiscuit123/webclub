import Header from '@/components/landing-page/header';
import Hero from '@/components/landing-page/hero';
import Credibility from '@/components/landing-page/credibility';
import Demo from '@/components/landing-page/demo';
import HowItWorks, { type Step } from '@/components/landing-page/how-it-works';
import Features, { type Feature } from '@/components/landing-page/features';
import Relevance from '@/components/landing-page/relevance';
import Contact from '@/components/landing-page/contact';
import { PenSquare, ListTodo, SearchCode, Layers3, BotMessageSquare, FileCheck2, Send, Zap, Workflow, Search } from 'lucide-react';

const copy = {
  hero: {
    badge: "Task-Based AI Workflows",
    subheadline: "AI workflows that turn everyday school communication into completed tasks.",
    codeLine: "› Turn intent into action",
    primaryCta: "Watch the 30-second demo",
    secondaryCta: "Request a walkthrough",
  },
  credibility: {
    items: [
      {
        icon: Zap,
        title: "AI Assistant",
        description: "Executes tasks from natural language prompts."
      },
      {
        icon: Workflow,
        title: "Workflow Automation",
        description: "Handles announcements, scheduling, and follow-ups."
      },
      {
        icon: Search,
        title: "Centralized Intelligence",
        description: "Surfaces answers from past messages, events, and announcements."
      }
    ]
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
    badge: "Built to scale",
    title: "Built for clubs. Designed to scale across school communication.",
    points: [
      "Designed around real workflows used daily by student leaders and advisors.",
      "Turns requests into actions — not more messages.",
      "Works for clubs today and broader school use cases tomorrow."
    ],
  },
  contact: {
    title: "Interested in a quick walkthrough?",
    description: "Happy to share a short demo and discuss how these workflows could apply within your platform.",
    email: "team@clubhub.ai",
    cta: "Request a walkthrough",
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
      description: 'The AI interprets the intent and structures it into a reviewable task.',
    },
    {
      icon: Send,
      title: 'Admin Reviews & Approves',
      description: 'The final action is reviewed and approved by an admin before execution.',
    },
  ];

const featuresItems: Feature[] = [
    {
        icon: PenSquare,
        title: 'Announcement Orchestration',
        description: 'Draft & send announcements across channels from a single prompt.',
        label: 'communication'
      },
      {
        icon: ListTodo,
        title: 'Context-Aware Task Execution',
        description: 'Converts requests into structured, review-ready actions.',
        label: 'workflow'
      },
      {
        icon: SearchCode,
        title: 'Information Retrieval',
        description: 'Find key details without digging through message threads.',
        label: 'admin'
      },
      {
        icon: Layers3,
        title: 'Multi-Step Automation',
        description: 'Chain actions together for faster workflows.',
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
    <>
      <Header />
      <main className="flex-1">
        <Hero {...copy.hero} headline={heroHeadline} />
        <Credibility items={copy.credibility.items} />
        <Demo {...copy.demo} />
        <HowItWorks {...copy.howItWorks} steps={howItWorksSteps} />
        <Features title={copy.features.title} description={copy.features.description} features={featuresItems} />
        <Relevance {...copy.relevance} />
        <Contact {...copy.contact} />
      </main>
    </>
  );
}
