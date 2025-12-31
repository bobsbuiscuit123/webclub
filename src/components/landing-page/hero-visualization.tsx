'use client';

import { ArrowDown, Bot, User } from "lucide-react";
import { Card } from "../ui/card";

export function HeroVisualization() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center p-4">
      <div className="relative flex flex-col items-center gap-4">
        {/* Card 1 */}
        <Card className="group relative flex h-24 w-64 flex-col items-start justify-center rounded-xl bg-card/60 p-4 text-left backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 border">
            <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-sm text-foreground">CLUB PRESIDENT</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">"Draft a dues reminder and send it to all members."</p>
        </Card>

        <ArrowDown className="h-8 w-8 text-primary/50" />

        {/* Card 2 */}
        <Card className="group relative flex h-24 w-64 flex-col items-start justify-center rounded-xl bg-card/60 p-4 text-left backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 border">
             <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-sm text-foreground">CLUBHUB AI</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Task prepared: Announcement drafted and ready to send</p>
        </Card>

        {/* Glows */}
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 opacity-30 blur-[100px]" />
        <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-emerald-500/10 opacity-30 blur-[100px]" />
      </div>
    </div>
  );
}
