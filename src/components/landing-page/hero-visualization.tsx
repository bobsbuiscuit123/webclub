'use client';

import { ArrowRight, Bot, User } from "lucide-react";
import { Card } from "../ui/card";

export function HeroVisualization() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center p-4">
      <div className="relative flex flex-col items-center gap-4">
        {/* Card 1 */}
        <Card className="group relative flex h-24 w-64 animate-float flex-col items-start justify-center rounded-xl bg-white/5 p-4 text-left backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 border border-white/10">
            <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-sm text-foreground">USER_INTENT</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">"Draft a reminder about the science club meeting..."</p>
        </Card>

        <ArrowRight className="h-8 w-8 text-primary/50 animate-float [animation-delay:0.2s]" />

        {/* Card 2 */}
        <Card className="group relative flex h-24 w-64 animate-float flex-col items-start justify-center rounded-xl bg-white/5 p-4 text-left backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 border border-white/10 [animation-delay:0.4s]">
             <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-sm text-foreground">AI_ACTION</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">[TASK]: Send Announcement</p>
        </Card>

        {/* Glows */}
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 opacity-30 blur-[100px]" />
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-emerald-500/10 opacity-30 blur-[100px]" />
      </div>
    </div>
  );
}
