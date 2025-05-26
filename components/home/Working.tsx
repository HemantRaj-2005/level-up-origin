import { TrendingUp, LayoutDashboard, PenTool } from "lucide-react";
import React from "react";

const Working = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="text-primary">Proven</span> Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">

            {/* Strategy Analysis */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <LayoutDashboard />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy Analysis</h3>
              <p className="text-muted-foreground">
                We analyze your current presence and create a customized growth
                plan.
              </p>
            </div>

            {/* Content Optimization */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <PenTool />
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Optimization</h3>
              <p className="text-muted-foreground">
              Learn what content performs best and how to create more of it.
              </p>
            </div>

            {/* Organic Growth */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organic Growth</h3>
              <p className="text-muted-foreground">
              Implement techniques that attract real, engaged followers.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
