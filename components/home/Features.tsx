"use client";
import { CheckCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    "Audience analytics dashboard",
    "Content performance insights",
    "Optimal posting schedule",
    "Hashtag & SEO optimization",
    "Engagement growth strategies",
    "Competitor benchmarking",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  Powerful Features
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Tools Designed for{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    Creator Success
                  </span>
                </h2>
              </div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-2xl border border-muted/50 p-2 shadow-2xl">
                <div className="aspect-square rounded-xl overflow-hidden bg-muted/50">
                  {/* Placeholder for feature screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
